(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54fdea98"],{"0343":function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a"),r("99af");var c=r("7a23"),n=r("6eac"),o=r.n(n),i=Object(c["h"])("header",{class:"position-relative mb-7 mb-md-9"},[Object(c["h"])("img",{class:"bg-mask-60 img-cover pageBanner w-100",src:o.a,alt:"關於漢文帝banner"}),Object(c["h"])("h2",{class:"position-absolute text-hv-center top-50 start-50 h2 fw-bold text-white-50 pageBanner-text"}," Single Product ")],-1),a={class:"container px-3 mb-5"},u={class:"row g-3 mt-4"},s={"aria-label":"breadcrumb"},f={class:"breadcrumb"},d={class:"breadcrumb-item"},l=Object(c["j"])(" 首頁 "),b={class:"breadcrumb-item active","aria-current":"page"},h={class:"col-lg-5 mt-4 col-lg-6"},p={class:"row"},g={class:"pb-lg-3"},v=["onClick"],O=["src"],m={class:"col-lg-6 mt-4"},j={class:"card"},y={class:"card-body"},w={class:"border border-secondary fw-bold text-secondary px-2 me-2"},x={class:"h2 mt-2"},S={key:0,class:"h5"},k={key:1},P={class:"h6 text-danger"},M={class:"h4 mb-3 text-info"},C={class:"h5 text-dark py-2"},F={class:"h5 text-warning lh-base"},B=Object(c["h"])("p",null,"付款方式： ATM 、 信用卡",-1),U={class:"card-footer d-flex border-0 bg-white my-2 py-3"},$=["value"],J=Object(c["h"])("i",{class:"bi bi-cart-plus-fill h4"},null,-1),L=Object(c["j"])(" 加入購物車 "),N=[J,L];function D(t,e,r,n,o,J){var L=Object(c["J"])("router-link"),D=Object(c["J"])("Loading");return Object(c["B"])(),Object(c["g"])(c["a"],null,[i,Object(c["h"])("div",a,[Object(c["h"])("div",u,[Object(c["h"])("nav",s,[Object(c["h"])("ol",f,[Object(c["h"])("li",d,[Object(c["k"])(L,{to:"/",class:"nav-link text-dark active p-0"},{default:Object(c["V"])((function(){return[l]})),_:1})]),Object(c["h"])("li",b,Object(c["M"])(o.category||"類別"),1)])]),Object(c["h"])("div",h,[Object(c["h"])("div",{class:"card mb-3 bg-cover",style:Object(c["t"])({backgroundImage:"url("+o.imgUrl+")",height:"350px"})},null,4),Object(c["h"])("div",p,[Object(c["h"])("div",g,[(Object(c["B"])(!0),Object(c["g"])(c["a"],null,Object(c["H"])(o.imagesUrl,(function(t,e){return Object(c["B"])(),Object(c["g"])("a",{href:"#",key:e,onClick:Object(c["X"])((function(r){return J.click(t,e)}),["prevent"])},[Object(c["h"])("img",{class:"picture pe-1 pb-2",src:t,alt:"產品圖片"},null,8,O)],8,v)})),128))])])]),Object(c["h"])("div",m,[Object(c["h"])("div",j,[Object(c["h"])("div",y,[Object(c["h"])("span",w,Object(c["M"])(o.product.category),1),Object(c["h"])("h1",x,Object(c["M"])(o.product.title),1),o.product.price===o.product.origin_price?(Object(c["B"])(),Object(c["g"])("div",S,Object(c["M"])(o.product.price)+" 元 ",1)):(Object(c["B"])(),Object(c["g"])("div",k,[Object(c["h"])("del",P,"原價 "+Object(c["M"])(o.product.origin_price)+" 元",1),Object(c["h"])("p",M,"NT "+Object(c["M"])(o.product.price)+" 元",1)])),Object(c["h"])("p",C,Object(c["M"])(o.product.content),1),Object(c["h"])("p",F,Object(c["M"])(o.product.description),1),B,Object(c["h"])("div",U,[Object(c["W"])(Object(c["h"])("select",{id:"",class:"form-select w-25 me-1","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.qty=t})},[(Object(c["B"])(),Object(c["g"])(c["a"],null,Object(c["H"])(5,(function(e){return Object(c["h"])("option",{value:e,key:"".concat(e,"-").concat(t.id)},Object(c["M"])(e),9,$)})),64))],512),[[c["P"],o.qty]]),Object(c["h"])("button",{type:"button",class:"btn btn-outline-secondary w-75",onClick:e[1]||(e[1]=Object(c["X"])((function(t){return J.addCart(o.product.id,o.qty)}),["prevent"]))},N)])])])])])]),Object(c["k"])(D,{active:t.isLoading},null,8,["active"])],64)}r("b0c0"),r("e9c4");var A=r("cfb9"),I={data:function(){return{products:[],category:"",product:{},imgUrl:"",imagesUrl:[],qty:1,cart_id:[]}},watch:{$route:{immediate:!0,handler:function(t){"product"===t.name&&(this.id=t.params.id,this.getProduct(this.id))}},favorite:{handle:function(){localStorage.setItem("favoriteList",JSON.stringify(this.favoriteList))},deep:!0}},methods:{click:function(t){this.imgUrl=t},getProducts:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/products/all")).then((function(e){console.log(e),t.products=e.data.products}))},getProduct:function(t){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/product/").concat(t)).then((function(t){e.product=t.data.product,e.category=t.data.product.category,e.imgUrl=t.data.product.imageUrl,e.imagesUrl=t.data.product.imagesUrl}))},getCart:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/cart")).then((function(e){t.cartData=e.data.data,t.isLoading=!1,t.getCart(),A["a"].emit("get-cart")}))},addCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c={product_id:t,qty:r};this.isLoadingItem=t,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/cart"),{data:c}).then((function(t){console.log(t),e.isLoadingItem="",e.$swal(t.data.message),A["a"].emit("get-cart")}))},mounted:function(){this.getProduct(),this.getProducts()}}},q=(r("1169"),r("6b0d")),E=r.n(q);const T=E()(I,[["render",D]]);e["default"]=T},"057f":function(t,e,r){var c=r("c6b6"),n=r("fc6a"),o=r("241c").f,i=r("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return i(a)}};t.exports.f=function(t){return a&&"Window"==c(t)?u(t):o(n(t))}},1169:function(t,e,r){"use strict";r("7f28")},"1dde":function(t,e,r){var c=r("d039"),n=r("b622"),o=r("2d00"),i=n("species");t.exports=function(t){return o>=51||!c((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"428f":function(t,e,r){var c=r("da84");t.exports=c},"4dae":function(t,e,r){var c=r("da84"),n=r("23cb"),o=r("07fa"),i=r("8418"),a=c.Array,u=Math.max;t.exports=function(t,e,r){for(var c=o(t),s=n(e,c),f=n(void 0===r?c:r,c),d=a(u(f-s,0)),l=0;s<f;s++,l++)i(d,l,t[s]);return d.length=l,d}},"6eac":function(t,e,r){t.exports=r.p+"img/products.9daeff47.jpg"},"746f":function(t,e,r){var c=r("428f"),n=r("1a2d"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=c.Symbol||(c.Symbol={});n(e,t)||i(e,t,{value:o.f(t)})}},"7f28":function(t,e,r){},8418:function(t,e,r){"use strict";var c=r("a04b"),n=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=c(e);i in t?n.f(t,i,o(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var c=r("23e7"),n=r("da84"),o=r("d039"),i=r("e8b5"),a=r("861d"),u=r("7b0b"),s=r("07fa"),f=r("8418"),d=r("65f0"),l=r("1dde"),b=r("b622"),h=r("2d00"),p=b("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",O=n.TypeError,m=h>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),j=l("concat"),y=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},w=!m||!j;c({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,c,n,o,i=u(this),a=d(i,0),l=0;for(e=-1,c=arguments.length;e<c;e++)if(o=-1===e?i:arguments[e],y(o)){if(n=s(o),l+n>g)throw O(v);for(r=0;r<n;r++,l++)r in o&&f(a,l,o[r])}else{if(l>=g)throw O(v);f(a,l++,o)}return a.length=l,a}})},a4d3:function(t,e,r){"use strict";var c=r("23e7"),n=r("da84"),o=r("d066"),i=r("2ba4"),a=r("c65b"),u=r("e330"),s=r("c430"),f=r("83ab"),d=r("4930"),l=r("d039"),b=r("1a2d"),h=r("e8b5"),p=r("1626"),g=r("861d"),v=r("3a9b"),O=r("d9b5"),m=r("825a"),j=r("7b0b"),y=r("fc6a"),w=r("a04b"),x=r("577e"),S=r("5c6c"),k=r("7c73"),P=r("df75"),M=r("241c"),C=r("057f"),F=r("7418"),B=r("06cf"),U=r("9bf2"),$=r("37e8"),J=r("d1e7"),L=r("f36a"),N=r("6eeb"),D=r("5692"),A=r("f772"),I=r("d012"),q=r("90e3"),E=r("b622"),T=r("e538"),_=r("746f"),X=r("d44e"),H=r("69f3"),V=r("b727").forEach,W=A("hidden"),Q="Symbol",z="prototype",G=E("toPrimitive"),K=H.set,R=H.getterFor(Q),Y=Object[z],Z=n.Symbol,tt=Z&&Z[z],et=n.TypeError,rt=n.QObject,ct=o("JSON","stringify"),nt=B.f,ot=U.f,it=C.f,at=J.f,ut=u([].push),st=D("symbols"),ft=D("op-symbols"),dt=D("string-to-symbol-registry"),lt=D("symbol-to-string-registry"),bt=D("wks"),ht=!rt||!rt[z]||!rt[z].findChild,pt=f&&l((function(){return 7!=k(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,r){var c=nt(Y,e);c&&delete Y[e],ot(t,e,r),c&&t!==Y&&ot(Y,e,c)}:ot,gt=function(t,e){var r=st[t]=k(tt);return K(r,{type:Q,tag:t,description:e}),f||(r.description=e),r},vt=function(t,e,r){t===Y&&vt(ft,e,r),m(t);var c=w(e);return m(r),b(st,c)?(r.enumerable?(b(t,W)&&t[W][c]&&(t[W][c]=!1),r=k(r,{enumerable:S(0,!1)})):(b(t,W)||ot(t,W,S(1,{})),t[W][c]=!0),pt(t,c,r)):ot(t,c,r)},Ot=function(t,e){m(t);var r=y(e),c=P(r).concat(xt(r));return V(c,(function(e){f&&!a(jt,r,e)||vt(t,e,r[e])})),t},mt=function(t,e){return void 0===e?k(t):Ot(k(t),e)},jt=function(t){var e=w(t),r=a(at,this,e);return!(this===Y&&b(st,e)&&!b(ft,e))&&(!(r||!b(this,e)||!b(st,e)||b(this,W)&&this[W][e])||r)},yt=function(t,e){var r=y(t),c=w(e);if(r!==Y||!b(st,c)||b(ft,c)){var n=nt(r,c);return!n||!b(st,c)||b(r,W)&&r[W][c]||(n.enumerable=!0),n}},wt=function(t){var e=it(y(t)),r=[];return V(e,(function(t){b(st,t)||b(I,t)||ut(r,t)})),r},xt=function(t){var e=t===Y,r=it(e?ft:y(t)),c=[];return V(r,(function(t){!b(st,t)||e&&!b(Y,t)||ut(c,st[t])})),c};if(d||(Z=function(){if(v(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,e=q(t),r=function(t){this===Y&&a(r,ft,t),b(this,W)&&b(this[W],e)&&(this[W][e]=!1),pt(this,e,S(1,t))};return f&&ht&&pt(Y,e,{configurable:!0,set:r}),gt(e,t)},tt=Z[z],N(tt,"toString",(function(){return R(this).tag})),N(Z,"withoutSetter",(function(t){return gt(q(t),t)})),J.f=jt,U.f=vt,$.f=Ot,B.f=yt,M.f=C.f=wt,F.f=xt,T.f=function(t){return gt(E(t),t)},f&&(ot(tt,"description",{configurable:!0,get:function(){return R(this).description}}),s||N(Y,"propertyIsEnumerable",jt,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),V(P(bt),(function(t){_(t)})),c({target:Q,stat:!0,forced:!d},{for:function(t){var e=x(t);if(b(dt,e))return dt[e];var r=Z(e);return dt[e]=r,lt[r]=e,r},keyFor:function(t){if(!O(t))throw et(t+" is not a symbol");if(b(lt,t))return lt[t]},useSetter:function(){ht=!0},useSimple:function(){ht=!1}}),c({target:"Object",stat:!0,forced:!d,sham:!f},{create:mt,defineProperty:vt,defineProperties:Ot,getOwnPropertyDescriptor:yt}),c({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:wt,getOwnPropertySymbols:xt}),c({target:"Object",stat:!0,forced:l((function(){F.f(1)}))},{getOwnPropertySymbols:function(t){return F.f(j(t))}}),ct){var St=!d||l((function(){var t=Z();return"[null]"!=ct([t])||"{}"!=ct({a:t})||"{}"!=ct(Object(t))}));c({target:"JSON",stat:!0,forced:St},{stringify:function(t,e,r){var c=L(arguments),n=e;if((g(e)||void 0!==t)&&!O(t))return h(e)||(e=function(t,e){if(p(n)&&(e=a(n,this,t,e)),!O(e))return e}),c[1]=e,i(ct,null,c)}})}if(!tt[G]){var kt=tt.valueOf;N(tt,G,(function(t){return a(kt,this)}))}X(Z,Q),I[W]=!0},b0c0:function(t,e,r){var c=r("83ab"),n=r("5e77").EXISTS,o=r("e330"),i=r("9bf2").f,a=Function.prototype,u=o(a.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=o(s.exec),d="name";c&&!n&&i(a,d,{configurable:!0,get:function(){try{return f(s,u(this))[1]}catch(t){return""}}})},e01a:function(t,e,r){"use strict";var c=r("23e7"),n=r("83ab"),o=r("da84"),i=r("e330"),a=r("1a2d"),u=r("1626"),s=r("3a9b"),f=r("577e"),d=r("9bf2").f,l=r("e893"),b=o.Symbol,h=b&&b.prototype;if(n&&u(b)&&(!("description"in h)||void 0!==b().description)){var p={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=s(h,this)?new b(t):void 0===t?b():b(t);return""===t&&(p[e]=!0),e};l(g,b),g.prototype=h,h.constructor=g;var v="Symbol(test)"==String(b("test")),O=i(h.toString),m=i(h.valueOf),j=/^Symbol\((.*)\)[^)]+$/,y=i("".replace),w=i("".slice);d(h,"description",{configurable:!0,get:function(){var t=m(this),e=O(t);if(a(p,t))return"";var r=v?w(e,7,-1):y(e,j,"$1");return""===r?void 0:r}}),c({global:!0,forced:!0},{Symbol:g})}},e538:function(t,e,r){var c=r("b622");e.f=c},e9c4:function(t,e,r){var c=r("23e7"),n=r("da84"),o=r("d066"),i=r("2ba4"),a=r("e330"),u=r("d039"),s=n.Array,f=o("JSON","stringify"),d=a(/./.exec),l=a("".charAt),b=a("".charCodeAt),h=a("".replace),p=a(1..toString),g=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,O=/^[\uDC00-\uDFFF]$/,m=function(t,e,r){var c=l(r,e-1),n=l(r,e+1);return d(v,t)&&!d(O,n)||d(O,t)&&!d(v,c)?"\\u"+p(b(t,0),16):t},j=u((function(){return'"\\udf06\\ud834"'!==f("\udf06\ud834")||'"\\udead"'!==f("\udead")}));f&&c({target:"JSON",stat:!0,forced:j},{stringify:function(t,e,r){for(var c=0,n=arguments.length,o=s(n);c<n;c++)o[c]=arguments[c];var a=i(f,null,o);return"string"==typeof a?h(a,g,m):a}})}}]);
//# sourceMappingURL=chunk-54fdea98.7c624bcd.js.map