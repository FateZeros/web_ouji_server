webpackJsonp([1],{0:function(e,t){},"4QXX":function(e,t){},"7cX4":function(e,t){},"7eZF":function(e,t){},"9Xjz":function(e,t){},Djsq:function(e,t){},Jgdx:function(e,t,r){e.exports=r.p+"static/img/demoUser.cd4fc17.jpg"},MFzA:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("/5sW"),s=r("8+8L"),o=r("zL8q"),l=r.n(o),n=(r("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var i=r("VU/8")({name:"App"},n,!1,function(e){r("QQGE")},null,null).exports,m=r("/ocq"),c=r("mvHQ"),u=r.n(c),d=r("//Fk"),f=r.n(d);function p(e){var t=e.url,r=e.method,s=void 0===r?"get":r,o=e.data,l=void 0===o?{}:o;return new f.a(function(e,r){a.default.http[s](t,l).then(function(t){var a=t.data,s=a.code,o=a.msg,l=a.records;200===s?e({code:s,msg:o,records:l}):r({code:s,msg:o})}).catch(function(){r({code:-1,msg:"服务器故障"})})})}function v(e){return p({url:"/api/produceword",method:"post",data:e})}var h={data:function(){return{loginForm:{userName:"",password:""},loginRule:{userName:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"}]}}},methods:{doLogin:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("submit",t.loginForm.userName,t.loginForm.password);var r,a={username:t.loginForm.userName,password:t.loginForm.password};(r=a,p({url:"/api/login",method:"post",data:r})).then(function(){var e={username:t.loginForm.userName};localStorage.setItem("OUJI_INFO",u()(e)),t.$router.push({path:"/nnc1"})}).catch(function(e){e.code;var r=e.msg;t.$message({message:r,type:"error",duration:2e3})})})}}},N={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("el-form",{ref:"loginForm",staticClass:"demo-dynamic login-form",attrs:{model:e.loginForm,rules:e.loginRule,"label-width":"80px","label-postion":"right"}},[r("el-form-item",{attrs:{prop:"userName",label:"用户名"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName","string"==typeof t?t.trim():t)},expression:"loginForm.userName"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password",label:"密码"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password","string"==typeof t?t.trim():t)},expression:"loginForm.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{staticClass:"loginBtn",attrs:{type:"primary"},on:{click:function(t){e.doLogin("loginForm")}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("div",{staticClass:"header"},[this._v("\n                    欧记商务管理系统\n                ")]),this._v(" "),t("div",{staticClass:"desc"},[this._v("\n                    Enterprise Information Manage System\n                ")])])}]};var g=r("VU/8")(h,N,!1,function(e){r("Djsq")},null,null).exports,b=r("Jgdx"),w=r.n(b),_={data:function(){var e=localStorage.getItem("OUJI_INFO")||"{}";e&&(e=JSON.parse(e));var t=e.username;return{username:void 0===t?"":t,userImg:w.a}},methods:{handleCommand:function(e){"loginout"===e&&(localStorage.setItem("OUJI_INFO",""),this.$router.push("/login"))}}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"logo"},[e._v("鸥记商务")]),e._v(" "),r("div",{staticClass:"user-info"},[r("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[r("span",{staticClass:"el-dropdown-link"},[r("img",{staticClass:"user-img",attrs:{src:e.userImg}}),e._v("\n          "+e._s(e.username)+"\n        ")]),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"loginout"}},[e._v("退出")])],1)],1)],1)])},staticRenderFns:[]};var x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sidebar"},[r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.onRoutes,theme:"dark","unique-opened":"",router:""}},[e._l(e.routeItems,function(t){return[t.subs?[r("el-submenu",{key:t.index,attrs:{index:t.index}},[r("template",{slot:"title"},[r("i",{class:t.icon}),e._v(e._s(t.title))]),e._v(" "),e._l(t.subs,function(t,a){return r("el-menu-item",{key:a,attrs:{index:t.index}},[e._v(e._s(t.title)+"\n          ")])})],2)]:[r("el-menu-item",{key:t.index,attrs:{index:t.index}},[r("i",{class:t.icon}),e._v(e._s(t.title)+"\n        ")])]]})],2)],1)},staticRenderFns:[]};var y={data:function(){return{}},components:{vHeader:r("VU/8")(_,C,!1,function(e){r("7eZF")},"data-v-2a9899b6",null).exports,vSidebar:r("VU/8")({data:function(){return{routeItems:[{icon:"el-icon-document",index:"word",title:"Word文档",subs:[{index:"/nnc1",title:"NNC1文档"},{index:"/nd2a",title:"ND2A文档"},{index:"/nr1",title:"NR1文档"},{index:"/nar1",title:"NAR1文档"},{index:"/tax",title:"致税務局"},{index:"/nd4",title:"ND4文档"}]},{icon:"el-icon-setting",index:"/setting",title:"系统设置"}]}},computed:{onRoutes:function(){return this.$route.path}}},x,!1,function(e){r("7cX4")},"data-v-b0a3d8d2",null).exports},computed:{key:function(){return void 0!==this.$router.path?this.$router.path+ +new Date:this.$router+ +new Date}}},U={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-header"),this._v(" "),t("v-sidebar"),this._v(" "),t("div",{staticClass:"content"},[t("transition",{attrs:{name:"move",mode:"out-in"}},[t("router-view",{key:this.key})],1)],1)],1)},staticRenderFns:[]};var k=r("VU/8")(y,U,!1,function(e){r("4QXX")},"data-v-4ed0475e",null).exports,S=r("woOf"),I=r.n(S),$=r("d7EF"),E=r.n($),A=r("Dd8w"),q=r.n(A),D="Hong Kong Ouji Shangwu Technology Co., Limited",O="ROOM 32,11/F, LEE KA INDUSTRIAL BUILDING, 8 NG FONG STREET,SAN PO KONG, KOWLOON, HONG KONG",F="30696980",P="30696981",T="hkoji907@hotmail.com",R="ORDINARY",M=2056331,H="香港歐記商務科技有限公司",L="Hong Kong Ouji Shangwu Technology Co., Limited",K="ROOM 32, 11/F, LEE KA INDUSTRIAL BUILDING, 8 NG FONG STREET,SAN PO KONG, KOWLOON, HONG KONG",G={data:function(){return{active:0,forthStatus:"wait",form:{language:"cn",cNameEn:"",cNameCn:"",cRAddr:"",sUName:D,sUAddr:O,sUPhone:F,sUFax:P,sUEmail:T,cSType:R,cSCurrency:"",cSTotal:"",fNameCn:"",fNameEn:"",fAddr:"",isChairman:!1,cNumber:M,cEmail:"NIL",sNameCn:H,sNameEn:L,sHKAddr:K,chNameCn:"",chSureName:"",chOtherName:"",chCountry:"",chAddr:"",fNameSigned:"",fDateSigned:"",certificateType:"chinaId",chChinaId:"",chHKId:"NIL",psCountry:"NIL",psNumber:"NIL"},submitUser:{userInfo:"defaultUser"},rules:{cNameEn:[{required:!0,message:"请输入公司英文名稱"}],cNameCn:[{required:!0,message:"请输入公司中文名稱"}],cRAddr:[{required:!0,message:"请输入註冊辦事處地址"}],sUName:[{required:!0,message:"请输入提交人名稱"}],sUAddr:[{required:!0,message:"请输入提交人地址"}],sUPhone:[{required:!0,message:"请输入提交人電話"}],sUFax:[{required:!0,message:"请输入提交人傳真"}],sUEmail:[{required:!0,message:"请输入提交人電郵"}],cSType:[{required:!0,message:"请输入股份的類別"}],cSCurrency:[{required:!0,message:"请输入貨幣"}],cSTotal:[{required:!0,message:"请输入建議發行的股份總數"}],fNameCn:[{required:!0,message:"请输入中文姓名"}],fNameEn:[{required:!0,message:"请输入英文姓名"},{validator:function(e,t,r){var a=t.split("-");a[0]&&a[1]?r():r(new Error("必须以-隔开"))}}],fAddr:[{required:!0,message:"请输入地址"}],fCountry:[{required:!0,message:"请输入國家／地區"}],fStockNum:[{required:!0,message:"请输入占股份的数目"}],cNumber:[{required:!0,message:"请输入公司編號"}],sNameCn:[{required:!0,message:"公司中文名稱"}],sNameEn:[{required:!0,message:"公司英文名稱"}],sHKAddr:[{required:!0,message:"香港地址"}],chNameCn:[{required:!0,message:"请输入董事姓名"}],chSureName:[{required:!0,message:"请输入英文姓式"}],chOtherName:[{required:!0,message:"请输入英文名字"}],chCountry:[{required:!0,message:"请输入國家／地區"}],chAddr:[{required:!0,message:"请输入联络地址或证件地址"}],chChinaId:[{required:!0,message:"请输入中国大陆的身份证号码"}],chHKId:[{required:!0,message:"请输入香港身份证号码"}],psCountry:[{required:!0,message:"请输入護照簽發國家"}],psNumber:[{required:!0,message:"请输入護照號碼"}],fNameSigned:[{required:!0,message:"请输入姓名簽署"}],fDateSigned:[{required:!0,message:"请输入选择日期"}]}}},methods:{changeSubmitUser:function(e){this.form="selfUser"==e?q()({},this.form,{sUName:"",sUAddr:"",sUPhone:"",sUFax:"",sUEmail:"",cSType:""}):q()({},this.form,{sUName:D,sUAddr:O,sUPhone:F,sUFax:P,sUEmail:T,cSType:R})},changeCertificateType:function(e){this.form=q()({},this.form,{chChinaId:"chinaId"==e?"":"NIL",chHKId:"hkId"==e?"":"NIL",psCountry:"passport"==e?"":"NIL",psNumber:"passport"==e?"":"NIL"})},prePage:function(){this.active>0&&(this.active=this.active-1),this.forthStatus="wait"},nextPage:function(){var e=this;this.$refs[{0:"formPage0",1:"formPage1",2:"formPage2",3:"formPage3"}[this.active]].validate(function(t){if(!t)return!1;if(e.active<3){if(1==e.active&&e.form.isChairman){var r=e.form,a=r.fNameCn,s=r.fAddr,o=r.fCountry,l=e.form.fNameEn.split("-"),n=E()(l,2),i=n[0],m=n[1];e.form=q()({},e.form,{chNameCn:a,chSureName:i,chOtherName:m,chAddr:s,chCountry:o})}e.active=e.active+1}else{var c=I()({},e.form);delete c.certificateType,delete c.isChairman,delete c.language,c.fNameEn=c.fNameEn.split("-").join(" "),e.produceWord("NNC1",c)}})},produceWord:function(e,t){var r=this;v({docxName:e,docxParams:t}).then(function(){r.forthStatus="success";var t="/output/"+e,a=e+".docx";r.$alert("<a href="+t+" download="+a+">"+a+"</a>","WORD 下载，点击下载",{dangerouslyUseHTMLString:!0})}).catch(function(e){e.code;var t=e.msg;r.$message({message:t,type:"error",duration:2e3})})}}},j={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[r("el-step",{attrs:{title:"初始化表单"}}),e._v(" "),r("el-step",{attrs:{title:"股本与股东"}}),e._v(" "),r("el-step",{attrs:{title:"首任秘書"}}),e._v(" "),r("el-step",{attrs:{title:"首任董事",status:e.forthStatus}})],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active == 0"}],ref:"formPage0",staticClass:"ncc1-page",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[r("el-row",{staticClass:"nnc1-module-title"},[e._v("A.填写公司基础信息 Basic Information Company")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-form-item",{attrs:{label:"法定文件版本"}},[r("el-radio-group",{model:{value:e.form.language,callback:function(t){e.$set(e.form,"language",t)},expression:"form.language"}},[r("el-radio",{attrs:{label:"cn"}},[e._v("繁体中文　Traditional")]),e._v(" "),r("el-radio",{attrs:{label:"en"}},[e._v("英文　English")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"公司英文名稱:",prop:"cNameEn"}},[r("el-input",{attrs:{placeholder:"公司英文名称只能由字母以及符号和空格组成并以 LIMITED 结尾"},model:{value:e.form.cNameEn,callback:function(t){e.$set(e.form,"cNameEn",t)},expression:"form.cNameEn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"公司中文名稱:",prop:"cNameCn"}},[r("el-input",{attrs:{placeholder:"公司中文名称只能由数字或中文汉字以及符号与空格并以有限公司结尾"},model:{value:e.form.cNameCn,callback:function(t){e.$set(e.form,"cNameCn",t)},expression:"form.cNameCn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"註冊辦事處地址:",prop:"cRAddr"}},[r("el-input",{attrs:{placeholder:"公司所使用的註冊辦事處的建議地址"},model:{value:e.form.cRAddr,callback:function(t){e.$set(e.form,"cRAddr",t)},expression:"form.cRAddr"}})],1)],1),e._v(" "),r("el-row",{staticClass:"nnc1-module-title"},[e._v("B.提交人的资料　Presentor’s Reference")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-form-item",{attrs:{label:"提交人信息"}},[r("el-radio-group",{on:{change:e.changeSubmitUser},model:{value:e.submitUser.userInfo,callback:function(t){e.$set(e.submitUser,"userInfo",t)},expression:"submitUser.userInfo"}},[r("el-radio",{attrs:{label:"defaultUser"}},[e._v("默认")]),e._v(" "),r("el-radio",{attrs:{label:"selfUser"}},[e._v("自定义")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"提交人名稱:",prop:"sUName"}},[r("el-input",{attrs:{placeholder:"提交人的中文名称"},model:{value:e.form.sUName,callback:function(t){e.$set(e.form,"sUName",t)},expression:"form.sUName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"提交人地址:",prop:"sUAddr"}},[r("el-input",{attrs:{placeholder:"提交人的地址"},model:{value:e.form.sUAddr,callback:function(t){e.$set(e.form,"sUAddr",t)},expression:"form.sUAddr"}})],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"提交人電話:",prop:"sUPhone"}},[r("el-input",{attrs:{placeholder:"提交人電話"},model:{value:e.form.sUPhone,callback:function(t){e.$set(e.form,"sUPhone",t)},expression:"form.sUPhone"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"提交人傳真:",prop:"sUFax"}},[r("el-input",{attrs:{placeholder:"提交人傳真"},model:{value:e.form.sUFax,callback:function(t){e.$set(e.form,"sUFax",t)},expression:"form.sUFax"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"提交人電郵:",prop:"sUEmail"}},[r("el-input",{attrs:{placeholder:"提交人電郵",type:"email"},model:{value:e.form.sUEmail,callback:function(t){e.$set(e.form,"sUEmail",t)},expression:"form.sUEmail"}})],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active == 1"}],ref:"formPage1",staticClass:"ncc1-page",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[r("el-row",{staticClass:"nnc1-module-title"},[e._v("A：股本信息　Share Capital")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"股份的類別:",prop:"cSType"}},[r("el-input",{attrs:{placeholder:"股份的類別"},model:{value:e.form.cSType,callback:function(t){e.$set(e.form,"cSType",t)},expression:"form.cSType"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"貨幣:",prop:"cSCurrency"}},[r("el-input",{attrs:{placeholder:"貨幣(HKD)"},model:{value:e.form.cSCurrency,callback:function(t){e.$set(e.form,"cSCurrency",t)},expression:"form.cSCurrency"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-form-item",{attrs:{label:"建議發行股份總數:",prop:"cSTotal"}},[r("el-input",{attrs:{placeholder:"建議發行股份總數(数字)"},model:{value:e.form.cSTotal,callback:function(t){e.$set(e.form,"cSTotal",t)},expression:"form.cSTotal"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"nnc1-module-title"},[e._v("B：创办成员/股东信息　Founder Members")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"中文姓名:",prop:"fNameCn"}},[r("el-input",{attrs:{placeholder:"必须为中文"},model:{value:e.form.fNameCn,callback:function(t){e.$set(e.form,"fNameCn",t)},expression:"form.fNameCn"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"英文姓名:",prop:"fNameEn"}},[r("el-input",{attrs:{placeholder:"姓和名必须以'-'分割，如WU-JIANMIN"},model:{value:e.form.fNameEn,callback:function(t){e.$set(e.form,"fNameEn",t)},expression:"form.fNameEn"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"地址:",prop:"fAddr"}},[r("el-input",{attrs:{placeholder:"联络地址或证件地址"},model:{value:e.form.fAddr,callback:function(t){e.$set(e.form,"fAddr",t)},expression:"form.fAddr"}})],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"國家／地區:",prop:"fCountry"}},[r("el-input",{attrs:{placeholder:"國家／地區"},model:{value:e.form.fCountry,callback:function(t){e.$set(e.form,"fCountry",t)},expression:"form.fCountry"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"占股份的数目:",prop:"fStockNum"}},[r("el-input",{attrs:{placeholder:"小于等于發行股份總數"},model:{value:e.form.fStockNum,callback:function(t){e.$set(e.form,"fStockNum",t)},expression:"form.fStockNum"}})],1)],1)],1),e._v(" "),r("el-form-item",[r("el-checkbox-group",{model:{value:e.form.isChairman,callback:function(t){e.$set(e.form,"isChairman",t)},expression:"form.isChairman"}},[r("el-checkbox",{attrs:{name:"isChairman"}},[e._v("作为董事 (如作为董事该信息将体现在董事栏)")])],1)],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active == 2"}],ref:"formPage2",staticClass:"ncc1-page",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[r("el-row",{staticClass:"nnc1-module-title"},[e._v("首任秘书　First Secretary")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"公司編號:",prop:"cNumber"}},[r("el-input",{attrs:{placeholder:"公司編號"},model:{value:e.form.cNumber,callback:function(t){e.$set(e.form,"cNumber",t)},expression:"form.cNumber"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"公司邮件:",prop:"cEmail"}},[r("el-input",{attrs:{placeholder:"公司邮件(NIL)"},model:{value:e.form.cEmail,callback:function(t){e.$set(e.form,"cEmail",t)},expression:"form.cEmail"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"公司中文名稱:",prop:"sNameCn"}},[r("el-input",{attrs:{placeholder:"公司中文名稱"},model:{value:e.form.sNameCn,callback:function(t){e.$set(e.form,"sNameCn",t)},expression:"form.sNameCn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"公司英文名稱:",prop:"sNameEn"}},[r("el-input",{attrs:{placeholder:"公司英文名稱"},model:{value:e.form.sNameEn,callback:function(t){e.$set(e.form,"sNameEn",t)},expression:"form.sNameEn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"香港地址:",prop:"sHKAddr"}},[r("el-input",{attrs:{placeholder:"香港地址"},model:{value:e.form.sHKAddr,callback:function(t){e.$set(e.form,"sHKAddr",t)},expression:"form.sHKAddr"}})],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:3==e.active,expression:"active == 3"}],ref:"formPage3",staticClass:"ncc1-page",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[r("el-row",{staticClass:"nnc1-module-title"},[e._v("首任董事　First Directors")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"董事姓名:",prop:"chNameCn"}},[r("el-input",{attrs:{placeholder:"中文姓名"},model:{value:e.form.chNameCn,callback:function(t){e.$set(e.form,"chNameCn",t)},expression:"form.chNameCn"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"英文姓名:",prop:"chSureName"}},[r("el-input",{attrs:{placeholder:"英文姓式"},model:{value:e.form.chSureName,callback:function(t){e.$set(e.form,"chSureName",t)},expression:"form.chSureName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"英文姓名:",prop:"chOtherName"}},[r("el-input",{attrs:{placeholder:"英文名字"},model:{value:e.form.chOtherName,callback:function(t){e.$set(e.form,"chOtherName",t)},expression:"form.chOtherName"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"國家／地區:",prop:"chCountry"}},[r("el-input",{attrs:{placeholder:"國家／地區"},model:{value:e.form.chCountry,callback:function(t){e.$set(e.form,"chCountry",t)},expression:"form.chCountry"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"住址:",prop:"chAddr"}},[r("el-input",{attrs:{placeholder:"联络地址或证件地址"},model:{value:e.form.chAddr,callback:function(t){e.$set(e.form,"chAddr",t)},expression:"form.chAddr"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"证件类型:"}},[r("el-radio-group",{on:{change:e.changeCertificateType},model:{value:e.form.certificateType,callback:function(t){e.$set(e.form,"certificateType",t)},expression:"form.certificateType"}},[r("el-radio",{attrs:{label:"chinaId"}},[e._v("身份證明CHINA ID")]),e._v(" "),r("el-radio",{attrs:{label:"hkId"}},[e._v("身份分證明HongKong ID")]),e._v(" "),r("el-radio",{attrs:{label:"passport"}},[e._v("護照")])],1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"chinaId"==e.form.certificateType,expression:"form.certificateType == 'chinaId'"}],attrs:{prop:"chChinaId"}},[r("el-input",{attrs:{placeholder:"个人董事在中国大陆的身份证号码"},model:{value:e.form.chChinaId,callback:function(t){e.$set(e.form,"chChinaId",t)},expression:"form.chChinaId"}})],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"hkId"==e.form.certificateType,expression:"form.certificateType == 'hkId'"}],attrs:{prop:"chHKId"}},[r("el-input",{attrs:{placeholder:"个人董事在香港身份证号码"},model:{value:e.form.chHKId,callback:function(t){e.$set(e.form,"chHKId",t)},expression:"form.chHKId"}})],1),e._v(" "),r("el-row",{directives:[{name:"show",rawName:"v-show",value:"passport"==e.form.certificateType,expression:"form.certificateType == 'passport'"}]},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"護照簽發國家:",prop:"psCountry"}},[r("el-input",{attrs:{placeholder:"護照簽發國家"},model:{value:e.form.psCountry,callback:function(t){e.$set(e.form,"psCountry",t)},expression:"form.psCountry"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"護照號碼:",prop:"psNumber"}},[r("el-input",{attrs:{placeholder:"護照號碼"},model:{value:e.form.psNumber,callback:function(t){e.$set(e.form,"psNumber",t)},expression:"form.psNumber"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"姓名簽署:",prop:"fNameSigned"}},[r("el-input",{attrs:{placeholder:"姓名簽署"},model:{value:e.form.fNameSigned,callback:function(t){e.$set(e.form,"fNameSigned",t)},expression:"form.fNameSigned"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"簽署日期:",prop:"fDateSigned"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy"},model:{value:e.form.fDateSigned,callback:function(t){e.$set(e.form,"fDateSigned",t)},expression:"form.fDateSigned"}})],1)],1)],1)],1)],1),e._v(" "),r("el-row",{staticClass:"btn-row"},[r("el-button",{directives:[{name:"show",rawName:"v-show",value:0!==e.active,expression:"active !== 0"}],on:{click:e.prePage}},[e._v("上一步")]),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:3!==e.active,expression:"active !== 3"}],on:{click:e.nextPage}},[e._v("下一步")]),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:3==e.active,expression:"active == 3"}],on:{click:e.nextPage}},[e._v("提交")])],1)],1)},staticRenderFns:[]};var W=r("VU/8")(G,j,!1,function(e){r("MFzA")},"data-v-21314c26",null).exports,J={data:function(){return{active:0,forthStatus:"wait",form:{cNumber:"",cNameEn:"",cNameCn:"",chNameCn:"",chSureName:"",chOtherName:"",chChinaId:"",leaveDate:"",sUName:D,sUAddr:O,sUPhone:F,sUFax:P,sUEmail:T,wNameCn:"",wSureName:"",wOtherName:"",wAddr:"",wCountry:"",wChinaId:"",wDate:"",signDate:""},rules:{cNumber:[{required:!0,message:"输入公司编号"}],cNameEn:[{required:!0,message:"输入公司英文名稱"}],cNameCn:[{required:!0,message:"请输入公司中文名稱"}],chNameCn:[{required:!0,message:"请输入中文姓名"}],chSureName:[{required:!0,message:"请输入英文姓式"}],chOtherName:[{required:!0,message:"请输入英文名字"}],chChinaId:[{required:!0,message:"请输入中国大陆身份证明"}],leaveDate:[{required:!0,message:"请输入选择停任日期"}],sUName:[{required:!0,message:"请输入提交人名稱"}],sUAddr:[{required:!0,message:"请输入提交人地址"}],sUPhone:[{required:!0,message:"请输入提交人電話"}],sUFax:[{required:!0,message:"请输入提交人傳真"}],sUEmail:[{required:!0,message:"请输入提交人電郵"}],wNameCn:[{required:!0,message:"请输入中文姓名"}],wSureName:[{required:!0,message:"请输入英文姓式"}],wOtherName:[{required:!0,message:"请输入英文名字"}],wAddr:[{required:!0,message:"请输入联络地址或证件地址"}],wCountry:[{required:!0,message:"请输入國家／地區"}],wChinaId:[{required:!0,message:"请输入中国大陆身份证明"}],wDate:[{required:!0,message:"请输入委任日期"}],signDate:[{required:!0,message:"请输入簽署日期"}]},submitUser:{userInfo:"defaultUser"}}},methods:{changeSubmitUser:function(e){this.form="selfUser"==e?q()({},this.form,{sUName:"",sUAddr:"",sUPhone:"",sUFax:"",sUEmail:""}):q()({},this.form,{sUName:D,sUAddr:O,sUPhone:F,sUFax:P,sUEmail:T})},prePage:function(){this.active>0&&(this.active=this.active-1),this.forthStatus="wait"},nextPage:function(){var e=this;this.$refs[{0:"formPage0",1:"formPage1",2:"formPage2"}[this.active]].validate(function(t){if(!t)return!1;if(e.active<2)e.active=e.active+1;else{var r=I()({},e.form);console.log(r),r.leaveY=r.leaveDate.split("/")[2],r.leaveM=r.leaveDate.split("/")[1],r.leaveD=r.leaveDate.split("/")[0],r.wYY=r.wDate.split("/")[2],r.wMM=r.wDate.split("/")[1],r.wDD=r.wDate.split("/")[0],e.produceWord("ND2A",r)}})},produceWord:function(e,t){var r=this;v({docxName:e,docxParams:t}).then(function(){r.forthStatus="success";var t="/output/"+e,a=e+".docx";r.$alert("<a href="+t+" download="+a+">"+a+"</a>","WORD 下载，点击下载",{dangerouslyUseHTMLString:!0})}).catch(function(e){e.code;var t=e.msg;r.$message({message:t,type:"error",duration:2e3})})}}},V={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[r("el-step",{attrs:{title:"公司秘書／董事的停任"}}),e._v(" "),r("el-step",{attrs:{title:"提交人的资料"}}),e._v(" "),r("el-step",{attrs:{title:"委任公司秘書／董事",status:e.forthStatus}})],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active == 0"}],ref:"formPage0",staticClass:"ncc1-page",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[r("el-row",{staticClass:"nnc1-module-title"},[e._v("A.公司秘書／董事的停任 Cessation to Act as Company Secretary／Director")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-form-item",{attrs:{label:"公司編號:",prop:"cNumber"}},[r("el-input",{attrs:{placeholder:"输入公司编号"},model:{value:e.form.cNumber,callback:function(t){e.$set(e.form,"cNumber",t)},expression:"form.cNumber"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"公司英文名稱:",prop:"cNameEn"}},[r("el-input",{attrs:{placeholder:"公司英文名称只能由字母以及符号和空格组成并以 LIMITED 结尾"},model:{value:e.form.cNameEn,callback:function(t){e.$set(e.form,"cNameEn",t)},expression:"form.cNameEn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"公司中文名稱:",prop:"cNameCn"}},[r("el-input",{attrs:{placeholder:"公司中文名称只能由数字或中文汉字以及符号与空格并以有限公司结尾"},model:{value:e.form.cNameCn,callback:function(t){e.$set(e.form,"cNameCn",t)},expression:"form.cNameCn"}})],1)],1),e._v(" "),r("el-row",{staticClass:"nnc1-module-title"},[e._v("B.公司秘書／董事的詳情 (自然人) Particulars of Company Secretary／Director")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"中文姓名:",prop:"chNameCn"}},[r("el-input",{attrs:{placeholder:"中文姓名"},model:{value:e.form.chNameCn,callback:function(t){e.$set(e.form,"chNameCn",t)},expression:"form.chNameCn"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"英文姓名:",prop:"chSureName"}},[r("el-input",{attrs:{placeholder:"英文姓式"},model:{value:e.form.chSureName,callback:function(t){e.$set(e.form,"chSureName",t)},expression:"form.chSureName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"英文姓名:",prop:"chOtherName"}},[r("el-input",{attrs:{placeholder:"英文名字"},model:{value:e.form.chOtherName,callback:function(t){e.$set(e.form,"chOtherName",t)},expression:"form.chOtherName"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"大陆身份证明ID:",prop:"chChinaId"}},[r("el-input",{attrs:{placeholder:"中国大陆身份证明"},model:{value:e.form.chChinaId,callback:function(t){e.$set(e.form,"chChinaId",t)},expression:"form.chChinaId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"停任日期:",prop:"leaveDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy"},model:{value:e.form.leaveDate,callback:function(t){e.$set(e.form,"leaveDate",t)},expression:"form.leaveDate"}})],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active == 1"}],ref:"formPage1",staticClass:"ncc1-page",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[r("el-row",{staticClass:"nnc1-module-title"},[e._v("提交人的资料　Presentor’s Reference")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-form-item",{attrs:{label:"提交人信息"}},[r("el-radio-group",{on:{change:e.changeSubmitUser},model:{value:e.submitUser.userInfo,callback:function(t){e.$set(e.submitUser,"userInfo",t)},expression:"submitUser.userInfo"}},[r("el-radio",{attrs:{label:"defaultUser"}},[e._v("默认")]),e._v(" "),r("el-radio",{attrs:{label:"selfUser"}},[e._v("自定义")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"提交人名稱:",prop:"sUName"}},[r("el-input",{attrs:{placeholder:"提交人的中文名称"},model:{value:e.form.sUName,callback:function(t){e.$set(e.form,"sUName",t)},expression:"form.sUName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"提交人地址:",prop:"sUAddr"}},[r("el-input",{attrs:{placeholder:"提交人的地址"},model:{value:e.form.sUAddr,callback:function(t){e.$set(e.form,"sUAddr",t)},expression:"form.sUAddr"}})],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"提交人電話:",prop:"sUPhone"}},[r("el-input",{attrs:{placeholder:"提交人電話"},model:{value:e.form.sUPhone,callback:function(t){e.$set(e.form,"sUPhone",t)},expression:"form.sUPhone"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"提交人傳真:",prop:"sUFax"}},[r("el-input",{attrs:{placeholder:"提交人傳真"},model:{value:e.form.sUFax,callback:function(t){e.$set(e.form,"sUFax",t)},expression:"form.sUFax"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"提交人電郵:",prop:"sUEmail"}},[r("el-input",{attrs:{placeholder:"提交人電郵",type:"email"},model:{value:e.form.sUEmail,callback:function(t){e.$set(e.form,"sUEmail",t)},expression:"form.sUEmail"}})],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active == 2"}],ref:"formPage2",staticClass:"ncc1-page",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[r("el-row",{staticClass:"nnc1-module-title"},[e._v("委任公司秘書／董事　Appointment of Company Secretary／Director")]),e._v(" "),r("el-row",{staticClass:"form-item-container"},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"中文姓名:",prop:"wNameCn"}},[r("el-input",{attrs:{placeholder:"中文姓名"},model:{value:e.form.wNameCn,callback:function(t){e.$set(e.form,"wNameCn",t)},expression:"form.wNameCn"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"英文姓名:",prop:"wSureName"}},[r("el-input",{attrs:{placeholder:"英文姓式"},model:{value:e.form.wSureName,callback:function(t){e.$set(e.form,"wSureName",t)},expression:"form.wSureName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"英文姓名:",prop:"wOtherName"}},[r("el-input",{attrs:{placeholder:"英文名字"},model:{value:e.form.wOtherName,callback:function(t){e.$set(e.form,"wOtherName",t)},expression:"form.wOtherName"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"地址:",prop:"wAddr"}},[r("el-input",{attrs:{placeholder:"联络地址或证件地址"},model:{value:e.form.wAddr,callback:function(t){e.$set(e.form,"wAddr",t)},expression:"form.wAddr"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"國家／地區:",prop:"wCountry"}},[r("el-input",{attrs:{placeholder:"國家／地區"},model:{value:e.form.wCountry,callback:function(t){e.$set(e.form,"wCountry",t)},expression:"form.wCountry"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"大陆身份证明ID:",prop:"wChinaId"}},[r("el-input",{attrs:{placeholder:"中国大陆身份证明"},model:{value:e.form.wChinaId,callback:function(t){e.$set(e.form,"wChinaId",t)},expression:"form.wChinaId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"委任日期:",prop:"wDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy"},model:{value:e.form.wDate,callback:function(t){e.$set(e.form,"wDate",t)},expression:"form.wDate"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"簽署日期:",prop:"signDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy"},model:{value:e.form.signDate,callback:function(t){e.$set(e.form,"signDate",t)},expression:"form.signDate"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"btn-row"},[r("el-button",{directives:[{name:"show",rawName:"v-show",value:0!==e.active,expression:"active !== 0"}],on:{click:e.prePage}},[e._v("上一步")]),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:2!==e.active,expression:"active !== 2"}],on:{click:e.nextPage}},[e._v("下一步")]),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active == 2"}],on:{click:e.nextPage}},[e._v("提交")])],1)],1)},staticRenderFns:[]};var X=r("VU/8")(J,V,!1,function(e){r("9Xjz")},"data-v-f2dce3bc",null).exports,B={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contianer"},[r("div",{staticClass:"exception"},[e._m(0),e._v(" "),r("div",{staticClass:"exception-content"},[r("h1",[e._v("404")]),e._v(" "),r("div",{staticClass:"desc"},[e._v("抱歉，你访问的页面不存在")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.backHome()}}},[e._v("返回首页")])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"img-block"},[t("div",{staticClass:"img-404"})])}]};var Q=r("VU/8")({methods:{backHome:function(){this.$router.push({path:"/nnc1"})}}},B,!1,function(e){r("jwlO")},"data-v-b34c33d8",null).exports;a.default.use(m.a);var z=new m.a({routes:[{path:"/",redirect:"/login"},{path:"/home",component:k,children:[{path:"/nnc1",component:W},{path:"/nd2a",component:X}]},{path:"/login",component:g},{path:"/404",component:Q},{path:"*",redirect:"/404"}]});a.default.use(s.a),a.default.config.productionTip=!1,a.default.use(l.a),z.beforeEach(function(e,t,r){localStorage.getItem("OUJI_INFO")?r():"/login"!==e.path?r("/login"):r()}),new a.default({el:"#app",router:z,render:function(e){return e(i)}})},QQGE:function(e,t){},jwlO:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a8109c72a6c879f538f5.js.map