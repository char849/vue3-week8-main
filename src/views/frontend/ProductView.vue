<template>
  <header class="position-relative mb-7 mb-md-9">
    <img
      class="bg-mask-60 img-cover pageBanner w-100"
      src="@/assets/img/products.jpg"
      alt="關於漢文帝banner"
    />
    <h2
      class="position-absolute text-hv-center top-50 start-50 h2 fw-bold text-white-50 pageBanner-text"
    >
      Single Product
    </h2>
  </header>
  <div class="container mt-7">
    <nav
      style="--bs-breadcrumb-divider: '>'"
      aria-label="breadcrumb"
      class="mb-3"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/products">手作模型</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ category || "類別" }}
        </li>
        <li class="breadcrumb-item">{{ product.title }}</li>
      </ol>
    </nav>
  </div>
  <section class="bg-light p-3 mb-5">
    <div class="container">
      <section>
        <h4 class="text-primary">產品詳細</h4>
        <p>{{ productDetail.content }}</p>
      </section>
      <section>
        <h4 class="text-primary">訂購及其他說明</h4>
        <ul>
          <li>
            取餐時間： 套餐類型
            <span class="text-danger"> 提前三天 </span>
            預購，其餘商品如不想等候請提前一天訂購。
          </li>
          <li>
            外送服務： 請提早確認是否人手充足可以外送，運送範圍為該天販售地點 10
            公里以內。
          </li>
          <li>
            生鮮食品因其規格問題，會依照其重量在正負範圍 5%
            ，外觀大小以及厚度一定會略有差異。
          </li>
          <li>因無任何添加，食材，飲料皆已新鮮現煮，請把握鮮期使用。</li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import emitter from "@/methods/emitter";

export default {
  data() {
    return {
      product: {}, // 存入單一筆遠端資料
      qty: 1, // modal中加入購物車的數量
      cartData: {
        carts: [], // 14. 加入第二層 carts: [] html的清空購物車那邊就可以寫入它的結構了
      },
      num: 1,
      id: null,
      category: "",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        // 避免 非 prodcut 跳轉 會有問題
        if (to.name === "product") {
          this.id = to.params.id;
          this.getProduct(this.id);
        }
      },
    },
    id() {
      //console.log(this.id);
      this.product = {};
      this.getProduct();
    },
  },
  methods: {
    // 在元件內取得遠端資料
    getProduct(id) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            //console.log(res);
            this.product = res.data.product;
            this.category = res.data.product.category;
          } else {
            this.$router.push("/products");
          }
        });
    },
    addCart(id, qty = 1) {
      // 5. 加入購物車的資料格式
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id; // 帶入讀取的id
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        ) // 將資料格式帶入
        .then((res) => {
          console.log(res);
          // 加入購物車後，再重新取得購物車內容
          //this.getCart();
          // 讀取完後，清空id
          this.isLoadingItem = "";
          // get-cart
          emitter.emit("get-cart");
        });
    },
    getFavorite() {
      const favoriteList = localStorage.getItem("homeFavorite") || [];
      this.favoriteList = JSON.parse(favoriteList);
      emitter.emit("get-favorite");
    },
    setFavorite(id) {
      console.log(id);
      // 查資料裡面，有沒有這個ID
      if (this.favoriteList.includes(id)) {
        const index = this.favoriteList.findIndex((item) => item === id);
        this.favoriteList.splice(index, 1);
      } else {
        this.favoriteList.push(id);
      }
      const favoriteStr = JSON.stringify(this.favoriteList);
      localStorage.setItem("homeFavorite", "");
      localStorage.setItem("homeFavorite", favoriteStr);
      this.getFavorite();
    },
    changeImg(e) {
      const clickImg = e.target.getAttribute("src");
      const mainImage = document.getElementById("mainImage");
      mainImage.setAttribute("src", clickImg);
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>
