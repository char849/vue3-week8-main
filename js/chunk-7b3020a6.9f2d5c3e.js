(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b3020a6"],{"1dde":function(t,e,a){var c=a("d039"),o=a("b622"),n=a("2d00"),i=o("species");t.exports=function(t){return n>=51||!c((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,a){"use strict";var c=a("23e7"),o=a("e330"),n=a("5a34"),i=a("1d80"),s=a("577e"),r=a("ab13"),d=o("".indexOf);c({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~d(s(i(this)),s(n(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,a){var c=a("861d"),o=a("c6b6"),n=a("b622"),i=n("match");t.exports=function(t){var e;return c(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},"4de4":function(t,e,a){"use strict";var c=a("23e7"),o=a("b727").filter,n=a("1dde"),i=n("filter");c({target:"Array",proto:!0,forced:!i},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,a){var c=a("da84"),o=a("44e7"),n=c.TypeError;t.exports=function(t){if(o(t))throw n("The method doesn't accept regular expressions");return t}},"5d4a":function(t,e,a){"use strict";a("6aef")},"6aef":function(t,e,a){},"6edb":function(t,e,a){},8418:function(t,e,a){"use strict";var c=a("a04b"),o=a("9bf2"),n=a("5c6c");t.exports=function(t,e,a){var i=c(e);i in t?o.f(t,i,n(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var c=a("23e7"),o=a("da84"),n=a("d039"),i=a("e8b5"),s=a("861d"),r=a("7b0b"),d=a("07fa"),l=a("8418"),u=a("65f0"),f=a("1dde"),b=a("b622"),p=a("2d00"),h=b("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",v=o.TypeError,j=p>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=f("concat"),x=function(t){if(!s(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},w=!j||!O;c({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,c,o,n,i=r(this),s=u(i,0),f=0;for(e=-1,c=arguments.length;e<c;e++)if(n=-1===e?i:arguments[e],x(n)){if(o=d(n),f+o>m)throw v(g);for(a=0;a<o;a++,f++)a in n&&l(s,f,n[a])}else{if(f>=m)throw v(g);l(s,f++,n)}return s.length=f,s}})},a434:function(t,e,a){"use strict";var c=a("23e7"),o=a("da84"),n=a("23cb"),i=a("5926"),s=a("07fa"),r=a("7b0b"),d=a("65f0"),l=a("8418"),u=a("1dde"),f=u("splice"),b=o.TypeError,p=Math.max,h=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var a,c,o,u,f,v,j=r(this),O=s(j),x=n(t,O),w=arguments.length;if(0===w?a=c=0:1===w?(a=0,c=O-x):(a=w-2,c=h(p(i(e),0),O-x)),O+a-c>m)throw b(g);for(o=d(j,c),u=0;u<c;u++)f=x+u,f in j&&l(o,u,j[f]);if(o.length=c,a<c){for(u=x;u<O-c;u++)f=u+c,v=u+a,f in j?j[v]=j[f]:delete j[v];for(u=O;u>O-c+a;u--)delete j[u-1]}else if(a>c)for(u=O-c;u>x;u--)f=u+c-1,v=u+a-1,f in j?j[v]=j[f]:delete j[v];for(u=0;u<a;u++)j[u+x]=arguments[u+2];return j.length=O-c+a,o}})},ab13:function(t,e,a){var c=a("b622"),o=c("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[o]=!1,"/./"[t](e)}catch(c){}}return!1}},b680:function(t,e,a){"use strict";var c=a("7a23"),o={class:"text-dark my-5 py-md-9"},n=Object(c["i"])('<div class="container px-6 px-md-9"><ul class="row list-unstyled gx-md-9"><li class="col-md-4 border-end-md mb-5 mb-md-0 py-2"><div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-lg-center" data-aos="fade-up"><i class="bi bi-linkedin fs-1 text-danger fa-fw mb-md-3 mb-lg-0"></i><div class="ms-4 ms-md-0 ms-lg-4 text-danger text-md-center text-lg-start"><h3 class="h5">社群交流</h3><p class="mb-0">10:00 - 21:00 專人線上諮詢</p></div></div></li><li class="col-md-4 border-end-md mb-5 mb-md-0 py-2"><div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-lg-center" data-aos="fade-up" data-aos-offset="0"><span class="material-icons-outlined fs-1 text-danger mb-md-3 mb-lg-0"> local_shipping </span><div class="ms-4 ms-md-0 ms-lg-4 text-danger text-md-center text-lg-start"><h3 class="h5">滿額免運</h3><p class="mb-0">滿NT$ 500免運</p></div></div></li><li class="col-md-4 mb-5 mb-md-0 py-2"><div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-lg-center" data-aos="fade-up"><i class="bi bi-box-seam fs-1 text-danger mb-md-3 mb-lg-0"></i><div class="ms-4 ms-md-0 ms-lg-4 text-danger text-md-center text-lg-start"><h3 class="h5">現貨快速出貨</h3><p class="mb-0">工作日 16:00 前訂單，當日出貨</p></div></div></li></ul></div>',1),i=[n];function s(t,e){return Object(c["B"])(),Object(c["g"])("div",o,i)}var r=a("6b0d"),d=a.n(r);const l={},u=d()(l,[["render",s]]);e["a"]=u},ba95:function(t,e,a){"use strict";a.r(e);var c=a("7a23");function o(t,e,a,o,n,i){var s=Object(c["J"])("HeaderView"),r=Object(c["J"])("SwiperView"),d=Object(c["J"])("NoticeView");return Object(c["B"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(s),Object(c["k"])(r,{category:"熱門","data-aos":"fade-up"}),Object(c["k"])(d)],64)}a("caad"),a("2532");var n={class:"container-fluid product-area text-center pt-5 mt-6"},i={class:"container"},s=Object(c["h"])("p",{class:"h6 text-info fw-bold","data-aos":"fade-up"},[Object(c["j"])(" 純手工彩繪上色 "),Object(c["h"])("span",{class:"material-icons"}," palette ")],-1),r=Object(c["h"])("p",{class:"h1 text-dark mb-5","data-aos":"fade-up"},"最新熱銷商品",-1),d={class:"card h-100",role:"button"},l=["onClick"],u={key:0},f=Object(c["h"])("i",{class:"bi bi-heart-fill"},null,-1),b=[f],p={key:1},h=Object(c["h"])("i",{class:"bi bi-heart"},null,-1),m=[h],g=["onClick"],v={class:"card-body"},j={class:"d-flex justify-content-between"},O={class:"card-title"},x={class:"badge rounded-pill bg-secondary h5"},w={class:"d-flex justify-content-between"},y={key:0,class:"h5 ms-auto"},F={class:"text-danger"},k={class:"text-info h5 ms-auto"},B={class:"card-footer border-0 bg-white my-2"},S=["onClick"],L=Object(c["h"])("i",{class:"bi bi-cart-plus-fill h4"},null,-1),V=Object(c["j"])(" 加入購物車 "),D=[L,V];function A(t,e,a,o,f,h){var L=Object(c["J"])("swiper-slide"),V=Object(c["J"])("swiper"),A=Object(c["J"])("Loading");return Object(c["B"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("div",n,[Object(c["h"])("div",i,[s,r,h.filterProducts.length>0?(Object(c["B"])(),Object(c["e"])(V,{key:0,breakpoints:f.breakpoints,loop:!0,navigation:"",autoplay:f.autoplay},{default:Object(c["V"])((function(){return[(Object(c["B"])(!0),Object(c["g"])(c["a"],null,Object(c["H"])(h.filterProducts,(function(t){return Object(c["B"])(),Object(c["e"])(L,{class:"col-12 col-md-4 mb-4",key:t.id},{default:Object(c["V"])((function(){return[Object(c["h"])("div",d,[Object(c["h"])("div",{class:"card_Favorite",onClick:function(e){return h.setFavorite(t.id)}},[f.favoriteList.includes(t.id)?(Object(c["B"])(),Object(c["g"])("span",u,b)):(Object(c["B"])(),Object(c["g"])("span",p,m))],8,l),Object(c["h"])("div",{class:"card_imgHidden",role:"button",onClick:function(e){return h.getProduct(t.id)}},[Object(c["h"])("div",{href:"#",class:"card_img bg-cover",style:Object(c["t"])([{height:"250px"},"background-image: url(".concat(t.imageUrl,")")])},null,4)],8,g),Object(c["h"])("div",v,[Object(c["h"])("div",j,[Object(c["h"])("h5",O,Object(c["M"])(t.title),1),Object(c["h"])("div",null,[Object(c["h"])("div",x,Object(c["M"])(t.category),1)])]),Object(c["h"])("div",w,[t.origin_price===t.price?(Object(c["B"])(),Object(c["g"])("span",y,"原價： "+Object(c["M"])(t.origin_price)+" 元",1)):(Object(c["B"])(),Object(c["g"])(c["a"],{key:1},[Object(c["h"])("del",F,"原價： "+Object(c["M"])(t.origin_price)+" 元",1),Object(c["h"])("span",k,"特價： "+Object(c["M"])(t.price)+" 元",1)],64))]),Object(c["h"])("div",B,[Object(c["h"])("button",{type:"button",class:"btn btn02 btn-outline-secondary w-100",onClick:function(e){return h.addCart(t.id)}},D,8,S)])])])]})),_:2},1024)})),128))]})),_:1},8,["breakpoints","autoplay"])):Object(c["f"])("",!0)])]),Object(c["k"])(A,{active:f.isLoading},null,8,["active"])],64)}a("4de4"),a("d3b7"),a("99af"),a("c740"),a("a434"),a("e9c4");var I=a("cfb9"),P={data:function(){return{products:[],favoriteList:[],isLoading:!1,swiper:null,breakpoints:{767:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20}},autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0}}},props:{category:{type:String,default:function(){return""}}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return""===t.category||e.category===t.category}))}},methods:{getProducts:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/products/all")).then((function(e){console.log(e),t.products=e.data.products,t.isLoading=!1}))},getProduct:function(t){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/product/").concat(t)).then((function(a){e.product=a.data.product,e.$router.push("/product/".concat(t))}))},addCart:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c={product_id:t,qty:a};this.isLoadingItem=t,this.isLoading=!0,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/cart"),{data:c}).then((function(t){console.log(t),e.isLoading=!1,e.isLoadingItem="",e.$swal(t.data.message),I["a"].emit("get-cart")}))},getFavorite:function(){var t=localStorage.getItem("homeFavorite")||[];this.favoriteList=JSON.parse(t),I["a"].emit("get-favorite")},setFavorite:function(t){if(console.log(t),this.favoriteList.includes(t)){var e=this.favoriteList.findIndex((function(e){return e===t}));this.favoriteList.splice(e,1),this.$swal({text:"己成功移除",icon:"success"})}else this.favoriteList.push(t),this.$swal({text:"成功收藏",icon:"success"});var a=JSON.stringify(this.favoriteList);localStorage.setItem("homeFavorite",""),localStorage.setItem("homeFavorite",a),this.getFavorite()}},watch:{favorite:{handle:function(){localStorage.setItem("favoriteList",JSON.stringify(this.favoriteList))},deep:!0}},mounted:function(){this.getProducts()}},C=(a("dc3f"),a("6b0d")),N=a.n(C);const J=N()(P,[["render",A]]);var M=J,G={class:"position-relative mix-vh-100","data-aos":"fade-up"},T={class:"bgImg banner justify-content-between align-items-center"},E={class:"position-absolute top-50 start-50 text-white text-center translate-middle"},R=Object(c["h"])("h2",{class:"fw-bold display-6","data-aos":"fade-up"},"漢文帝手作模型",-1),_=Object(c["h"])("hr",{class:"mb-1 mx-n3","data-aos":"fade-up"},null,-1),H=Object(c["h"])("p",{class:"fw-bold","data-aos":"fade-up"}," 擅長寫實風格 生物 人物 製做 由3D建模搭配3D列印後 手修雕塑上色 ",-1),U=Object(c["j"])(" 進來逛逛 "),W=Object(c["j"])(" 關於手作 "),Y=Object(c["h"])("span",{class:"downFill","data-aos":"fade-up"},[Object(c["h"])("i",{class:"bi bi-caret-down-fill fs-5"})],-1),z=[W,Y],Z={class:"container px-3",id:"intro"},q={class:"row mb-5 mt-4"},Q=Object(c["h"])("div",{class:"col-12 col-md-6 mt-4","data-aos":"fade-up"},[Object(c["h"])("img",{class:"img-fluid mt-5 border rounded p-1",src:"https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647328485359.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ig8o%2BJ3zUjdxADcMFNMRbvCRCuQy4QXQ%2F9k98YA3dhzypsdV%2BvOFQZ00F9bUWRFk3aRP4Ef30mj2%2FeMqqZtVQGXqL1WuY3aSW70xA5ido7DYiVoxWO9Gcq5hoBgyAp110EMrYDUcGCLdR25GnALZKK3WZiCnxIgStePqcHP%2BHmSuph4Q0%2BOr6SG%2F6oX5wxc%2F%2FweYSxMz9Cp6c1bgnAIsGe9Ii8SadqrYFfiCKvSNSuFPmfVNkBNL0hk%2Bu6TO6uiiL14B1cWSFjTyKyl%2BMPnGmiXYvJQHnQxA4fFlIVWmYnn%2FcDRIiwbHUNUuKJSVMn%2Fc2HyNbZfdwKGnXOuw4zZF%2FA%3D%3D",alt:"home-1"})],-1),X={class:"col-12 col-md-6 p-3 p-md-5 mt-3 d-flex justify-content-cente flex-column lh-lg","data-aos":"fade-up"},K=Object(c["h"])("p",{class:"h6 text-info fw-bold","data-aos":"fade-up"},[Object(c["j"])(" 3D 製作流程 "),Object(c["h"])("span",{class:"material-icons"}," add_photo_alternate ")],-1),$=Object(c["h"])("p",{class:"h2 text-dark","data-aos":"fade-up"}," 照片收集、3D 設計稿模型製作 ",-1),tt=Object(c["h"])("p",{class:"text-warning mt-2","data-aos":"fade-up"}," 依照客製需求照片，全部滙整起來，將各個角度照片準備好了開始繪製3D設計稿，及後續3D建模列印。 列印出來的模型通常都是單色，依照列印材料原本的單色所產出就是什麼色。 ",-1),et=Object(c["j"])(" 關於漢文帝 "),at={class:"row mb-2 flex-md-row-reverse","data-aos":"fade-up"},ct=Object(c["h"])("div",{class:"col-12 col-md-6"},[Object(c["h"])("img",{class:"img-fluid bg-white border rounded p-1",src:"https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647329876514.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SNdkVOv9f2rxUilCGl7G%2FYlASQvcopzLp%2Fw9Nli4GP6Zhww6PiGogxtluVIBr2zxj74pxkqo4Am0L3WIOyPKwdPPLuGRIA6%2B72UHq9XZ%2B8xzK8qja6YUT1fXeMsWZJ7n04Qt0PK0UEjhYPmENeHem%2FmYUz2Zryf%2FVjR%2Fyif%2BpoNNeLsGdYuZW%2BtNWAoo8nNKs1c%2BlmkOh6CHnjRksmGV3XGiDbVf1XTSjWibNHlmR%2BFtx13ZtRg8EU2TRs9JDEz0g%2FRwxWnUUQ4dJ%2FVo4kcp2%2FxX8t1%2FCYFCoREmVO4BTtmMiPgLhc9dBt563x3E2V9tZXT3ibnS3eF%2BF6odHO4dWw%3D%3D",alt:"home-2"})],-1),ot={class:"col-12 col-md-6 d-flex mt-3 justify-content-center align-items-start flex-column","data-aos":"fade-up"},nt=Object(c["i"])('<p class="h6 text-info fw-bold" data-aos="fade-up"> 3D 製作流程 <span class="material-icons"> brush </span></p><p class="h2 text-dark" data-aos="fade-up">列印整修純手工上色</p><p class="text-warning mt-2" data-aos="fade-up"> 將製作好的 3D 設計稿，進行 3D列印，時間約3~5天不等，列印完後進行組裝修掉一些列印遺留下來邊邊角角的部份，最後開始進行角色適合的風格配色工作。 </p><p class="text-warning" data-aos="fade-up"> 純手工是一種使用的比較多的上色方法，操作比較簡單，比較適合處理複雜的細節。 上色時需以來回平塗兩到三遍，可使手繪時產生的筆紋減淡，令色彩均勻飽滿，可以在第一層快干還沒幹時再上第二層，第二層的筆刷方向和第一層垂直，已達到最好的效果。 使用的顏料主要有水性漆和油性漆兩大類。水性漆附著力和色彩表現都比油性漆略差一點（尤其是色澤表現上），但毒性性小或無毒。為了顏料可以更流暢色彩均勻的進行塗裝，可以滴入一些同品牌的溶劑在調色皿裡面進行稀釋。手工上色比較考驗操作人員的熟練程度，所以效果波動會比較大。 </p>',4),it=Object(c["j"])(" 關於漢文帝 ");function st(t,e,a,o,n,i){var s=Object(c["J"])("router-link");return Object(c["B"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("header",G,[Object(c["h"])("div",T,[Object(c["h"])("div",E,[R,_,H,Object(c["k"])(s,{to:"/products",role:"button",class:"btn btn02 btn-light fw-bold px-4 my-4","data-aos":"fade-up"},{default:Object(c["V"])((function(){return[U]})),_:1})]),Object(c["h"])("button",{class:"btn aboutBtn position-absolute fw-bold d-flex flex-column align-items-center text-white","data-aos":"fade-up",type:"button",onClick:e[0]||(e[0]=function(){return i.moveTo&&i.moveTo.apply(i,arguments)})},z)])]),Object(c["h"])("div",Z,[Object(c["h"])("div",q,[Q,Object(c["h"])("div",X,[K,$,tt,Object(c["k"])(s,{to:"/about",class:"col-8 col-md-6 mt-5 fw-bold btn btn02 btn-outline-secondary","data-aos":"fade-up"},{default:Object(c["V"])((function(){return[et]})),_:1})])]),Object(c["h"])("div",at,[ct,Object(c["h"])("div",ot,[nt,Object(c["k"])(s,{to:"/about",class:"col-8 col-md-6 mt-5 fw-bold btn btn02 btn-outline-secondary","data-aos":"fade-up"},{default:Object(c["V"])((function(){return[it]})),_:1})])])])],64)}var rt={methods:{moveTo:function(){var t=document.querySelector("#intro");document.documentElement.scrollTop=t.offsetTop}}};a("5d4a");const dt=N()(rt,[["render",st]]);var lt=dt,ut=a("b680"),ft={components:{SwiperView:M,HeaderView:lt,NoticeView:ut["a"]}};const bt=N()(ft,[["render",o]]);e["default"]=bt},c740:function(t,e,a){"use strict";var c=a("23e7"),o=a("b727").findIndex,n=a("44d2"),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),c({target:"Array",proto:!0,forced:s},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(i)},caad:function(t,e,a){"use strict";var c=a("23e7"),o=a("4d64").includes,n=a("44d2");c({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},dc3f:function(t,e,a){"use strict";a("6edb")},e9c4:function(t,e,a){var c=a("23e7"),o=a("da84"),n=a("d066"),i=a("2ba4"),s=a("e330"),r=a("d039"),d=o.Array,l=n("JSON","stringify"),u=s(/./.exec),f=s("".charAt),b=s("".charCodeAt),p=s("".replace),h=s(1..toString),m=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,v=/^[\uDC00-\uDFFF]$/,j=function(t,e,a){var c=f(a,e-1),o=f(a,e+1);return u(g,t)&&!u(v,o)||u(v,t)&&!u(g,c)?"\\u"+h(b(t,0),16):t},O=r((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&c({target:"JSON",stat:!0,forced:O},{stringify:function(t,e,a){for(var c=0,o=arguments.length,n=d(o);c<o;c++)n[c]=arguments[c];var s=i(l,null,n);return"string"==typeof s?p(s,m,j):s}})}}]);
//# sourceMappingURL=chunk-7b3020a6.9f2d5c3e.js.map