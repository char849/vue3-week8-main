<template>
  <div class="container-fluid product-area text-center pt-5 mt-6">
    <div class="container">
      <p class="h6 text-info fw-bold" data-aos="fade-up">
        純手工彩繪上色 <span class="material-icons"> palette </span>
      </p>
      <p class="h1 text-dark mb-5" data-aos="fade-up">最新熱銷商品</p>
      <template v-if="filterProducts.length > 0">
        <swiper
          :breakpoints="breakpoints"
          :loop="true"
          navigation
          :autoplay="autoplay"
        >
          <swiper-slide
            class="col-12 col-md-4 mb-4"
            v-for="item in filterProducts"
            :key="item.id"
          >
            <div class="card h-100" role="button">
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
                    class="btn btn02 btn-outline-secondary w-100"
                    @click="addCart(item.id)"
                  >
                    <i class="bi bi-cart-plus-fill h4"></i>
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </template>
    </div>
  </div>
  <Loading :active="isLoading"></Loading>
</template>
<style>
.product-area {
  background: #eeeeee;
}
.bg-cover {
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}
.btn02 {
  padding: 19px 47px !important;
  letter-spacing: 1px !important;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
  font-weight: bold;
  top: 45%;
  /* width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #303840; */
}
/* .swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 12px;
  font-weight: bold;
} */
</style>
<script>
import emitter from "@/methods/emitter";

export default {
  data() {
    return {
      products: [],
      favoriteList: [],
      isLoading: false,
      // 轉成json後，初始化將資料給讀出來，給一個預設值
      //favorite: JSON.parse(localStorage.getItem("favorite")) || [],
      swiper: null,
      //modules: [Navigation, Pagination],
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    };
  },
  props: {
    category: {
      type: String,
      default() {
        return "";
      },
    },
  },
  computed: {
    filterProducts() {
      return this.products.filter(
        (item) => this.category === "" || item.category === this.category
      );
    },
  },

  methods: {
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
          this.isLoading = false;
        });
    },
    // 在元件內取得遠端資料
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
    addCart(id, qty = 1) {
      // 加入購物車的資料格式
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id; // 帶入讀取的id
      this.isLoading = true;
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
          this.isLoading = false;
          this.isLoadingItem = "";
          this.$swal(res.data.message);
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

  watch: {
    favorite: {
      handle() {
        // localStorage 自訂欄位，不能存json 必需轉字串
        // 當資料有變動就做寫入，沒有的話就什麼都不做
        localStorage.setItem("favoriteList", JSON.stringify(this.favoriteList));
      },
      deep: true,
    },
  },
  //初使化
  mounted() {
    //把getProducts產品列表運作起來
    this.getProducts();
  },
};
</script>
