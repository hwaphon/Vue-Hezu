webpackJsonp([1],{"/0Xm":function(t,e){},"2Shs":function(t,e){},"4a01":function(t,e){},"5W1q":function(t,e){},"5tL5":function(t,e){},"6RM0":function(t,e){},"9Bcn":function(t,e){},AGAE:function(t,e){},D4WL:function(t,e){},DC7I:function(t,e){},E4bM:function(t,e){},E5KQ:function(t,e){},GNWm:function(t,e){},I5cY:function(t,e){},IWEU:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB4ElEQVRYR+3WT2sTQRgG8OedPQRPYnLIzhtCwbvfoGCpBcWrIPau0N78AvHgwau3gniV0oOtfgLxHyJIb4WeS9h510vAUCiC2VemzEIottmU2Y2Ce0yWPL993snOEBZ80YLz8R/w7zSQ5/lqURRPwpoZMPMnVTUisszMHy+7lio3kGXZOhFth6B7zLynqomIjI0xt9I0/XoZRAzALwDHAFaYeX9eRCyAzx0T0Zq19ts8iJgAn3tMRKvzIGIDThFJktzudrtfqjQRE7CvqteJ6Jqqnhhj7lpr389CRAOo6k6SJM8mk8mHgPhpjLkzCxEV0Ov11vM8v1Ei/DharVav0+mMz2siOsAHeURRFO8AbDDz7kVjqAXgA0ej0dV2u/2j0TXgRzAr8Oz3tTVQFfL3AkTkZpqmn4lo4p/mgs3I7wXwf8NoI3DOPQLwAsCutfaBRzQKEJFNVd0Kc3ztEc65++dsx/Eb8MHOuccAnpcIAG8BvPrDeaAeQJj7UyIahNAjAEuNAkITvgXfxvQ1fSKqr4EyMcuyLSLanBI0CwhNvATwsPERTPfunCvH0XwDJUREBqp6wMxvwqm4/jVw9r0+HA6v9Pv9E/+5iKyEN+F3Zj6sugeU91XeC+b94ar3LxzwG7XKvDDr1LG1AAAAAElFTkSuQmCC"},JIk4:function(t,e){},JQ9N:function(t,e){},L9VN:function(t,e){},M2TV:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("Dd8w"),n=a.n(i),o=a("NYxO"),l={name:"App",data:function(){return{selected:0,menus:[{id:0,title:"首页",icon:"fa fa-home",path:"/"},{id:1,title:"求租",icon:"fa fa-group",path:"hezu"},{id:2,title:"发布",icon:"fa fa-edit",path:"publish"},{id:3,title:"我的",icon:"fa fa-user-circle",path:"user"}]}},computed:n()({},Object(o.c)(["show_tabbar"]))},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),t._v(" "),t.show_tabbar?a("van-tabbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.menus,function(e){return a("van-tabbar-item",{key:e.id,attrs:{to:e.path}},[a("span",[t._v(t._s(e.title))]),t._v(" "),a("span",{class:e.icon,attrs:{slot:"icon"},slot:"icon"})])})):t._e()],1)},staticRenderFns:[]};var r=a("VU/8")(l,c,!1,function(t){a("9Bcn")},null,null).exports,d=a("/ocq"),u="onClick",h="onChange",v="onMenuSelect",p={props:{title:String,house_type:{type:Object,default:function(){return{}}},area:Number,regin:String,tags:{type:Array,default:function(){return[]}},address:String,price:Number,image:String,id:Number|String},methods:{onClick:function(){this.$emit(u,this.id)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fang-item",on:{click:t.onClick}},[a("img",{staticClass:"fang-img",attrs:{src:t.image}}),t._v(" "),a("div",{staticClass:"fang-info"},[a("span",{staticClass:"fang-name"},[t._v(t._s(t.title))]),t._v(" "),a("span",{staticClass:"fang-type"},[t.house_type.room?a("em",[t._v(t._s(t.house_type.room)+"室")]):t._e(),t._v(" "),t.house_type.hall?a("em",[t._v(t._s(t.house_type.hall)+"厅")]):t._e(),t._v(" "),t.house_type.bathroom?a("em",[t._v(t._s(t.house_type.bathroom)+"卫")]):t._e(),t._v(" "),a("em",{staticClass:"fang-area"},[t._v(t._s(t.area)+"m²")])]),t._v(" "),a("span",{staticClass:"fang-address"},[a("span",{staticClass:"fang-addr-ab"},[t._v(t._s(t.regin)+"  "+t._s(t.address))]),t._v(" "),a("label",{staticClass:"fang-price"},[a("em",[t._v(t._s(t.price))]),t._v("元/月")])]),t._v(" "),a("span",{staticClass:"fang-tags"},t._l(t.tags,function(e,s){return a("em",{key:s},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),t._t("btns")],2)},staticRenderFns:[]};var g=a("VU/8")(p,m,!1,function(t){a("U4W6")},"data-v-779b77e0",null).exports,f="https://dsn.apizza.net/mock/a1c0fd0348f14cf41adc4283206e87f4/list?",_="https://dsn.apizza.net/mock/a1c0fd0348f14cf41adc4283206e87f4/detail?",C="https://dsn.apizza.net/mock/a1c0fd0348f14cf41adc4283206e87f4/hezu?",b={props:{menus:{type:Array,default:function(){return[]}}},data:function(){return{clickIndex:-1,menuContent:[]}},methods:{onMenuClick:function(t){this.clickIndex!=t?(this.clickIndex=t,this.menuContent=this.menus[t].list):this.clickIndex=-1},selectIndex:function(t){this.menus[this.clickIndex].selected=t,this.$emit(v,[this.clickIndex,t]),this.closeMenu()},closeMenu:function(){this.clickIndex=-1}},computed:{selected:function(t){return this.menus[t].selected}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[t._l(t.menus,function(e,s){return a("div",{key:s,staticClass:"menu-item",class:[t.clickIndex==s?"selected":""],on:{click:function(e){t.onMenuClick(s)}}},[a("span",{staticClass:"menu-title"},[t._v("\n      "+t._s(-1===e.selected?e.title:e.list[e.selected])+"\n    ")]),t._v(" "),t.clickIndex!=s?a("span",{staticClass:"fa fa-caret-down"}):a("span",{staticClass:"fa fa-caret-up"})])}),t._v(" "),-1!==t.clickIndex?a("ul",{staticClass:"menu-content"},[a("li",{class:[-1!==t.clickIndex&&-1===t.menus[t.clickIndex].selected?"item-selected":""],on:{click:function(e){t.selectIndex(-1)}}},[t._v("全部")]),t._v(" "),t._l(t.menuContent,function(e,s){return a("li",{key:s,class:[-1!==t.clickIndex&&t.menus[t.clickIndex].selected===s?"item-selected":""],on:{click:function(e){t.selectIndex(s)}}},[t._v(t._s(e))])})],2):t._e(),t._v(" "),-1!==t.clickIndex?a("div",{staticClass:"mask",on:{click:t.closeMenu}}):t._e()],2)},staticRenderFns:[]};var y=a("VU/8")(b,k,!1,function(t){a("AGAE")},"data-v-6473b0ab",null).exports,w={menus:[{title:"区域",list:["浦东新区","闵行区","宝山区","徐汇区","松江区","嘉定区","静安区","普陀区","杨浦区","虹口区","长宁区","黄浦区","青浦区","金山区","崇明区","奉贤区"],selected:-1},{title:"朝向",list:["东","南","西","北"],selected:-1},{title:"户型",selected:-1,list:["一室","二室","三室","四室","五室及以上"]},{title:"面积",selected:-1,list:["10-20平","20-30平","30-40平","40-50平","50-60平","60-70平","70平以上"]}],publish_menus:[{title:"区域",list:["浦东新区","闵行区","宝山区","徐汇区","松江区","嘉定区","静安区","普陀区","杨浦区","虹口区","长宁区","黄浦区","青浦区","金山区","崇明区","奉贤区"],selected:-1},{title:"朝向",list:["东","南","西","北"],selected:-1},{title:"户型",selected:-1,list:["一室","二室","三室","四室","五室及以上"]},{list:["1号线","2号线","3号线","4号线","5号线","6号线","7号线","8号线","9号线","10号线","11号线","12号线"],selected:-1,title:"地铁"},{title:"合租要求",list:["仅限男生","仅限女生","男女不限"],selected:-1},{title:"房源类型",list:["老公房","公寓","普通住宅","别墅","其他"],selected:-1},{list:["现代简约","地中海风格","美式乡村","日式风格","东南亚风格","田园风格","新中式风格","古典欧式"],selected:-1,title:"装修风格"}],hezu_menus:[{title:"区域",list:["浦东新区","闵行区","宝山区","徐汇区","松江区","嘉定区","静安区","普陀区","杨浦区","虹口区","长宁区","黄浦区","青浦区","金山区","崇明区","奉贤区"],selected:-1},{title:"预算",selected:-1,list:["1000元以下","1000-1500元","1500-2000元","2000-2500元","2500-3000元","3000-3500元","3500-4000元","4000-4500元","4500-5000元","5000-5500元","5500-6000元","6000元以上"]},{title:"地铁",selected:-1,list:["1号线","2号线","3号线","4号线","5号线","6号线","7号线","8号线","9号线","10号线","11号线","12号线"]},{title:"时间",selected:-1,list:["1分钟内","3分钟内","15分钟内","30分钟内","1小时内","3小时内","5小时内","9小时内","12小时内","1天内","3天内","一周内"]}]},x={methods:{onClick:function(){this.$emit(u)}}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sorting",on:{click:this.onClick}},[e("img",{attrs:{src:a("IWEU"),alt:"sort icon"}})])},staticRenderFns:[]};var A=a("VU/8")(x,L,!1,function(t){a("GNWm")},"data-v-50932bae",null).exports,E={methods:n()({},Object(o.b)(["toggleTabbar"])),created:function(){this.toggleTabbar(!0)}},z=a("Fd2+"),T={mixins:[E],data:function(){return{list:[],initLoading:!0,loading:!1,pagesize:10,page:0,search_value:"",searched:!1,menus:w.menus,order:0,selectMenu:[-1,-1,-1,-1],params:""}},components:{"fang-item":g,"fang-menu":y,"fang-sort":A},methods:{getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.pagesize;this.page=t+1;var a=this.params;return""===a?this.$http.get(f+"page="+t+"&pagesize="+e+"&order="+this.order):this.$http.get(f+"page="+t+"&pagesize="+e+a+"&order="+this.order)},onReachBottom:function(){var t=this;this.loading=!0,this.getList(this.page).then(function(e){t.list=t.list.concat(e.data.data.list),t.loading=!1})},onFangClick:function(t){this.routerToFangDetail(t)},routerToFangDetail:function(t){this.$router.push("/detail/"+t)},onSearch:function(){var t=this;""!==this.search_value?(this.searched=!0,this.setParams(),this.initLoading=!0,this.getList().then(function(e){t.list=e.data.data.list,t.initLoading=!1})):this.$toast({message:"请输入搜索关键字"})},onMenuSelect:function(t){var e=this,a=t[0],s=t[1];this.selectMenu[a]=s,this.setParams(),this.initLoading=!0,this.getList().then(function(t){e.list=t.data.data.list,e.initLoading=!1})},setParams:function(){var t=this.selectMenu,e="";""!==this.search_value&&(e="&text="+this.search_value);for(var a=t.length,s=["regin","price","room","area"],i=0;i<a;i++)-1!==t[i]&&(e+="&"+s[i]+"="+t[i]);this.params=e},clearSearchState:function(){this.searched&&(this.searched=!this.searched)},scrollHandler:function(){(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)==(document.documentElement.scrollHeight||document.body.scrollHeight)&&(this.initLoading||this.loading||this.onReachBottom())},sortClick:function(){var t=this,e=this.order;(e+=1)>2&&(e=0),this.order=e;var a="";a=0===e?"当前数据为默认排序":1===e?"当前数据按照时间升序排序":"当前数据按照时间降序排序",this.initLoading=!0,this.getList().then(function(e){t.list=e.data.data.list,t.initLoading=!1,t.$toast({message:a})})}},created:function(){var t=this;this.getList().then(function(e){t.list=t.list.concat(e.data.data.list),t.initLoading=!1}),window.addEventListener("scroll",this.scrollHandler,!1)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHandler,!1)}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home tabbar-padding"},[a("van-search",{attrs:{"show-action":"",placeholder:"搜索房源"},on:{input:t.clearSearchState},model:{value:t.search_value,callback:function(e){t.search_value=e},expression:"search_value"}},[a("div",{staticClass:"search",attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._v(" "),t.initLoading?a("div",{staticClass:"init-loading"},[a("van-loading",{attrs:{type:"spinner",color:"black"}}),t._v(" "),a("p",[t._v("加载中...")])],1):t._e(),t._v(" "),a("fang-menu",{attrs:{menus:t.menus},on:{onMenuSelect:t.onMenuSelect}}),t._v(" "),t.searched?a("div",{staticClass:"search-tips"},[t._v("你搜索的关键词为: "+t._s(t.search_value))]):t._e(),t._v(" "),a("div",{staticClass:"fang-list"},t._l(t.list,function(e){return a("fang-item",{key:e.id,attrs:{id:e.id,title:e.title,house_type:e.house_type,area:e.area,regin:e.regin,tags:e.tags,address:e.address,price:e.price,image:e.image},on:{onClick:t.onFangClick}})})),t._v(" "),t.loading?a("div",{staticClass:"pull-loading"},[a("van-loading",{attrs:{type:"circular",color:"black",size:"26px"}}),t._v(" "),a("span",[t._v("拼命加载中...")])],1):t._e(),t._v(" "),a("fang-sort",{on:{onClick:t.sortClick}})],1)},staticRenderFns:[]};var D=a("VU/8")(T,R,!1,function(t){a("c2Jk")},"data-v-607c1dd1",null).exports,S={methods:n()({},Object(o.b)(["toggleTabbar"])),created:function(){this.toggleTabbar(!1)}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back",on:{click:this.back}},[e("span",{staticClass:"fa fa-chevron-left"})])},staticRenderFns:[]};var $=a("VU/8")({methods:{back:function(){this.$router.back()}}},I,!1,function(t){a("/0Xm")},"data-v-2b7378aa",null).exports,H={props:{collect:{type:Boolean,default:!1},apply:{type:Boolean,default:!1},tel:{type:Number|String,default:"10086"}},data:function(){return{collectCopy:this.collect,applyCopy:this.apply}},computed:{toTel:function(){return"tel:"+this.tel},collectType:function(){return this.collectCopy?"fa-star":"fa-star-o"}},methods:{onCollectClick:function(){this.collectCopy=!this.collectCopy,this.collectCopy?this.showToast("收藏成功"):this.showToast("已取消收藏"),this.$emit(h,{collect:this.collectCopy?1:0})},onApplyClick:function(){this.applyCopy=!this.applyCopy,this.applyCopy?this.showToast("申请成功，请等待审核"):this.showToast("已取消申请"),this.$emit(h,{apply:this.applyCopy?1:0})},showToast:function(t){this.$toast({message:t})}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("div",{staticClass:"collect",on:{click:t.onCollectClick}},[a("span",{staticClass:"fa",class:t.collectType}),t._v(" "),a("span",[t._v("收藏")])]),t._v(" "),a("div",{staticClass:"apply",on:{click:t.onApplyClick}},[t.applyCopy?t._e():a("span",{staticClass:"fa fa-hand-o-right"}),t._v(" "),t.applyCopy?t._e():a("span",[t._v("我要申请")]),t._v(" "),t.applyCopy?a("span",{staticClass:"fa fa-hourglass-half"}):t._e(),t._v(" "),t.applyCopy?a("span",[t._v("审核中")]):t._e()]),t._v(" "),a("a",{staticClass:"tel",attrs:{href:t.toTel}},[a("span",{staticClass:"fa fa-phone"}),t._v(" "),a("span",[t._v("我要咨询")])])])},staticRenderFns:[]};var V=a("VU/8")(H,F,!1,function(t){a("xVHN")},"data-v-4b8ee13c",null).exports,U=a("mvHQ"),N=a.n(U);var M={setItem:function(t,e){var a=N()(e);return!!window.localStorage&&localStorage.setItem(t,a)},getItem:function(t){return!!window.localStorage&&JSON.parse(localStorage.getItem(t))}},B="user-key";function O(){var t=M.getItem(B);return t||!1}var P={isLogin:O,getUserId:function(){var t=O();return t||!1},setUserId:function(t){return M.setItem(B,t)}};s.a.use(z.a,{});var q={mixins:[S],created:function(){var t=this,e=this.$route.params.id;this.getDetail(e).then(function(e){t.detail=e.data.data}),console.log("ONLOAD")},data:function(){return{detail:{tags:[],house_type:{}},contact:{collect:!1,apply:!1}}},methods:{getDetail:function(t){return this.$http(_+"id="+t)},onContactChange:function(t){if(!P.isLogin())return this.$router.push("/login"),void this.$toast({message:"请先登录",duration:1500});if(t.hasOwnProperty("apply")){var e=t.apply;console.log(e)}if(t.hasOwnProperty("collect")){var a=t.collect;console.log(a)}}},components:{back:$,contact:V}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fang-detail"},[a("back"),t._v(" "),a("contact",{attrs:{tel:t.detail.tel,collect:t.contact.collect,apply:t.contact.apply},on:{onChange:t.onContactChange}}),t._v(" "),a("div",{staticClass:"detail-images"},[a("van-swipe",{staticClass:"detail-images-swiper",attrs:{autoplay:3e3}},t._l(t.detail.images,function(t,e){return a("van-swipe-item",{key:e},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])}))],1),t._v(" "),a("div",{staticClass:"detail-info"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.detail.title))]),t._v(" "),a("div",{staticClass:"detail-tags-time"},[a("span",{staticClass:"detail-tags"},t._l(t.detail.tags,function(e,s){return a("em",{key:s},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),a("span",{staticClass:"detail-time"},[t._v(t._s(t.detail.publish_time)+"发布")])]),t._v(" "),a("div",{staticClass:"detail-basic"},[a("div",{staticClass:"detail-item"},[a("span",{staticClass:"item-content"},[t._v(t._s(t.detail.price)+"元")]),t._v(" "),a("span",{staticClass:"item-des"},[t._v("租金")])]),t._v(" "),a("div",{staticClass:"detail-item"},[a("span",{staticClass:"item-content"},[t.detail.house_type.room?a("em",[t._v(t._s(t.detail.house_type.room)+"室")]):t._e(),t._v(" "),t.detail.house_type.hall?a("em",[t._v(t._s(t.detail.house_type.hall)+"厅")]):t._e(),t._v(" "),t.detail.house_type.bathroom?a("em",[t._v(t._s(t.detail.house_type.bathroom)+"卫")]):t._e()]),t._v(" "),a("span",{staticClass:"item-des"},[t._v("房型")])]),t._v(" "),a("div",{staticClass:"detail-item"},[a("span",{staticClass:"item-content"},[t._v(t._s(t.detail.area)+"平米")]),t._v(" "),a("span",{staticClass:"item-des"},[t._v("面积")])])]),t._v(" "),a("div",{staticClass:"detail-more"},[a("div",{staticClass:"more-item"},[a("span",{staticClass:"more-des"},[t._v("装修:")]),t._v(" "),a("span",{staticClass:"more-content"},[t._v(t._s(t.detail.decoration))])]),t._v(" "),a("div",{staticClass:"more-item"},[a("span",{staticClass:"more-des"},[t._v("朝向:")]),t._v(" "),a("span",{staticClass:"more-content"},[t._v(t._s(t.detail.oriented))])]),t._v(" "),a("div",{staticClass:"more-item"},[a("span",{staticClass:"more-des"},[t._v("楼层:")]),t._v(" "),a("span",{staticClass:"more-content"},[t._v(t._s(t.detail.floor)+"层(共"+t._s(t.detail.total_floor)+"层)")])]),t._v(" "),a("div",{staticClass:"more-item"},[a("span",{staticClass:"more-des"},[t._v("合租:")]),t._v(" "),a("span",{staticClass:"more-content"},[t._v(t._s(t.detail.require))])]),t._v(" "),a("div",{staticClass:"more-item"},[a("span",{staticClass:"more-des"},[t._v("类型:")]),t._v(" "),a("span",{staticClass:"more-content"},[t._v(t._s(t.detail.zzlx))])]),t._v(" "),a("div",{staticClass:"more-item"},[a("span",{staticClass:"more-des"},[t._v("年代:")]),t._v(" "),a("span",{staticClass:"more-content"},[t._v(t._s(t.detail.age))])])]),t._v(" "),a("div",{staticClass:"detail-des"},[a("span",{staticClass:"des-title"},[t._v("房源概况")]),t._v(" "),a("p",[t._v(t._s(t.detail.des))])])])],1)},staticRenderFns:[]};var W=a("VU/8")(q,j,!1,function(t){a("W/8S")},"data-v-242a6c5c",null).exports,G={props:{id:{type:Number|String,require:!0},author:{type:Object,detault:function(){return{}}},update_time:String,date:String,budget:Number|String,address:String,des:String,tel:String,collect:Boolean},data:function(){return{collectCopy:this.collect}},computed:{toTel:function(){return"tel:"+this.tel},collectType:function(){return this.collectCopy?"fa-star":"fa-star-o"}},methods:{onCollectClick:function(){this.collectCopy=!this.collectCopy,this.collectCopy?this.showToast("收藏成功"):this.showToast("已取消收藏")},showToast:function(t){this.$toast({message:t})}}},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hezu-item"},[a("div",{staticClass:"hezu-basic"},[a("div",{staticClass:"hezu-author"},[a("img",{attrs:{src:t.author.avatar,alt:"author avatar"}}),t._v(" "),a("div",{staticClass:"author-info"},[a("span",{staticClass:"nickname"},[t._v(t._s(t.author.nickname))]),t._v(" "),a("span",{staticClass:"career"},[t._v(t._s(t.author.career))])])]),t._v(" "),a("div",{staticClass:"update-time"},[t._v(t._s(t.update_time))])]),t._v(" "),a("div",{staticClass:"hezu-tags"},[a("span",{staticClass:"budget"},[t._v("预算"+t._s(t.budget)+"元")]),t._v(" "),a("span",{staticClass:"date"},[t._v(t._s(t.date)+"入住")])]),t._v(" "),a("div",{staticClass:"hezu-des"},[t._v("\n    "+t._s(t.des)+"\n  ")]),t._v(" "),a("div",{staticClass:"hezu-address"},[a("div",{staticClass:"location"},[a("span",{staticClass:"fa fa-map-marker"}),t._v("\n      "+t._s(t.address)+"\n    ")]),t._v(" "),a("div",{staticClass:"hezu-contact"},[a("span",{staticClass:"fa",class:t.collectType,on:{click:t.onCollectClick}}),t._v(" "),a("a",{staticClass:"fa fa-phone",attrs:{href:t.toTel}})])])])},staticRenderFns:[]};var Q={mixins:[E],data:function(){return{list:[],initLoading:!0,loading:!1,pagesize:10,page:0,search_value:"",searched:!1,menus:w.hezu_menus}},methods:{onSearch:function(){""!==this.search_value?this.searched=!0:this.$toast({message:"请输入搜索关键字"})},clearSearchState:function(){this.searched&&(this.searched=!this.searched)},getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.pagesize;return this.page=t+1,this.$http.get(C+"page="+t+"&pagesize="+e,{timeout:3e3})},onReachBottom:function(){var t=this;this.loading=!0,this.getList(this.page).then(function(e){t.list=t.list.concat(e.data.data.list),t.loading=!1})},scrollHandler:function(){(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)==(document.documentElement.scrollHeight||document.body.scrollHeight)&&(this.initLoading||this.loading||this.onReachBottom())}},components:{"fang-menu":y,"hezu-item":a("VU/8")(G,J,!1,function(t){a("4a01")},"data-v-386ebdc4",null).exports},created:function(){var t=this;this.getList().then(function(e){t.list=t.list.concat(e.data.data.list),t.initLoading=!1}),window.addEventListener("scroll",this.scrollHandler,!1)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHandler,!1)}},X={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hezu tabbar-padding"},[a("van-search",{attrs:{"show-action":"",placeholder:"搜索求租"},on:{input:t.clearSearchState},model:{value:t.search_value,callback:function(e){t.search_value=e},expression:"search_value"}},[a("div",{staticClass:"search",attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._v(" "),t.initLoading?a("div",{staticClass:"init-loading"},[a("van-loading",{attrs:{type:"spinner",color:"black"}}),t._v(" "),a("p",[t._v("加载中...")])],1):t._e(),t._v(" "),a("fang-menu",{attrs:{menus:t.menus}}),t._v(" "),t.searched?a("div",{staticClass:"search-tips"},[t._v("你搜索的关键词为: "+t._s(t.search_value))]):t._e(),t._v(" "),a("div",{staticClass:"hezu-list"},t._l(t.list,function(t){return a("hezu-item",{key:t.id,attrs:{id:t.id,author:t.author,update_time:t.update_time,budget:t.budget,date:t.date,des:t.des,collect:t.collect,address:t.address}})})),t._v(" "),t.loading?a("div",{staticClass:"pull-loading"},[a("van-loading",{attrs:{type:"circular",color:"black",size:"26px"}}),t._v(" "),a("span",[t._v("拼命加载中...")])],1):t._e()],1)},staticRenderFns:[]};var Y=a("VU/8")(Q,X,!1,function(t){a("YKej")},"data-v-4a198993",null).exports,K={mixins:[E],data:function(){return{showAreaSelect:!1,actions:[],menus:w.publish_menus,menusIndex:0,title:"",currentDate:"",showDate:!1,formateDate:"",tags:"",area:"",price:"",des:""}},methods:{showArea:function(t){var e=this;this.showAreaSelect=!0,this.actions=this.menus[t].list.map(function(t){return{name:t,callback:e.selectedCallback}}),this.menusIndex=t},selectedCallback:function(t){this.menus[this.menusIndex].selected=this.actions.indexOf(t),this.showAreaSelect=!1},submit:function(){this.checkForm()||this.$toast({message:"有必填信息未填写",duration:1500})},confirmDate:function(t){var e=new Date(t),a=e.getFullYear(),s=e.getMonth()+1;s=s>9?s:"0"+s;var i=e.getDate();i=i>9?i:"0"+i,this.formateDate=a+"-"+s+"-"+i,this.showDate=!1},checkForm:function(){var t=[],e=!1;return this.menus.forEach(function(a){e=-1!==a.selected,t.push(a.selected)}),e?e=this.title&&this.currentDate&&this.tags&&this.area&&this.price&&this.des:e}},components:{}},Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar-padding"},[a("van-cell-group",[a("van-field",{attrs:{placeholder:"请输入房源标题",label:"标题","input-align":"right",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),a("van-field",{attrs:{placeholder:"请输入房源价格",label:"价格","input-align":"right",type:"number",required:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),t._v(" "),a("van-field",{attrs:{placeholder:"请输入房源标签，以逗号分隔",label:"标签","input-align":"right",required:""},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}}),t._v(" "),a("van-field",{attrs:{placeholder:"请输入房源面积，单位为平米",label:"面积","input-align":"right",required:""},model:{value:t.area,callback:function(e){t.area=e},expression:"area"}}),t._v(" "),a("van-cell",{attrs:{title:"年代",value:t.formateDate,required:""},on:{click:function(e){t.showDate=!t.showDate}}}),t._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showDate,callback:function(e){t.showDate=e},expression:"showDate"}},[a("van-datetime-picker",{attrs:{"min-date":new Date("1980"),"max-date":new Date,type:"date"},on:{confirm:t.confirmDate,cancel:function(e){t.showDate=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),t._v(" "),t._l(t.menus,function(e,s){return a("van-cell",{key:s,attrs:{title:e.title,value:e.list[e.selected],required:""},on:{click:function(e){t.showArea(s)}}})}),t._v(" "),a("van-field",{attrs:{placeholder:"请输入房源详细描述",label:"详细描述",type:"textarea",required:""},model:{value:t.des,callback:function(e){t.des=e},expression:"des"}})],2),t._v(" "),a("div",{staticClass:"btns"},[a("van-button",{attrs:{size:"large"},on:{click:t.submit}},[t._v("提交")])],1),t._v(" "),a("van-actionsheet",{staticClass:"area-select",attrs:{actions:t.actions},model:{value:t.showAreaSelect,callback:function(e){t.showAreaSelect=e},expression:"showAreaSelect"}})],1)},staticRenderFns:[]};var tt=a("VU/8")(K,Z,!1,function(t){a("6RM0")},"data-v-b141d694",null).exports,et={mixins:[E],data:function(){return{list:[],initLoading:!0,loading:!1,pagesize:10,page:0}},components:{"fang-item":g},methods:{back:function(){this.$router.back()},getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.pagesize;return this.page=t+1,this.$http.get(f+"page="+t+"&pagesize="+e,{timeout:3e3})},onReachBottom:function(){var t=this;this.loading=!0,this.getList(this.page).then(function(e){t.list=t.list.concat(e.data.data.list),t.loading=!1})},onFangClick:function(t){this.routerToFangDetail(t)},routerToFangDetail:function(t){this.$router.push("/detail/"+t)},scrollHandler:function(){(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)==(document.documentElement.scrollHeight||document.body.scrollHeight)&&(this.initLoading||this.loading||this.onReachBottom())}},created:function(){var t=this;this.getList().then(function(e){t.list=t.list.concat(e.data.data.list),t.initLoading=!1}),window.addEventListener("scroll",this.scrollHandler,!1)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHandler,!1)}},at={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fang-list tabbar-padding"},[a("van-nav-bar",{attrs:{title:"我的收藏","left-text":"返回","left-arrow":""},on:{"click-left":t.back}}),t._v(" "),t.initLoading?a("div",{staticClass:"init-loading"},[a("van-loading",{attrs:{type:"spinner",color:"black"}}),t._v(" "),a("p",[t._v("加载中...")])],1):t._e(),t._v(" "),t._l(t.list,function(e){return a("fang-item",{key:e.id,attrs:{id:e.id,title:e.title,house_type:e.house_type,area:e.area,regin:e.regin,tags:e.tags,address:e.address,price:e.price,image:e.image},on:{onClick:t.onFangClick}})}),t._v(" "),t.loading?a("div",{staticClass:"pull-loading"},[a("van-loading",{attrs:{type:"circular",color:"black",size:"26px"}}),t._v(" "),a("span",[t._v("拼命加载中...")])],1):t._e()],2)},staticRenderFns:[]},st=a("VU/8")(et,at,!1,null,null,null).exports,it={mixins:[E],created:function(){},data:function(){return{avatar:"http://ojihaa8pb.bkt.clouddn.com/user.png"}},methods:{onLinkTouch:function(t){this.$router.push(t)},onUserClick:function(){P.isLogin()||this.$router.push("/login")}},components:{}},nt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user"},[a("div",{staticClass:"user-container",on:{click:t.onUserClick}},[a("img",{staticClass:"user-avatar",attrs:{src:t.avatar}}),t._v(" "),a("span",{staticClass:"user-name"},[t._v("登录 / 注册")])]),t._v(" "),a("ul",{staticClass:"links"},[a("li",{on:{click:function(e){t.onLinkTouch("shoucang")}}},[a("span",{staticClass:"links-item"},[t._v("我的收藏")]),t._v(" "),a("span",{staticClass:"fa fa-angle-right"})]),t._v(" "),a("li",{on:{click:function(e){t.onLinkTouch("wodehezu")}}},[a("span",{staticClass:"links-item"},[t._v("我的合租")]),t._v(" "),a("span",{staticClass:"fa fa-angle-right"})])])])},staticRenderFns:[]};var ot=a("VU/8")(it,nt,!1,function(t){a("bVlw")},"data-v-e81cbee6",null).exports,lt={mixins:[S],created:function(){console.log("CREATED")},data:function(){return{logining:!1,showLogin:!0,sexList:["男","女"],sexResult:"男",rname:"",rpassword:"",rtel:"",lname:"",lpassword:""}},components:{back:$},methods:{login:function(){this.lname&&this.lpassword?(z.b.loading({mask:!0,message:"登录中...",duration:0}),setTimeout(function(){z.b.clear()},5e3),console.log(this.lname,this.lpassword)):this.$toast({message:"有必填信息未填写"})},onRegisterClick:function(){this.showLogin=!1},onLoginClick:function(){this.showLogin=!0},register:function(){this.rtel&&this.rname&&this.rpassword?this.checkPhone()&&(console.log(this.sexResult,this.rtel,this.rname,this.rpassword),z.b.loading({mask:!0,message:"注册中...",duration:0})):this.$toast({message:"有必填信息未填写"})},checkPhone:function(){return!!/^1[34578]\d{9}$/.test(this.rtel)||(this.$toast({message:"手机号格式不合法",duration:1500}),!1)}}},ct={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("back"),t._v(" "),a("div",{staticClass:"login-bg"}),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"login-register"},[a("transition",{attrs:{name:"login"}},[t.showLogin?a("div",{staticClass:"login-container"},[a("div",{staticClass:"lr-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.lname,expression:"lname"}],staticClass:"login-name",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.lname},on:{input:function(e){e.target.composing||(t.lname=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lpassword,expression:"lpassword"}],staticClass:"login-password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.lpassword},on:{input:function(e){e.target.composing||(t.lpassword=e.target.value)}}}),t._v(" "),a("span",{staticClass:"lr-container-tips",on:{click:t.onRegisterClick}},[t._v("还没账号？")])]),t._v(" "),a("span",{staticClass:"login-btn",on:{click:t.login}},[t._v("立即登录")])]):t._e()]),t._v(" "),a("transition",{attrs:{name:"register"}},[t.showLogin?t._e():a("div",{staticClass:"register-container"},[a("div",{staticClass:"lr-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rname,expression:"rname"}],staticClass:"register-name",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.rname},on:{input:function(e){e.target.composing||(t.rname=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rpassword,expression:"rpassword"}],staticClass:"register-password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.rpassword},on:{input:function(e){e.target.composing||(t.rpassword=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rtel,expression:"rtel"}],staticClass:"register-phone",attrs:{type:"tel",placeholder:"请输入手机号"},domProps:{value:t.rtel},on:{input:function(e){e.target.composing||(t.rtel=e.target.value)}}}),t._v(" "),a("div",{staticClass:"row"},[a("van-radio-group",{staticClass:"radio-container",model:{value:t.sexResult,callback:function(e){t.sexResult=e},expression:"sexResult"}},t._l(t.sexList,function(e,s){return a("van-radio",{key:e,staticClass:"radio",attrs:{name:e}},[t._v(t._s(e))])})),t._v(" "),a("span",{staticClass:"lr-container-tips",on:{click:t.onLoginClick}},[t._v("← 返回登录")])],1)]),t._v(" "),a("span",{staticClass:"login-btn",on:{click:t.register}},[t._v("开始注册")])])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-tips css1393e9303b189e7"},[e("em",[this._v("58")]),this._v("合租")])}]};var rt=a("VU/8")(lt,ct,!1,function(t){a("kve/")},"data-v-fa9bcd14",null).exports,dt={mixins:[E],data:function(){return{list:[],initLoading:!0,loading:!1,pagesize:10,page:0,active:0}},components:{"fang-item":g},methods:{back:function(){this.$router.back()},getList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.pagesize;return this.page=t+1,this.$http.get(f+"page="+t+"&pagesize="+e,{timeout:3e3})},onReachBottom:function(){var t=this;this.loading=!0,this.getList(this.page).then(function(e){t.list=t.list.concat(e.data.data.list),t.loading=!1})},onFangClick:function(t){this.routerToFangDetail(t)},routerToFangDetail:function(t){this.$router.push("/detail/"+t)},scrollHandler:function(){(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)==(document.documentElement.scrollHeight||document.body.scrollHeight)&&(this.initLoading||this.loading||this.onReachBottom())}},created:function(){var t=this;this.getList().then(function(e){t.list=t.list.concat(e.data.data.list),t.initLoading=!1}),window.addEventListener("scroll",this.scrollHandler,!1)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHandler,!1)}},ut={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar-padding"},[a("van-nav-bar",{attrs:{title:"我的合租","left-text":"返回","left-arrow":""},on:{"click-left":t.back}}),t._v(" "),t.initLoading?a("div",{staticClass:"init-loading"},[a("van-loading",{attrs:{type:"spinner",color:"black"}}),t._v(" "),a("p",[t._v("加载中...")])],1):t._e(),t._v(" "),a("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"我申请过的"}},[a("div",{staticClass:"fang-list"},t._l(t.list,function(e){return a("fang-item",{key:e.id,attrs:{id:e.id,title:e.title,house_type:e.house_type,area:e.area,regin:e.regin,tags:e.tags,address:e.address,price:e.price,image:e.image},on:{onClick:t.onFangClick}})}))]),t._v(" "),a("van-tab",{attrs:{title:"我发布过的"}},[a("div",{staticClass:"fang-list"},t._l(t.list,function(e){return a("fang-item",{key:e.id,attrs:{id:e.id,title:e.title,house_type:e.house_type,area:e.area,regin:e.regin,tags:["已有x人申請"],address:e.address,price:e.price,image:e.image},on:{onClick:t.onFangClick}},[a("div",{staticClass:"van-btn",attrs:{slot:"btns"},slot:"btns"},[a("van-button",{staticClass:"exit-btn",attrs:{type:"danger"}},[t._v("下架")])],1)])}))])],1),t._v(" "),t.loading?a("div",{staticClass:"pull-loading"},[a("van-loading",{attrs:{type:"circular",color:"black",size:"26px"}}),t._v(" "),a("span",[t._v("拼命加载中...")])],1):t._e()],1)},staticRenderFns:[]};var ht=a("VU/8")(dt,ut,!1,function(t){a("E4bM")},"data-v-646f8a22",null).exports;s.a.use(d.a);var vt=new d.a({routes:[{path:"/",name:"home",component:D},{path:"/hezu",name:"Hezu",component:Y},{path:"/detail/:id",name:"FangDetail",component:W},{path:"/publish",name:"Publish",component:tt},{path:"/user",name:"User",component:ot},{path:"/login",name:"Login",component:rt},{path:"/shoucang",name:"ShouCang",component:st},{path:"/wodehezu",name:"WoDeHeZu",component:ht}],scrollBehavior:function(t,e,a){return{x:0,y:0}}});s.a.use(o.a);var pt=new o.a.Store({state:{show_tabbar:!0},mutations:{TOGGLETABBAR:function(t,e){t.show_tabbar=e}},actions:{toggleTabbar:function(t,e){t.commit("TOGGLETABBAR",e)}}}),mt=(a("E5KQ"),a("nHXd"),a("2Shs"),a("DC7I"),a("5tL5"),a("M2TV"),a("pmvb"),a("JIk4"),a("I5cY"),a("JQ9N"),a("WVnE"),a("D4WL"),a("jRG0"),a("L9VN"),a("5W1q"),a("rdLu")),gt=a.n(mt),ft=a("mtWM"),_t=a.n(ft);s.a.config.productionTip=!1,s.a.prototype.$http=_t.a,s.a.prototype.util=gt.a,s.a.use(z.c),new s.a({el:"#app",router:vt,store:pt,components:{App:r},template:"<App/>"})},U4W6:function(t,e){},"W/8S":function(t,e){},WVnE:function(t,e){},YKej:function(t,e){},bVlw:function(t,e){},c2Jk:function(t,e){},jRG0:function(t,e){},"kve/":function(t,e){},nHXd:function(t,e){},pmvb:function(t,e){},xVHN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fbbaa4b611728c5e7f9d.js.map