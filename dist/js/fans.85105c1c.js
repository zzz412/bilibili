(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fans"],{"4ad0":function(e,t,n){"use strict";var s=n("971a"),i=n.n(s);i.a},"971a":function(e,t,n){},d4ee:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fans"},[e._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.attention==[],expression:"attention == []"}],staticClass:"kong"},[n("p",[e._v("你还没有好友哦~~")])]),n("div",{staticClass:"gz-list"},e._l(e.attention.xyuser,function(t,s){return n("div",{key:s},[n("a",{on:{click:function(n){return e.getPic(t.userfriend)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.xyuserinfo.userphoto,expression:"item.xyuserinfo.userphoto"}]})]),n("div",[n("h3",{staticStyle:{"font-size":"16px",margin:"10px 0px",color:"#000"}},[e._v(e._s(t.xyuser.username))]),n("p",[e._v(e._s(t.xyuserinfo.usershow))])]),n("el-dropdown",[n("span",{staticClass:"el-dropdown-link"},[e._v("\n\t\t\t\t已关注"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("发消息")]),n("el-dropdown-item",[n("span",{on:{click:function(n){return e.quguan(t.userfriend)}}},[e._v("取消关注")])])],1)],1)],1)}),0),n("el-pagination",{staticStyle:{"text-align":"center",display:"block","padding-top":"30px"},attrs:{background:"",layout:"prev, pager, next","page-size":10,total:e.attention.count},on:{"current-change":e.handleCurrentChange}})],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sp-title"},[n("h3",{staticStyle:{"font-size":"18px",margin:"10px 0px"}},[e._v("全部好友")])])}],a=n("c0d6"),r={store:a["a"],data:function(){return{attention:{},userid:""}},mounted:function(){this.$route.query.userid?this.userid=this.$route.query.userid:this.userid=a["a"].state.user.userid,this.handleCurrentChange(1)},methods:{handleCurrentChange:function(e){var t=this;this.axios.get("xyfriend/findPageByUserFriends.do",{params:{userid:this.userid,page:e}}).then(function(e){t.attention=e.data})},getPic:function(e){var t=this.$router.resolve({name:"homepage",query:{userid:e}}),n=t.href;window.open(n,"_blank")},quguan:function(e){var t=this;this.axios.get("xyfriend/updateAddUpById.do",{params:{userfriend:e}}).then(function(e){1==e.data.xyuser&&(t.$message({type:"success",message:"已取消关注!",duration:1e3}),t.$router.go(0))})}}},o=r,u=(n("4ad0"),n("2877")),d=Object(u["a"])(o,s,i,!1,null,"cbb2b022",null);t["default"]=d.exports}}]);
//# sourceMappingURL=fans.85105c1c.js.map