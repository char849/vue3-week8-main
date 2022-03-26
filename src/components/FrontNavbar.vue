<template>
  <nav
    class="navbar navbar-expand-lg fixed-top d-block py-2"
    :class="{ 'shadow-sm': scroll, 'bg-primary': scroll }"
  >
    <div class="container">
      <h1 class="logo navbar-brand mb-0">
        <router-link class="d-flex me-2 text-decoration-none" to="/">
          <img :src="[navClassList.src]" width="130" alt="Logo" />
        </router-link>
      </h1>
      <!-- lg 以下 -->
      <a
        href="#"
        class="position-relative d-block d-lg-none ms-auto nav-link"
        to="/cart"
      >
        <i
          class="bi bi-box2-heart fs-4"
          :class="[navClassList.nav, navClassList.text]"
        ></i
        ><span
          class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
          >1</span
        >
      </a>
      <a
        href="#"
        class="position-relative navbar-brand d-lg-none nav-link"
        to="/cart"
      >
        <i
          class="bi bi-cart3 fs-4"
          :class="[navClassList.nav, navClassList.text]"
        ></i
        ><span
          class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
          >{{ cartData?.carts?.length }}</span
        >
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i
          class="bi bi-justify-right fs-1"
          :class="[navClassList.nav, navClassList.text]"
        ></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-4 mb-lg-0 fw-bold">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/about"
              :class="[navClassList.nav, navClassList.text]"
              >關於漢文帝</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/products"
              :class="[navClassList.nav, navClassList.text]"
              >手作模型</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/course"
              :class="[navClassList.nav, navClassList.text]"
              >課程招生</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/login">登入產品後台</router-link>
          </li> -->
          <!-- <li class="nav-item">
            <router-link
              v-if="status === true"
              class="nav-link"
              to="/admin/products"
              >產品後台</router-link
            >
          </li> -->
        </ul>
      </div>
      <!-- lg 以上 -->
      <div class="navbar-nav">
        <a
          href="#"
          class="position-relative d-flex d-none d-lg-block nav-link"
          to="/favorite"
        >
          <i
            class="bi bi-box2-heart fs-4"
            :class="[navClassList.nav, navClassList.text]"
          ></i
          ><span
            v-if="favoriteLen > 0"
            class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
          >
            {{ favoriteLen }}</span
          >
        </a>
        <a
          href="#"
          class="position-relative d-flex d-none d-lg-block nav-link"
          to="/cart"
        >
          <i
            class="bi bi-cart3 fs-4"
            :class="[navClassList.nav, navClassList.text]"
          ></i
          ><span
            class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
            >{{ cartData?.carts?.length }}</span
          >
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from "@/methods/emitter";

export default {
  data() {
    return {
      scroll: "",
      navClassList: {
        nav: "navbar-dark",
        text: "text-light",
        src: "https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191678439.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0LplI80HOeontFEvfNoc9%2BU5hkaT%2B5UrdC5SWznp%2FRDUpOtQIw1EUuYgsI0Zor9j9%2BMMlqpbEEciXrhy%2FfNT5cop71NKZCjtHNJX3YPYRlGRctIyBB7b3tZ2vVBMbhgDi9l5Azwg8sMX%2BI3EuTb%2BR0qFFwyNBzBpuGPGazvFmWMr0OpCy6yoCZlJettNvgTheUAJ8zYrSCct%2F08StB2q0%2F57WiylkU53IDebLkuudtumAJlKsdu4b5YLrirR3BhVWiDc3vUtxlF9DBzqh55HRvBTkXkyf3yVcoRTiqSA9fGPGZbUGhjXpRHpMr6iN4d0RBbuPlgIjOe2hVWBMee5Q%3D%3D",
      },
      cartData: {
        carts: [], // 14. 加入第二層 carts: [] html的清空購物車那邊就可以寫入它的結構了
      },
      favoriteList: [],
    };
  },
  computed: {
    favoriteLen() {
      return this.favoriteList?.length;
    },
  },
  methods: {
    // 5. 取得購物車內容
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log("cart:", res);
          this.cartData = res.data.data;
        });
    },
    getFavorite() {
      const favoriteList = localStorage.getItem("homeFavorite") || "[]";
      this.favoriteList = JSON.parse(favoriteList);
    },
  },
  mounted() {
    this.getCart();
    //當emitter被觸發時，會再次取得購物車品項
    emitter.on("get-cart", () => {
      this.getCart();
    });
    emitter.on("get-favorite", () => {
      this.getFavorite();
    });
    this.getFavorite();
    window.addEventListener("scroll", () => {
      this.scroll = document.documentElement.scrollTop > 0;
      const windowY = window.scrollY;
      if (windowY > 10) {
        this.navClassList = {
          nav: "navbar-dark",
          text: "text-success",
          bg: "bg-white",
          src: "https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191590300.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TBm7MtVRJypq3N2k5e7SAQbBNCYt%2BaLl9%2FC%2BIs%2FL3MVfhGHDvoC1A2vqzMuKaYp6bEkeVm5l4OpZtbIsoFa94hR0yt31xGSGmPy1ORr1LUPjF9bMVFngdXP32WMX19pkYKQxzHJOusWUh21ab%2BPqkPXiTNZrt3mtpnlEgAfpyzdC%2BWIt9k1PE6v%2B3xuv2qwbHNTb8AgTn9btLbUcsCmdumhZOoISUnLayyqxpZKg0nvZFIQ5wfxxbNgm29gzPCUTNCI8gXFheqWBGznoE4RcAfHYZEUcil6TRNO9XKzTJxiBRG02pZP2BLh1XR%2BFH9jHsaqa2aysASiEnk8qsc22Nw%3D%3D",
        };
      } else {
        this.navClassList = {
          nav: "navbar-light",
          text: "text-light",
          bg: "",
          src: "https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191678439.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0LplI80HOeontFEvfNoc9%2BU5hkaT%2B5UrdC5SWznp%2FRDUpOtQIw1EUuYgsI0Zor9j9%2BMMlqpbEEciXrhy%2FfNT5cop71NKZCjtHNJX3YPYRlGRctIyBB7b3tZ2vVBMbhgDi9l5Azwg8sMX%2BI3EuTb%2BR0qFFwyNBzBpuGPGazvFmWMr0OpCy6yoCZlJettNvgTheUAJ8zYrSCct%2F08StB2q0%2F57WiylkU53IDebLkuudtumAJlKsdu4b5YLrirR3BhVWiDc3vUtxlF9DBzqh55HRvBTkXkyf3yVcoRTiqSA9fGPGZbUGhjXpRHpMr6iN4d0RBbuPlgIjOe2hVWBMee5Q%3D%3D",
        };
      }
    });
  },
  unmounted() {
    emitter.off("get-cart");
    emitter.off("get-favorite");
    window.removeEventListener("scroll", () => {
      this.scroll = document.documentElement.scrollTop > 0;
      const windowY = window.scrollY;
      if (windowY > 10) {
        this.navClassList = {
          nav: "navbar-dark",
          text: "text-success",
          "navbar-toggler": "text-dark",
          src: "https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191590300.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TBm7MtVRJypq3N2k5e7SAQbBNCYt%2BaLl9%2FC%2BIs%2FL3MVfhGHDvoC1A2vqzMuKaYp6bEkeVm5l4OpZtbIsoFa94hR0yt31xGSGmPy1ORr1LUPjF9bMVFngdXP32WMX19pkYKQxzHJOusWUh21ab%2BPqkPXiTNZrt3mtpnlEgAfpyzdC%2BWIt9k1PE6v%2B3xuv2qwbHNTb8AgTn9btLbUcsCmdumhZOoISUnLayyqxpZKg0nvZFIQ5wfxxbNgm29gzPCUTNCI8gXFheqWBGznoE4RcAfHYZEUcil6TRNO9XKzTJxiBRG02pZP2BLh1XR%2BFH9jHsaqa2aysASiEnk8qsc22Nw%3D%3D",
        };
      } else {
        this.navClassList = {
          nav: "navbar-light",
          text: "text-light",
          src: "https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191678439.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0LplI80HOeontFEvfNoc9%2BU5hkaT%2B5UrdC5SWznp%2FRDUpOtQIw1EUuYgsI0Zor9j9%2BMMlqpbEEciXrhy%2FfNT5cop71NKZCjtHNJX3YPYRlGRctIyBB7b3tZ2vVBMbhgDi9l5Azwg8sMX%2BI3EuTb%2BR0qFFwyNBzBpuGPGazvFmWMr0OpCy6yoCZlJettNvgTheUAJ8zYrSCct%2F08StB2q0%2F57WiylkU53IDebLkuudtumAJlKsdu4b5YLrirR3BhVWiDc3vUtxlF9DBzqh55HRvBTkXkyf3yVcoRTiqSA9fGPGZbUGhjXpRHpMr6iN4d0RBbuPlgIjOe2hVWBMee5Q%3D%3D",
        };
      }
    });
  },
};
</script>

<style>
.navbar-brand {
  margin-right: 0.5rem;
}
.navbar {
  transition: background-color 0.8s, padding 0.8s;
  z-index: 1030;
}
.navClassList {
  transition: background-color 0.1s, padding 0.1s;
}

/* nav hover效果 */
.navbar-nav > .nav-item > .nav-link {
  position: relative;
  display: block;
  padding-bottom: 2px;
}
.navbar-nav > .nav-item > .nav-link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background: currentColor;
  visibility: visible;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
.navbar-nav > .nav-item > .nav-link:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
