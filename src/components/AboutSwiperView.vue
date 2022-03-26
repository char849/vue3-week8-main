<template>
  <div class="container-fluid product-area text-center pt-5 mt-md-6 mt-2 pb-5">
    <div class="container">
      <p class="h6 text-info fw-bold" data-aos="fade-up">
        客製案例 <span class="material-icons-outlined"> work_history </span>
      </p>
      <p class="h1 text-dark mb-5" data-aos="fade-up">特製造型公仔</p>
      <swiper
        :breakpoints="breakpoints"
        :loop="true"
        navigation
        :autoplay="autoplay"
      >
        <swiper-slide class="col-12 col-md-4 mb-4">
          <div
            href="#"
            class="card_img bg-cover"
            style="height: 500px"
            :style="`background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1648024404504.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gFYMksilw03evib2aXj320%2BibSLOswUGf%2FQRIweublcHaUsbb9j9Cqt53dPhZOXM2b0pVKtg5TbjH2VfZk%2Bn%2FX6YmzKeMyKuHuYVyvXgbSALBww7XSh1osr4AAcOj9y7QGLgg%2BmC73vuWo2eeX3kpiSN731jOFsZ6RKNky55JT3a03H92qmse14wuWBxO9L7XRj%2Ffun%2BLCSqVTAXpEIGC1GcQ%2BKRnX4bW8COurBhH4fBW03z5wg6JvZnKWz%2BKBWXHf5pvsy8OVk6NNlzMB%2Btk9SVz5XrhGeqQQV9oIH%2B7ItZPVfvhVjPXshIcE8aXAKFZPSAufp8mKGJlaGV1Qj5QA%3D%3D)`"
          ></div>
        </swiper-slide>
        <swiper-slide class="col-12 col-md-4 mb-4">
          <div
            href="#"
            class="card_img bg-cover"
            style="height: 500px"
            :style="`background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1648024427191.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=g0mzfVdV%2FsVWY1g9h%2FmhDpYW760sSvIrTo2AyCutu2MlOfqjyQfO1BoqBly1JjttFspNDxvz3vaxxoC9S1BntzjO%2FCTOS1xJhXg%2ByJmoz0OAr9nhNu42MY7QRfZ%2B3H9JAPoMbdpTVumpwpZZZpYCvVTngxdpEDdajimBwlXhfvfM563GniaBJrkFAM9Tm4t2W89CtcbR2dpw5OJXfhDPgpb42lzmUF7qqsAwx6OUoQWkTh2AV3Hl1Rd0u33iuXhxYcCJaVjCeIBW2UfjAWw3UIrkdB%2BB7kbafYavMDrn0%2FisI9%2Fl3dj7LLJf5U%2BNyYRbCvw2Jcb%2BWZoFqHjoI4DGKQ%3D%3D
)`"
          ></div>
        </swiper-slide>
        <swiper-slide class="col-12 col-md-4 mb-4">
          <div
            href="#"
            class="card_img bg-cover"
            style="height: 500px"
            :style="`background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1648024453615.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iyj%2Ffrg0YB9EqaQy1Ey%2FCJO%2B%2BSzWI6wGXUQsaWN9PEv2FGN2hIHlArG1q%2FdieXOyG6VXn0e1Fl5TUoDgQdQyuLxSMzvD1SdDoEMi6ucN4md25NMpfiAdX%2BJCup9wsc9CLGIZ3hsiO%2F7tC3A%2FKYZty5LvSyB2JM%2FaPe3FoTRAtcHcwNv2fRn7AsVEBzRXrkIcAThEQSzNs12mHQaHhRY55%2Ba6v%2BXOEtCkX0Z6HjJyzX1RlOGFcrBXKAvZfV3%2FTovCgGc1iXySO1b7pFyohUtkVq2ZcpMqvF3ly6PtJ3C7EUd0QUJ7NkznsVTRWLhhr0mM2CcX9YtBZOh0sT7pTO044g%3D%3D)`"
          ></div>
        </swiper-slide>
        <swiper-slide class="col-12 col-md-4 mb-4">
          <div
            href="#"
            class="card_img bg-cover"
            style="height: 500px"
            :style="`background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1648024479232.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=G%2FRRL1BQduc8jfFLDq3Wj2lXemg%2FQNB8o262qXZiatYoNwlSQGyEqvXCeAnJibqdVMN0okrxKhBCebOimBRVa7ax%2BtZd%2Ffs%2FiJL3Uz%2B1x8ufi9JBFr50g7dM0Xb1vbe4wQdZyzgKu9dA3428AwXVDQTtL2f0Zo0xh2GeTxFj6nun7T%2Fk97CA0n4McZPlnHZnCQCofNipxjobUF344%2Bm3dQTEiIvteZW1DX9uPJXOSQBe2urgZMsnyNMdZoqwKi5JzDnf4ZbQBee0JjNvqv3%2BizdY0bf25R5Th%2BmYYVRbOE6nTa2sJ9VmWYZNx5OxMBGv6COxmLBlyf1NJWh7DYgvyg%3D%3D)`"
          ></div>
        </swiper-slide>
        <swiper-slide class="col-12 col-md-4 mb-4">
          <div
            href="#"
            class="card_img bg-cover"
            style="height: 500px"
            :style="`background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1648024506488.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pFKmq%2FwFamoHp%2BBK%2FgtRn3wUOJXHlKOQHAMrETegi6grSo6G6oOVQfYMP%2BFz4NEqCJXI1t4z8A9R9GmlACdkDtccsWs4iEdr0ad3Djtd9oVCcRagWc54lnmDN%2Fu1BLHKBRRIADti%2Bf1D6B8hDwf%2BG%2FkFFXlpf9wAd8IxdC%2BHZQb%2FUnlCPQcMhV31t2ltRMs38Smqc9uvFnJuCfbpcPYlc%2FkOna%2B4fvY%2BulqK91U70QFkGTqq3T3aksONL7wocXZ%2B%2BNxxvZVbVDDgZKjjuH9i0GG8iAkvAAFHLh9GMweXSekt3zNTR7Bbr%2BK0jkUMo7OcbwCGXuZtpsPbXiZB9cU5iw%3D%3D)`"
          ></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
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

.swiper-button-next,
.swiper-button-prev {
  color: white;
  font-weight: bold;
  top: 45%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #303840;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 12px;
  font-weight: bold;
}
</style>
<script>
export default {
  data() {
    return {
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
};
</script>
