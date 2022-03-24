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
      Products List
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
          <li class="breadcrumb-item active" aria-current="page">
            {{ list.currentCategory === "all" ? "全部" : list.currentCategory }}
          </li>
        </ol>
      </nav>
      <div class="col-md-2">
        <div class="list-group sticky-top mb-3">
          <a
            href="#"
            :class="{ active: list.currentCategory === 'all' }"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="categoryHandler('all')"
          >
            全部
          </a>
          <a
            v-for="item in list.ary"
            :key="item"
            href="#"
            :class="{ active: list.currentCategory === item }"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="categoryHandler(item)"
          >
            {{ item }}
          </a>
        </div>
      </div>
      <div class="col-md-10">
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

              <div class="card_imgHidden">
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
                    <del>原價： {{ item.origin_price }} 元</del>
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
    </div>
  </div>
</template>
<script>
import emitter from "@/methods/emitter";

export default {
  data() {
    return {
      list: {
        currentCategory: "all",
        ary: [],
        changeCategory: false,
      },
      products: [],
      favoriteList: [],
      // 購物車列表
      cartData: {
        carts: [], // 加入第二層 carts: [] html的清空購物車那邊就可以寫入它的結構了
      },
    };
  },

  computed: {
    filterProducts() {
      return this.products?.filter(
        (product) =>
          this.list.currentCategory === "all" ||
          product.category === this.list.currentCategory
      );
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.getFavorite();
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
          if (res.data.success) {
            const { products } = res.data;
            this.products = products;
            //this.pagination = res.data.pagination;
            //this.paginationHandler(products);
            this.getCategory();
          } else {
            this.$swal(res.data.message, "", "error");
          }
          //this.$emitter.emit("fullScreenLoading", false);
        });
    },
    addCart(id, qty = 1) {
      // 5. 加入購物車的資料格式
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id; // 6. 帶入讀取的id
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        ) // 5. 將資料格式帶入
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
    getCategory() {
      const categorys = this.products?.map((product) => product.category);
      this.list.ary = [...new Set(categorys)];
    },
    categoryHandler(type) {
      this.list.currentCategory = type;
      this.products.filter(
        (product) => type === "all" || product.category === type
      );
    },
  },
};
</script>

<style>
.btn {
  padding: 19px 30px;
}
.btn:hover {
  color: #fff;
}
.bg-cover {
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}
</style>
