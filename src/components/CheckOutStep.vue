<template>
  <ul class="row justify-content-center list-unstyled py-3 px-3">
    <li class="col-md-4">
      <div
        :class="[step === 'cart' ? 'text-primary' : 'text-muted']"
        class="bg-primary p-3 badge rounded-pill fs-3 w-100 mb-2 bg-light"
      >
        1. 填寫訂單
      </div>
    </li>
    <li class="col-md-4">
      <div
        :class="[step === 'order' ? 'text-primary' : 'text-muted']"
        class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-secondary"
      >
        2. 訂單結帳
      </div>
    </li>
    <li class="col-md-4">
      <div
        :class="[step === 'paid' ? 'text-primary' : 'text-muted']"
        class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-light"
      >
        3. 付款完成
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    step: {
      type: String,
      default: "",
    },
  },
};
</script>
