import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/frontend/FrontView.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/frontend/HomeView.vue"),
      },
      {
        path: "about", // 關於漢文帝
        component: () => import("../views/frontend/AboutView.vue"),
      },
      {
        path: "products", // 產品列表
        name: "products",
        component: () => import("../views/frontend/ProductsView.vue"),
      },
      {
        path: "product/:id", // 單一產品 :動態的參數
        name: "product",
        component: () => import("../views/frontend/ProductView.vue"),
      },
      {
        path: "favorite",
        name: "favorite", // 產品列表
        component: () => import("../views/frontend/FavoriteView.vue"),
      },
      {
        path: "cart", // 購物車
        component: () => import("../views/frontend/CartView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active", // bootstrap 樣式
});

export default router;
