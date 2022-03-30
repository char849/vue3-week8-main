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
      Shopping List
    </h2>
  </header>
  <div class="container px-3 mb-5">
    <div class="row g-3 mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="nav-link text-dark active p-0">
              首頁
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車清單</li>
        </ol>
      </nav>
      <CheckOutStep :step="order.is_paid ? 'paid' : 'order'" />
      <div class="mt-3">
        <!-- <h5 class="mb-1">訂單已建立完成</h5>
        <p class="text-info">訂單編號: {{ order.id }}</p> -->
        <div class="row">
          <template v-if="order.is_paid">
            <div class="col-md-6">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="order.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ order?.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <h3>訂單細節</h3>
              <table class="table" v-if="orderIsBack">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ date(order.create_at) }}</td>
                  </tr>

                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="order.paid_date">
                        {{ date(order.paid_date) }}
                      </span>

                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="order.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ order.total }}
                    </td>
                  </tr>
                  <tr>
                    <th>訂單成立</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
          <template v-else>
            <div class="col-md-6">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="order.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ date(order.create_at) }}</td>
                  </tr>

                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="order.paid_date">
                        {{ date(order.paid_date) }}
                      </span>

                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="order.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ order.total }}
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      <button
                        v-if="!order.is_paid"
                        type="button"
                        class="btn btn-secondary fw-bold"
                        @click="pay(orderId)"
                      >
                        確認付款去
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <Loading :active="isLoading"></Loading>
</template>
<script>
import CheckOutStep from "@/components/CheckOutStep.vue";
export default {
  components: {
    CheckOutStep,
  },
  data() {
    return {
      isLoading: false,
      orderId: null,
      order: {
        user: {},
      },
      orderID: "",
      isPaid: false,
    };
  },
  computed: {
    orderIsBack() {
      return Object.keys(this.order).includes("id");
    },
  },
  methods: {
    // 時間戳
    date(time) {
      const date = new Date(time * 1000);
      return date.toLocaleDateString();
    },

    getOrder() {
      this.orderID = this.$route.params.id;
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderID}`
        )
        .then((res) => {
          if (res.data.success) {
            const { order } = res.data;
            this.order = order;
          } else {
            this.$swal(res.data.message, "", "error");
          }
        })
        .catch((error) => {
          this.$swal(error, "", "error");
        });
    },
    pay(id) {
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${id}`
        )
        .then((res) => {
          if (res.data.success) {
            const { message } = res.data;
            this.$swal(`${message}!! \n`, "", "success");
            this.getOrder(id);
          } else {
            this.$swal(res.data.message, "", "error");
          }
        })
        .catch((error) => {
          this.$swal(error, "", "error");
        });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
<style>
.btn-secondary {
  background-color: #f82888;
  color: #ffffff;
}
.btn-secondary:hover {
  border-color: #f82888;
  background-color: transparent;
  color: #f82888 !important;
}
</style>
