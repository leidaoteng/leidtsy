<template>
    <div class="app-login">
        <div class="header">
            <div><a href="#" class="logo"><img src="../../static/img/logo.png" alt=""></a></div> 
            <div class="bind-phone">
                <div class="kong"></div>
                <div class="intro">为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！</div>
                <div class="sug">
                    <i class="el-icon-edit-outline"></i>
                    <a href="#">我想对"登录"提意见</a>
                </div>
            </div>
        </div>
        <div class="main">
        <div class="login-form"  @keyup.13="signin">
            <a href="#" class="table-item"><span>扫码登录</span></a>
                <!-- <img class="erwei"src="https://passport.suning.com/ids/qrLoginUuidGenerate.htm?image=true&yys=1543734696315" alt=""> -->
            <a href="#" class="table-item"><span>账户登录</span></a>
            <div class="login-blank">
                <span v-show="promptMsg" class="prompt"><i class="el-icon-error"></i>{{promptMsg}}</span>
            </div>
            <div class="input-box">     
                <div class="uname-box">
                    <img src="../assets/img/yh.jpg" alt="">
                    <input id="uname" type="text" placeholder="用户名/手机/邮箱/门店会员卡号" name="uname" @blur="unamePmt" v-model="uname">     
                </div>
                <div class="upwd-box">
                    <img src="../assets/img/mm.jpg" alt="">
                    <input id="upwd" type="password" placeholder="请输入密码" name="upwd" @blur="upwdPmt" v-model="upwd">     
                </div>
            </div>
            <div class="login-blank"></div>
            <div class="login-help">
                <img src="../assets/img/yh.jpg" alt="">
                <a href="#">账户密码登录</a>
                <a href="#">忘记密码?</a>
            </div>
            <div class="login-sub"><a href="#" id="login" @click.stop.prevent="signin">登录</a></div> 
            <div class="free"><a href="#">免费注册有惊喜></a></div>
            <p class="line-intro">————————使用以下账户登录————————</p>
            <div class="bind-login">
                <img src="../assets/img/qq.jpg" alt=""><a href="#">QQ</a><span>|</span>
                <img src="../assets/img/wx.jpg" alt=""><a href="#">微信</a><span>|</span>
                <img src="../assets/img/yi.jpg" alt=""><a href="#">易付宝</a><span>|</span>
                <img src="../assets/img/wb.jpg" alt=""><a href="#">微博</a><span>|</span>
                <a href="#">门店会员卡</a>
            </div>
        </div>
        </div>
        <div class="footer-com">
            <div class="url-list">
                <p>
                    <a href="#">苏宁互联</a><span>|</span>
                    <a href="#">苏宁金融</a><span>|</span>
                    <a href="#">苏宁支付</a><span>|</span>
                    <a href="#">PP视频</a><span>|</span>
                    <a href="#">红孩子</a><span>|</span>
                    <a href="#">苏宁物流</a><span>|</span>
                    <a href="#">手机苏宁</a><span>|</span>
                    <a href="#">零售云</a><span>|</span>
                    <a href="#">苏宁云</a><span>|</span>
                    <a href="#">知识产权举报</a><span>|</span>
                    <a href="#">投资者关系</a>
                </p>      
            </div>
            <div class="url-list">
                    <p>
                    <a href="#">联系我们</a><span>|</span>
                    <a href="#">诚聘英才</a><span>|</span>
                    <a href="#">供应商入驻</a><span>|</span>
                    <a href="#">广告平台</a><span>|</span>
                    <a href="#">苏宁联盟</a><span>|</span>
                    <a href="#">苏宁招标</a><span>|</span>
                    <a href="#">友情链接</a><span>|</span>
                    <a href="#">隐私声明</a><span>|</span>
                    <a href="#">用户体验提升计划</a><span>|</span>
                    <a href="#">股东会员认证</a>
                </p>      
                </div>
                <div class="copy-right">
                    <a href="#">Copyright© 2002-2018，苏宁易购集团股份有限公司版权所有</a><span>|</span>
                    <a href="#"><i></i>苏公网安备 32010202010078号</a><span>|</span>
                    <a href="#">苏ICP备10207551号-4</a><span>|</span>
                    <a href="#">苏B1-20130131</a>
                </div>
                <div class="copy-right">
                    <a href="#">苏B2-20130376</a><span>|</span>
                    <a href="#">苏B2-20130391</a><span>|</span>
                    <a href="#">出版物经营许可证新出发苏批字第A-243号</a><span>|</span>
                    <a href="#"> 互联网药品信息服务资格证书</a>
                    <a href="#">（苏）-非经营性-2016-0005</a>
                    <p><a href="#">本网站直接或间接向消费者推销商品或者服务的商业宣传均属于“广告”（包装及参数、售后保障等商品信息除外）</a></p>
                </div>
                <div class="footer-img">
                    <a href="#"><img src="//res.suning.cn/public/v3/images/chengxin.png" alt=""></a>
                    <a href="#"><img src="//res.suning.cn/public/v3/images/unicom.png" alt=""></a>
                    <a href="#"><img src="//res.suning.cn/public/v3/images/dianxin.jpg" alt=""></a>
                    <a href="#"><img src="//res.suning.cn/public/v3/images/dianzi.png?v=02" alt=""></a>
                </div>
        </div>
    </div>
</template>
<script>
import qs from "qs"
import Footer from "../components/Footer.vue"
export default{
    data(){
        return {
            promptMsg:false,
            uname:"tom",
            upwd:123456
        }
    },
    methods:{
        unamePmt(){
            if(!this.uname)
           this.promptMsg="请输入用户名/邮箱/手机号！"
        },
        upwdPmt(){
            if(!this.upwd)
            this.promptMsg="请输入6-20位密码！"
        },
        signin(){ 
           this.axios.post("http://leidtsy.applinzi.com:5050/users/signin",qs.stringify({
               uname:this.uname,
               upwd:this.upwd
           })).then(res=>{
               if(res.data.code==1){
                   this.$router.push("/home")
               }else{
                this.promptMsg="用户名或密码错误"
               }
           })
        }
    },
}
</script>
<style scoped>
.app-login .header{
        width: 970px;
        height: 0;
        margin:0 auto;
}
.app-login .header .logo img{
    display: block; 
    float: left;
    width: 189px;
    height: 100px;
}
.app-login .header .bind-phone .kong{
    width: 785px;
    height: 37px;
}
.app-login .header .bind-phone .intro{
    width: 790px;
    height: 24px;
    line-height: 30px;
    color:#333;
    border:1px solid #fecd66;
    margin-left: 200px;
    font:12px/1.5 arial,tahoma,\5b8b\4f53;
}
.app-login .header .bind-phone .sug{
    text-align: right;
    margin-top: 10px;
}
.app-login .header .bind-phone .sug a{
    text-decoration: none;
    color:#333;
    line-height: 18px;
    font:12px/1.5 arial,tahoma,\5b8b\4f53;
    margin-left: 8px;
}
.app-login .main{
    clear:both;
    width: 100%;
    height: 570px;
    position:relative;
    background:url(https://image.suning.cn/uimg/cms/img/154297665881380030.jpg) center no-repeat;
}
.app-login .login-form{
    width: 360px;
    height: 410px;
    background: #fff;
    position:absolute;
    left:800px;
    top:60px;
}
.app-login .login-form .table-item{
    display: block;
    width: 180px;
    height: 50px;
    float: left;
    text-decoration: none;
    border-bottom: 1px solid rgb(201, 200, 200);
}
.app-login .login-form .table-item span:hover{color:#f60;}
.app-login .login-form .table-item span{
    display: block; 
    width: 180px;
    height: 20px;
    margin-top: 20px;
    color:#000;
}
.app-login .login-form .login-blank{
    clear:both;
    width: 312px;
    height:24px;
    text-align: center;
    padding-top: 10px;
    padding-left: 8px;
}
.app-login .login-form .login-blank .prompt{
    display: inline-block;
    width: 300px;
    line-height: 24px;
    text-align: left;
    padding-left:5px;
    margin-left: 20px;
    color:#333;
    font-size:12px;
    background: rgb(255, 220, 220);
    border:1px solid rgb(243, 94, 35);
    /* display: none; */
}
.app-login .login-form .login-blank .prompt i.el-icon-error{
    color:red;
    margin-right: 10px;
}
.app-login .login-form .input-box img{
    width: 18px;
    height: 18px;
    float: left;
    position:relative;
    left:5px;
    top:25px;
    line-height: 36;
}
.app-login .login-form .input-box .upwd-box img{
    position:relative;
    left:5px;
    top:35px;
} 
.app-login .login-form .input-box .uname-box,.input-box .upwd-box{
    width: 310px;
    height: 36px;
    margin: auto;
}
.app-login .login-form .upwd-box{
    margin-top: 10px;
}
input::-webkit-input-placeholder{
   color:#999;
}
input::-moz-placeholder{ 
    color:#999;
}
input:-moz-placeholder{   
    color:#999;
}
input:-ms-input-placeholder{  
    color:#999;
}
input:focus::placeholder{
    color: transparent;
}
#uname,#upwd{
    width: 100%;
    height: 36px;
    border:1px solid rgb(201, 200, 200);
    color:#000;
    font-size:14px;
    padding-left: 30px;
}
#upwd{
    margin-top: 10px;
}
.app-login .login-form .login-help{
    position:relative;
    width: 315px;
    height: 35px;
    margin:auto;
    margin-top: 20px;
    text-align: left;
    padding-left: 30px;
    display: flex;
    justify-content: space-between;
}
.app-login .login-form .login-help img{
    width: 16px;
    height: 16px;
    position: absolute;
    left: 14px;
    top: 7px;
}
.app-login .login-form .login-help a,.free a{
    color:rgb(85, 84, 84);
    font-size:12px;
    text-decoration: none;
    line-height: 35px;
    text-align:left;
    padding: 0 8px;
}
.app-login .login-form  .free a:hover{color:#f60;}
.app-login .login-form .login-help a:hover{color:#f60;}
.app-login .login-form .login-sub{
    width: 310px;
    height: 40px;
    background: #f60;
    margin: auto;
}
#login{
    display: block;
    width: 310px;
    height: 40px;
    line-height: 40px;
    list-style: none;
    color:#fff;
    font-size:20px;
    font-weight: 700;
    border-radius: 2px;
}
.app-login .login-form .line-intro{
    color:#999;
    font-size:12px;
    margin: 20px 5px;
}
.app-login .login-form .bind-login img{
    width: 16px;
    height: 16px;
}
.app-login .login-form .bind-login a{
    text-decoration: none;
    color:#666;
    font-size:12px;
}
.app-login .login-form .bind-login span{
    /* color:#666; */
    margin: 0 8px;
}
.app-login .footer-com a{
    color:#666;
    font:12px/1.5 "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    text-decoration: none;
}
.app-login .footer-com  span{
    margin: 0 4px;
}
.app-login .footer-com p{
   margin-bottom: 0;
}
.app-login .footer-com .copy-right a{
    color:#999;
}
.app-login div span{
    color:rgb(180, 179, 179);
}
</style>