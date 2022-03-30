<template>
  <header class="position-relative mb-7 mb-md-9">
    <img
      class="bg-mask-60 d-lg-none d-block img-cover pageBanner w-100"
      src="@/assets/img/products.jpg"
      alt="關於漢文帝banner"
    />
    <img
      class="bg-mask-60 img-cover d-lg-block d-none pageBanner w-100"
      src="@/assets/img/products-pc.jpg"
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
          <li class="breadcrumb-item active" aria-current="page">關於我們</li>
        </ol>
      </nav>
      <div
        class="col-12 col-md-6 bg-white border rounded p-1"
        data-aos="fade-up"
      >
        <img
          class="img-fluid bg-white border rounded p-1"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647327112851.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=o98eRk3p4z7O7XvHpibM6xfK7g52KJdITVBZTQ1HskhKn3%2F%2FBcZBApLPejTVDZusA285zAwYCUv8LznYucVR5dOi8MnjuY97L8RSUfY1ktW2FURVvnUH3aimDBXSc%2F%2FGiMpHxoHzCDrDQQPffKbmC%2FydcWd9h%2Fvm47Ulf4qQRSE09Lak6R6dNDaFONppR31aaqc87Akw8skF3hRW1L2X4TWWiuNIx0kVLP4HyZnlvH7nGfhD7c8kUVCHQG%2FZ1sXKaYsxLUsCXOkHTddzzDPkTEqHZpRBjYmhp1Wk00eOVHOU3HmwOWTzauoFm6H%2FZ%2BJI1EI3FN7oo8BpjPsN3QckoQ%3D%3D"
          alt="about-1"
        />
      </div>
      <div
        class="col-12 col-md-6 p-3 p-md-5 d-flex justify-content-center flex-column lh-lg"
        data-aos="fade-up"
      >
        <p class="h6 text-info fw-bold" data-aos="fade-up">
          藝術家介紹 <span class="material-icons-outlined"> badge </span>
        </p>
        <p class="h2 text-dark" data-aos="fade-up">
          Hayden 李漢文 3D 美術設計師
        </p>
        <p class="text-warning mt-2" data-aos="fade-up">
          <span class="material-icons-outlined"> school </span>
          大葉大學視覺傳達設計
          <br />
          <span class="material-icons-outlined"> history_edu </span>
          2020全國科幻盃模型比賽人形組入圍
          <br />
          <span class="material-icons-outlined"> history_edu </span>
          2020RF開拓盃原型大賽3D列印組第三名
          <br />
          <span class="material-icons-outlined"> history_edu </span>
          2016暴雪官方COSPLAY 比賽入圍
          <br />
          <span class="material-icons-outlined"> business_center </span>
          高雄樂美館 3D 美術設計師
        </p>
      </div>
    </div>
  </div>
  <AboutSwperView></AboutSwperView>
</template>

<script>
import AboutSwperView from "@/components/AboutSwiperView.vue";
export default {
  components: {
    AboutSwperView,
  },
  
};
</script>
