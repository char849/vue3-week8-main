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
        <template>
          <div class="row align-items-center mb-5 p-4 bg-light">
            <div class="col-md-6 mb-4">
              <div class="text-center">
                <h1 class="text-success text-center h1 mb-3">
                  <i class="bi bi-check-circle-fill" /> 付款成功
                </h1>
                <p class="w-75 mx-auto">
                  感謝您的訂購，為您附上購買明細。如對此次交易有任何問題，請隨時聯絡我們。
                </p>
                <button
                  type="button"
                  class="btn btn-primary col-md-3"
                  @click="goShop"
                >
                  返回菜單
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="bg-white p-md-5 rounded">
                <h2 class="text-center border-bottom pb-3">購買明細</h2>
                <table v-if="orderIsBack" class="table table-border">
                  <tbody>
                    <tr>
                      <th>下單時間</th>
                      <td>{{ $filters.date(order.create_at) }}</td>
                    </tr>
                    <tr>
                      <th>訂購編號</th>
                      <td>{{ order.id }}</td>
                    </tr>
                    <tr>
                      <th>訂購人</th>
                      <td>{{ order.user.name }}</td>
                    </tr>
                    <tr>
                      <th>信箱</th>
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
                    <tr>
                      <th>商品清單</th>
                      <td>
                        <p
                          v-for="product in Object.values(order.products)"
                          :key="product.id"
                          class="mb-0 border-bottom"
                        >
                          {{ product.product.title }}
                          <span class="d-flex">
                            ${{ product.product.origin_price }} x
                            {{ product.qty }} {{ product.product.unit }} =
                            <span class="ms-auto"
                              >${{
                                $filters.currency(
                                  product.product.origin_price * product.qty
                                )
                              }}</span
                            >
                          </span>
                        </p>
                        <p class="mb-0 text-end">
                          折扣： NT${{
                            $filters.currency(totalOriginPrice - order.total)
                          }}
                        </p>
                        <p class="mb-0 text-end">
                          總價： NT${{ $filters.currency(order.total) }}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <th>備註</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                      <td>{{ order.is_paid ? "已付款" : "未付款" }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
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
};
</script>
