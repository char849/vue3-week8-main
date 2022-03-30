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
  <div class="container px-3 mb-5">
    <div class="row g-3 mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="nav-link text-dark active p-0">
              首頁
            </router-link>
          </li>

          <li class="breadcrumb-item active" aria-current="page">
            {{ category || "類別" }}
          </li>
        </ol>
      </nav>
      <div class="col-lg-5 mt-4 col-lg-6">
        <div
          class="card mb-3 bg-cover"
          :style="{ backgroundImage: 'url(' + imgUrl + ')', height: '350px' }"
        ></div>
        <div class="row">
          <div class="pb-lg-3">
            <a
              href="#"
              v-for="(item, index) in imagesUrl"
              :key="index"
              @click.prevent="click(item, index)"
            >
              <img class="picture pe-1 pb-2" :src="item" alt="產品圖片" />
            </a>
          </div>

          <!--End Controls-->
        </div>
      </div>
      <!-- col end -->
      <div class="col-lg-6 mt-4">
        <div class="card">
          <div class="card-body">
            <span
              class="border border-secondary fw-bold text-secondary px-2 me-2"
            >
              {{ product.category }}
            </span>
            <h1 class="h2 mt-2">{{ product.title }}</h1>
            <div class="h5" v-if="product.price === product.origin_price">
              {{ product.price }} 元
            </div>
            <div v-else>
              <del class="h6 text-danger"
                >原價 {{ product.origin_price }} 元</del
              >
              <p class="h4 mb-3 text-info">NT {{ product.price }} 元</p>
            </div>
            <p class="h5 text-dark py-2">
              {{ product.content }}
            </p>
            <p class="h5 text-warning lh-base">
              {{ product.description }}
            </p>
            <p>付款方式： ATM 、 信用卡</p>
            <div class="card-footer d-flex border-0 bg-white my-2 py-3">
              <select id="" class="form-select w-50 me-1" v-model="qty">
                <option :value="num" v-for="num in 5" :key="`${num}-${id}`">
                  {{ num }}
                </option>
              </select>
              <button
                type="button"
                class="btn btn-outline-secondary w-50"
                @click.prevent="addCart(product.id, qty)"
              >
                <i class="bi bi-cart-plus-fill h4"></i>
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading :active="isLoading"></Loading>
</template>
<style>
.bg-cover {
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}
.btn-outline-secondary:hover {
  color: #fff;
}
.form-select {
  background-color: #fff;
  border: 1px solid #f82888;
}
.form-select:focus {
  border: 1px solid #f82888;
}
.btn {
  padding: 0.375rem 0.75rem !important;
}
</style>
<script>
import emitter from "@/methods/emitter";

export default {
  data() {
    return {
      products: [],
      category: "",
      product: {},
      imgUrl: "",
      imagesUrl: [],
      qty: 1,
      cart_id: [],
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
    favorite: {
      handle() {
        // localStorage 自訂欄位，不能存json 必需轉字串
        // 當資料有變動就做寫入，沒有的話就什麼都不做
        localStorage.setItem("favoriteList", JSON.stringify(this.favoriteList));
      },
      deep: true,
    },
  },

  methods: {
    click(item) {
      this.imgUrl = item;
    },
    getProducts() {
      // 參數預設值
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all` //query 用? 去帶
        )
        .then((res) => {
          console.log(res);
          //把產品列表存起來，準備呈現在畫面
          this.products = res.data.products;
          //this.isLoading = false;
        });
    },
    getProduct(id) {
      //console.log("route:", this.$route);
      //const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          //console.log(res.data.product);
          // 將遠端資料取回
          this.product = res.data.product;
          this.category = res.data.product.category;
          this.imgUrl = res.data.product.imageUrl;
          this.imagesUrl = res.data.product.imagesUrl;
        });
    },
    // 取得購物車內容
    getCart() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          //console.log("cart:", res);
          this.cartData = res.data.data;
          this.isLoading = false;
          this.getCart();
          emitter.emit("get-cart");
        });
    },
    addCart(id, qty = 1) {
      // 加入購物車的資料格式
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
          // 5. 加入購物車後，再重新取得購物車內容
          //this.getCart();
          // 6. 讀取完後，清空id
          this.isLoadingItem = "";
          this.$swal(res.data.message);
          // get-cart
          emitter.emit("get-cart");
        });
    },

    mounted() {
      this.getProduct();
      this.getProducts();
    },
  },
};
</script>
