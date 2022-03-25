<template>
  <HeaderView />
  <SwiperView category="熱門" data-aos="fade-up" />
  <NoticeView></NoticeView>
</template>

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
