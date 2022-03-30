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
      Course Admissions
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
          <li class="breadcrumb-item active" aria-current="page">課程招生</li>
        </ol>
      </nav>
      <div class="container-xxl service pb-5">
        <div class="text-center" data-aos="fade-up">
          <h6 class="text-info mt-1 fw-bold text-uppercase">
            線上課程<span class="material-icons-outlined"> approval </span>
          </h6>
          <h1 class="mb-5 text-dark fw-bold">漢文帝線上課程教學</h1>
        </div>
        <div class="row g-4" data-aos="fade-up">
          <div class="col-lg-4">
            <div class="nav w-100 nav-pills me-4">
              <button
                class="nav-link w-100 d-flex class align-items-center text-start p-4 mb-4 active"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-1"
                type="button"
              >
                <span class="material-icons-outlined me-3 fs-2">
                  edit_note
                </span>
                <h4 class="m-0">課程內容</h4>
              </button>
              <button
                class="nav-link w-100 d-flex class align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-2"
                type="button"
              >
                <span class="material-icons-outlined me-3 fs-2">
                  edit_calendar
                </span>
                <h4 class="m-0">開課資訊</h4>
              </button>
              <button
                class="nav-link w-100 d-flex class align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-3"
                type="button"
              >
                <span class="material-icons-outlined me-3 fs-2">
                  border_color
                </span>
                <h4 class="m-0">課程教材準備</h4>
              </button>
              <button
                class="nav-link w-100 d-flex class align-items-center text-start p-4 mb-0"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-4"
                type="button"
              >
                <span class="material-icons-outlined me-3 fs-2">
                  ondemand_video
                </span>
                <h4 class="m-0">線上說明會</h4>
              </button>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="tab-content w-100">
              <div class="tab-pane fade show active" id="tab-pane-1">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 450px">
                    <div class="position-relative">
                      <img
                        class="position-absolute img-fluid w-100 border rounded p-1"
                        src="@/assets/img/class-01.jpg"
                        style="object-fit: cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">數位模型實體化設計班</h3>
                    <p class="mb-4 text-warning">
                      本線上課程依照程度 由學生客製主題 小班教學
                      希望學員可以做出自己的模型販售闖出一片天 課程內容 3D建模
                      拆建 列印 監修 翻模 上色
                      (建模80%實體化20%軟體及設備材料需自備)。
                    </p>
                    <p class="mb-4 text-warning">
                      本直播線上課 長度為四個月 建模和實體化
                      (可單獨報名建模部分) 帶領學生成從零到有完成二件模型。
                    </p>
                    <p class="mb-4 text-warning">
                      本課程有其困難度 軟體或機械操作 都需要不斷練習熟練之
                      最大的希望是學生能跟上進度 完成驚人作品 參賽曝光。
                    </p>
                    <p class="mb-4 text-warning">
                      課後講師持續追蹤學員進度!親自修改作業(創建賴群及社團)
                      分享銷售行銷經驗促進同學間互助合作。
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-2">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 450px">
                    <div class="position-relative">
                      <img
                        class="position-absolute img-fluid w-100 border rounded p-1"
                        src="@/assets/img/class-02.jpg "
                        style="object-fit: cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">開課資訊內容</h3>
                    <p class="mb-4 text-warning">
                      開課日期2022年 1月3日~4月28日。<br />課程總時數：
                      74小/建模28堂/實體化9堂/共37。<br />
                      時間：每周一周四 晚上9點到11點 (連假上課變)。
                    </p>
                    <p class="mb-4 text-warning">
                      費用：6000 月繳9000一次繳清32000。<br />
                      純建模 32000 月繳8000 繳清28000。<br />
                      為獎勵作品優秀學生講師提供協助列印。
                    </p>
                    <p class="mb-4 text-warning">
                      課程內容：3D建模/實體化：3D列印 修列印模 翻模量產
                      塗裝上色。
                    </p>
                    <p class="mb-4 text-warning">
                      使用工具：軟體(ZBRUSH和ZOOM和赤兔)電腦 繪圖板 3D印表機
                      噴槍等工具(需自備)。
                    </p>
                    <p class="mb-4 text-warning">
                      播軟體：需安裝ZOOM來上課 課後上傳雲端。
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-3">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 220px">
                    <div class="position-relative w-100">
                      <img
                        class="position-absolute img-fluid border rounded p-1"
                        src="@/assets/img/class-03.jpg"
                        style="object-fit: cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">軟體：ZBRUSH / ZOOM / ChituBox</h3>
                    <p class="mb-4 text-warning">
                      硬體推薦：<br />
                      繪製 : 筆電和電和繪圖板。<br />
                      列印 : 創想三維系列 容積式印表機和Phrozen系列
                      光固化印表機。
                    </p>
                    <p class="mb-4 text-warning">
                      修模 : 電熱筆 塑鋼土 噴漆補土 海綿砂紙 鉗子。<br />
                      翻模 : 真空槽 POLY塑酯 翻模矽膠。<br />
                    </p>
                    <p class="mb-4 text-warning">
                      上色 : 畫筆 油性和水性顏料 顏料盤 空壓機 噴槍
                      噴塗抽風過濾設備。<br />
                      EX : 若無列印、修模、翻模、上色設備，有提供場地器材
                      場地免費依使用量須支付材料費用 限北部。
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-4">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 240px">
                    <div class="position-relative w-100">
                      <img
                        class="position-absolute img-fluid border rounded p-1"
                        src="@/assets/img/class-04.jpg"
                        style="object-fit: cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">漢文帝粉絲團線上直播</h3>
                    <p class="mb-4 text-warning">2022/12/6 晚上 0800</p>
                    <p class="mb-4 text-warning">
                      講師會在線上分享 人生歷練 自我介紹 各種的接案心得
                      以及課程的介紹。
                    </p>
                    <p class="mb-4 text-warning">歡迎線上互動 !!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid product-area text-center pt-5 pb-5">
    <div class="container">
      <p class="h6 text-info fw-bold" data-aos="fade-up">
        課程QA <span class="material-icons-outlined"> help_outline </span>
      </p>
      <p class="h1 text-dark mb-5" data-aos="fade-up">常見問題</p>
      <div class="row" data-aos="fade-up">
        <div class="col">
          <div class="col">
            <ul class="list-unstyled">
              <li class="mb-3" v-for="(article, key) in articles" :key="key">
                <div class="card">
                  <div
                    class="card-header d-flex align-items-center bg-white border-0"
                  >
                    <span class="bg-secondary text-white rounded p-1 me-3"
                      >Q{{ key + 1 }}</span
                    >
                    <a
                      :href="`#collapseA`"
                      class="h5 mb-0 text-dark stretched-link text-decoration-none"
                      @click.prevent="article.isOpen = !article.isOpen"
                      >{{ article.title }}
                    </a>
                    <span class="material-icons ms-auto" v-if="article.isOpen"
                      >keyboard_arrow_up</span
                    >
                    <span class="material-icons ms-auto" v-else
                      >keyboard_arrow_down</span
                    >
                  </div>
                  <div
                    v-if="article.isOpen"
                    :id="`collapseA`"
                    class="transition card-body border-top"
                  >
                    <p
                      class="mb-0 text-warning text-md-start text-center ps-md-5"
                    >
                      {{ article.description }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading :active="isLoading"></Loading>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      content: "",
      isOpen: true,
    };
  },
  methods: {
    getArticles() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.articles = res.data.articles;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
<style>
.product-area {
  background: #eeeeee;
}
</style>
