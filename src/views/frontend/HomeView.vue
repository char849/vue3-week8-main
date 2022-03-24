<template>
  <HeaderView />
  <SwiperView category="熱門" data-aos="fade-up" />
  <NoticeView></NoticeView>
</template>
<style>
.bgCover {
  height: 100vh;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.bgImg {
  display: flex;
  flex-direction: column;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
img {
  object-fit: cover;
}
.banner {
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647240157325.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ec%2BQ83t%2BTtcsTGaJhRLQ4KnGK91woDDIRmorVuSB2bVgxbfH6Yrr5s4EYSHQ4hHBB%2BvoWVSUnHWuXVZgQu6Wb8mROLGERMOX%2Bi%2F%2F9776vbHWM2syWW3rEvtxh%2BLpCXd8bmj8%2BCxC8lUhgNU5hmd7W0u7WLoh9YJMd1cuncYDQD14ha9VxBLelSeXSoG8SshNQqIANZlwZGLjiEcWc0HMQuX1PxUNu7YNYg1DHJSYVfyr6e0e5gJG5kpAHYIrGEyjwGiav9Pvvs15SgQIBW9XMaeMhB0UDsSKyVHbF6UEfiCVnRBKOqQ%2Fd4udwtEMLvx6HfVv9%2BdpHjxsCjWh0O2sOQ%3D%3D);
}
.btn-light:hover {
  background-color: #f82888;
  color: #ffffff;
}
.btn-outline-secondary:hover {
  color: #ffffff;
}
button {
  top: 75%;
}
.btn:focus {
  box-shadow: 0 0 0 0rem rgb(255 255 255 / 0%);
}
/* .buttonOutline {
  outline: none;
} */
/*動畫*/
.downFill {
  position: absolute;
  z-index: 1;
  max-width: 100%;
  animation: def 1s ease 0s infinite alternate;
  -webkit-animation: def 1s ease 0s infinite alternate;
}
@-webkit-keyframes def {
  0% {
    top: 70%;
  }

  100% {
    top: 140%;
  }
}
@keyframes def {
  0% {
    top: 70%;
  }
  100% {
    top: 140%;
  }
}

/* . */
.product-area {
  background: #eeeeee;
}
</style>

<script>
import SwiperView from "@/components/SwiperView.vue";
import HeaderView from "@/components/HeaderView.vue";
import NoticeView from "@/components/NoticeView.vue";

export default {
  components: {
    SwiperView,
    HeaderView,
    NoticeView,
  },
};
</script>
