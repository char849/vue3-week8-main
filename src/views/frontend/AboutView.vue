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
      <div class="col-12 col-md-6" data-aos="fade-up">
        <img
          class="img-fluid mt-0"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647327112851.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=o98eRk3p4z7O7XvHpibM6xfK7g52KJdITVBZTQ1HskhKn3%2F%2FBcZBApLPejTVDZusA285zAwYCUv8LznYucVR5dOi8MnjuY97L8RSUfY1ktW2FURVvnUH3aimDBXSc%2F%2FGiMpHxoHzCDrDQQPffKbmC%2FydcWd9h%2Fvm47Ulf4qQRSE09Lak6R6dNDaFONppR31aaqc87Akw8skF3hRW1L2X4TWWiuNIx0kVLP4HyZnlvH7nGfhD7c8kUVCHQG%2FZ1sXKaYsxLUsCXOkHTddzzDPkTEqHZpRBjYmhp1Wk00eOVHOU3HmwOWTzauoFm6H%2FZ%2BJI1EI3FN7oo8BpjPsN3QckoQ%3D%3D"
          alt="about-1"
        />
      </div>
      <div
        class="col-12 col-md-6 p-3 p-md-5 d-flex justify-content-center flex-column lh-lg"
        data-aos="fade-up"
      >
        <p class="h5 text-info fw-bold" data-aos="fade-up">
          藝術家介紹 <span class="material-icons-outlined"> badge </span>
        </p>
        <p class="h2 text-success" data-aos="fade-up">
          Hayden 李漢文 3D 美術設計師
        </p>
        <p class="text-dark mt-2" data-aos="fade-up">
          <span class="material-icons-outlined">
            drive_file_rename_outline
          </span>
          2020全國科幻盃模型比賽人形組入圍
          <br />
          <span class="material-icons-outlined">
            drive_file_rename_outline
          </span>
          2020RF開拓盃原型大賽3D列印組第三名
          <br />
          <span class="material-icons-outlined">
            drive_file_rename_outline
          </span>
          2016暴雪官方COSPLAY 比賽入圍
          <br />
          <span class="material-icons-outlined">
            drive_file_rename_outline
          </span>
          高雄樂美館 3D 美術設計師
        </p>
      </div>
    </div>
  </div>
  <AboutSwperView></AboutSwperView>
  <!-- <section class="container-fluid mb-5 text-center">
    <div>
      <h2 class="mb-3" data-aos="fade-up">客製案例</h2>

      <p class="lead w-50 mx-auto" data-aos="fade-up">
        暗黑野兔、丁香小貓、英式鬥牛犬、台灣斑龜、邊境牧羊犬
      </p>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-3 col-6 mb-3">
        <div>
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725290386.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WC5E7JNpS2%2FQW%2FMHOVcri1HXkcgWq4D8ntJor9TAC5imPxwOvPIwLATwo6raPQKGVy4DzafIpny69bJxk%2FxfNvrh3Xp0tdrrBYx0zFT0KcoKMnfro5yB0lNJhFRREoaqN0cYa9Fez7bTM4Qz4lvwlmK9pTXSE5xZnsfAC10NQFPKFP0PWkyTQO1OJTBTWVVcHU8WzIpnlIG2TfriV3%2BVSqeg3SoK%2Bdc9%2F7BpCdQjivwZNJIawsT4MoFjVpXyqRELKLi7tpMIWkQ0pg0ootkg8i1IagSueaHQBOziHiMPrA8tMNKTfryBQzJQ7CnAuW9hX78pDV62him5hq1Kvki8Vg%3D%3D"
            alt="公仔製作流程"
          />
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div>
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725193170.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WaNEM8aALKX7iY7tvk77wRqiZsc%2FjKEupjYAjMEZQ8aqzu7RmAeNx%2BBnxDMLsfhvQnzoPy%2F7V%2BbcPMZCcEANehJeRcT6kFUkhYLpWKKtX3I0KQTAAhGi1MnqncXHlkCydsIrOvr1ott39kVNz%2FhGL07AteKBlGVzOkcRylxsS80Zm1FX6bSHAxbYgDC109GI3bU173TBphyY5MPnWLb71%2Fxai62ISzTaBbUgyXUiMf%2F01edjh%2BFN26ix7CNnYx4Y0WdRSVVVJbNfiRb59G5sA4Vzm1wDpGQacfufWFWyS6V1YHxzLMbbI%2Fw7VoGKL%2FcJAMATGuuykxNeGOuw7NH4wQ%3D%3D"
            alt="公仔製作流程"
          />
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div>
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725214695.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DYiAeR7INUCEVCXplQlPihIYxtVDNA750rg1tghh4wyMIV%2BbXxDiXvCZY6oX%2BbDzZs2Rus7lblUFVb3iGgmXTxog5kquzgd7oYWMZS9fxz5qJkChkEMNHx%2BnNGCHZLziKDXOhCyRuHKc20hL9le3x074HlUGPd4l%2BRwyhylJ5t8Reh2vfNu5ROa2CKgv3%2FZkVWdTG1KFipy3mnjilItPJuJ1plrbHaQVAH9%2BQcZjP61qkF2GCBJHiRpSEXPi8fuqg9v30RiKWWKSsP2wZBo%2FHRcmfdEzO56D9nlGLSJF5c9ZnoFkuramHfeS5ayHXEUj96prWniiutU64mYOzJPs8w%3D%3D"
            alt="公仔製作流程"
          />
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div>
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725237848.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QY%2FtKC6hlGPGJRCtj9VXoGki3ovgrX967ym0oH2fLMusVDNz4xacSMho46ouDiM1W%2F1tTtJ%2F%2FaJ9S4cQemI3kndkf4BKBQcAtoIL8MZCozg8qvB8zDFcaaLAyt8JtS4SszFvRP%2FiopJdx%2Bt0AAIDzZF%2BCLgXd47PXadYAMM5qBDOyxvhax0Jy%2Feu9iZZL0dGGIGsZxat3cc%2B4zhEOrBEW7Rf0Q%2Bo6%2Fm7CRGlmis2MactETpxmdHXGLHt1f8FyEJtozrYldpFRN9n6iHljIBfp0MOTxbX0RBVopdlL6i5SJZZgUzbBpKdshjyiYfJehfobbJ47Q1MCtjcEARAnl5%2F2g%3D%3D"
            alt="公仔製作流程"
          />
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
import AboutSwperView from "@/components/AboutSwiperView.vue";
export default {
  components: {
    AboutSwperView,
  },
};
</script>
