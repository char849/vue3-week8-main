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
      Favourite
    </h2>
  </header>
  <div class="container px-3">
    <div class="row g-3 mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="nav-link text-dark active p-0">
              首頁
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">我的最愛</li>
        </ol>
      </nav>
      <div class="mt-3">
        <template v-if="filterProducts.length > 0">
          <div class="col-md-12">
            <div class="row g-2">
              <div
                class="col-12 col-md-4 mb-4"
                v-for="item in filterProducts"
                :key="item.id"
              >
                <div class="card h-100">
                  <!-- Favorite icon -->
                  <div class="card_Favorite" @click="setFavorite(item.id)">
                    <span v-if="favoriteList.includes(item.id)"
                      ><i class="bi bi-heart-fill"></i
                    ></span>
                    <span v-else><i class="bi bi-heart"></i></span>
                  </div>

                  <div
                    class="card_imgHidden"
                    role="button"
                    @click="getProduct(item.id)"
                  >
                    <div
                      href="#"
                      class="card_img bg-cover"
                      style="height: 250px"
                      :style="`background-image: url(${item.imageUrl})`"
                    ></div>
                  </div>

                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">
                        {{ item.title }}
                      </h5>
                      <div>
                        <div class="badge rounded-pill bg-secondary h5">
                          {{ item.category }}
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between">
                      <template v-if="item.origin_price === item.price">
                        <span class="h5 ms-auto"
                          >原價： {{ item.origin_price }} 元</span
                        >
                      </template>
                      <template v-else>
                        <del class="text-danger"
                          >原價： {{ item.origin_price }} 元</del
                        >
                        <span class="text-info h5 ms-auto"
                          >特價： {{ item.price }} 元</span
                        >
                      </template>
                    </div>
                    <div class="card-footer border-0 bg-white my-2">
                      <button
                        type="button"
                        class="btn btn-outline-secondary w-100"
                        @click="addCart(item.id)"
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
        </template>
        <div v-else class="text-center mb-5">
          <h2 class="text-danger">沒有我的最愛</h2>
          <p class="display-3 text-danger mb-3">快去產品頁挑選!!!</p>
          <router-link
            to="/products"
            class="fs-5 btn btn-outline-secondary py-3 px-3"
          >
            點此跳轉!
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <NoticeView></NoticeView>
</template>

<script>
import emitter from "@/methods/emitter";
import NoticeView from "@/components/NoticeView.vue";

export default {
  components: {
    NoticeView,
  },
  data() {
    return {
      products: [],
      favoriteList: [],
    };
  },
  computed: {
    filterProducts() {
      return this.products.filter((item) =>
        this.favoriteList.includes(item.id)
      );
    },
  },
  methods: {
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
          this.$router.push(`/product/${id}`);
        });
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
          // get-cart
          emitter.emit("get-cart");
        });
    },
    // 取得我的最愛
    getFavorite() {
      const favoriteList = localStorage.getItem("homeFavorite") || [];
      this.favoriteList = JSON.parse(favoriteList);
      emitter.emit("get-favorite");
    },
    // 存入我的最愛
    setFavorite(id) {
      console.log(id);
      // 查資料裡面，有沒有這個ID
      if (this.favoriteList.includes(id)) {
        const index = this.favoriteList.findIndex((item) => item === id);
        this.favoriteList.splice(index, 1);
        this.$swal({
          text: "己成功移除",
          icon: "success",
        });
      } else {
        this.favoriteList.push(id);
        this.$swal({
          text: "成功收藏",
          icon: "success",
        });
      }
      const favoriteStr = JSON.stringify(this.favoriteList);
      localStorage.setItem("homeFavorite", "");
      localStorage.setItem("homeFavorite", favoriteStr);
      this.getFavorite();
    },
  },
  mounted() {
    this.getFavorite();
    this.getProducts();
  },
};
</script>
<style>
.btn-outline-secondary:hover {
  color: #ffffff;
}
.bg-cover {
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}
</style>
