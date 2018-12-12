<template>
    <div class="home-details">
        <div class="layout-list">
            <div class="vendor">
                <img src="../assets/img/apple.png" alt="">
            </div>
            <div class="navs">
                <div class="s-left">
                    <span>本店全部产品</span>
                </div>
                <div class="cate">
                    <ul>
                        <li><a href="#">首页</a></li>
                        <li><a href="#">Mac</a></li>
                        <li><a href="#">iPad</a></li>
                        <li><a href="#">iPhone</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">Beats</a></li>
                        <li><a href="#">配件</a></li>
                        <li><a href="#">客户服务</a></li>
                        <li><a href="#">关于我们</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bread-crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>手机/数码/配件</el-breadcrumb-item>
                <el-breadcrumb-item>手机通讯</el-breadcrumb-item>
                <el-breadcrumb-item>手机</el-breadcrumb-item>
                <el-breadcrumb-item>Apple <i class="el-icon-caret-bottom"></i></el-breadcrumb-item>
                <el-breadcrumb-item>Apple iPhoneX手机</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="service">
                <span>自营</span><span>Apple产品苏宁自营店</span><i class="el-icon-service"></i><span>联系客服</span>
            </div>
        </div>
        <div class="wrapper-container">
            <div class="info-container">
                <div class="info-left">
                    <div class="imgZoom">
                        <!-- 中图片 -->
                        <img  class="md-img" :src="mdImg" />
                        <!-- 半透明遮罩层 -->
                        <div id="mask" v-show="isShow" :style="mPosition"></div>
                        <!-- 透明玻璃板 -->
                        <div id="super-mask" 
                        @mouseenter="handleEnter" 
                        @mouseleave="handleLeave"
                        @mousemove="handleMove"
                        ></div>
                        <!-- 大图片 -->
                        <div id="div-lg" :style="lgImg" v-show="isShow"></div>
                        <div class="pic-list">
                            <ul id="small-img" @click.stop.prevent="smallChange" >
                                <li v-for="item in picList">
                                    <img  
                                    :src="'http://leidtsy.applinzi.com/img/apple/sm/'+item.sm"
                                    :data-md="'http://leidtsy.applinzi.com/img/apple/md/'+item.md"
                                    :data-lg="'http://leidtsy.applinzi.com/img/apple/lg/'+item.lg"
                                    alt="" />
                                </li>
                            </ul>                       
                        </div>   
                        <img src="" alt="">
                    </div>
                    <div class="img-zoom-thumb">
                        <i class="el-icon-sort"></i><span>对比</span>
                        <i class="el-icon-share"></i><span>分享</span>
                        <i class="el-icon-star-on"></i><span>收藏</span>
                        <i class="el-icon-tickets"></i><span>有奖调查</span>
                    </div>
                </div>
                <div class="info-right">
                    <h1 class="title">
                        <span>自营</span>{{title}}
                    </h1>
                    <div class="sub-title">
                        {{subtitle}}
                        <a href="#">限量领券减450</a><br>
                        {{flow}}
                        <a href="#">点击抢购</a>
                    </div>
                    <img  class="banner"src="//image.suning.cn/uimg/pcms/label02/141420618045576072410700_04.png" alt="">
                    <div class="info-price">
                        <ul>
                            <li class="intro-item">参考价</li>
                            <li class="old-price">￥{{oldprice}}</li>
                        </ul>
                        <ul>
                            <li class="intro-item">活动价</li>
                            <li><span class="cny">￥</span><span class="new-price">{{price}}</span><span class="zero">.00</span>
                            <span class="vip">加入会员返云钻，下单立返约139.98元<a href="#">立即开通></a></span>
                            </li>
                        </ul>
                        <ul>
                            <li class="intro-item">优惠券</li>
                            <li><span>{{coupon}}</span><a href="#">立即去刮奖></a></li>
                        </ul>
                        <ul>
                            <li class="intro-item">促   销</li>
                            <li>
                                <span class="youli">实名有礼</span><span>实名认证领苏宁优惠券</span><a href="#">登录后查看></a><br>
                                <span  class="youli">云钻</span><span>{{sales}}</span>
                            </li>
                        </ul>
                        <ul>
                            <li class="intro-item">任性付</li>
                            <li class="divide">
                                <span>￥2402.99*3期</span>
                                <span>￥1232.99*6期</span>
                                <span>￥649.74*12期</span>
                                <span>￥361.61*24期</span>
                            </li>
                        </ul>
                         <ul>
                            <li class="intro-item">数量</li>
                            <li class="qty">
                                <span>
                                    <button>-</button>
                                    <input type="text" value="1">
                                    <button>+</button>
                                </span>
                            </li>
                        </ul>
                        <div class="clear"></div>
                    </div>
                    <div class="mainbtn">
                        <a  class="buy" href="#">立即购买</a><a  class="cart" href="#"><i></i>加入购物车</a>
                    </div>
                </div>
            </div>
            <div class="list-box">
                <ul class="select-content">
                    <li class="select-item"><a href="#">看了又看</a></li>
                    <li class="select-item"><a href="#">热门推荐</a></li>
                    <li class="select-item"><a href="#">推荐搭配</a></li>
                </ul>
                <div class="middle-list">
                    <ul>
                        <li><a href="#">
                            <img src="//imgservice.suning.cn/uimg1/b2c/image/IjPVS5mcttNdNadUngnnnA.jpg_160w_160h_4e" alt="">
                            <p class="price"><i>￥</i><em>6999</em><span>.00</span><label>苏宁自营</label></p>
                            <p class="title"><a href="#">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</a></p>
                            <span class="juhui">大聚惠</span>
                        </a></li>
                        <li><a href="#">
                            <img src="//imgservice.suning.cn/uimg1/b2c/image/IjPVS5mcttNdNadUngnnnA.jpg_160w_160h_4e" alt="">
                            <p class="price"><i>￥</i><em>6999</em><span>.00</span><label>苏宁自营</label></p>
                            <p class="title"><a href="#">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</a></p>
                        </a></li>
                        <li><a href="#">
                            <img src="//imgservice.suning.cn/uimg1/b2c/image/IjPVS5mcttNdNadUngnnnA.jpg_160w_160h_4e" alt="">
                            <p class="price"><i>￥</i><em>6999</em><span>.00</span><label>苏宁自营</label></p>
                            <p class="title"><a href="#">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</a></p>
                        </a></li>
                        <li><a href="#">
                            <img src="//imgservice.suning.cn/uimg1/b2c/image/IjPVS5mcttNdNadUngnnnA.jpg_160w_160h_4e" alt="">
                            <p class="price"><i>￥</i><em>6999</em><span>.00</span><label>苏宁自营</label></p>
                            <p class="title"><a href="#">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</a></p>
                            <span class="juhui">大聚惠</span>
                        </a></li>
                        <li><a href="#">
                            <img src="//imgservice.suning.cn/uimg1/b2c/image/IjPVS5mcttNdNadUngnnnA.jpg_160w_160h_4e" alt="">
                            <p class="price"><i>￥</i><em>6999</em><span>.00</span><label>苏宁自营</label></p>
                            <p class="title"><a href="#">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</a></p>
                            <span class="juhui">大聚惠</span>
                        </a></li>
                    </ul>
                </div>  
            </div>
            <div class="middle-img">
                <img src="//image3.suning.cn/uimg/cms/img/154356811342184237.jpg" alt="">
            </div>
            <div class="wrapper">
                <div class="procon-side">
                    <div class="si-intro">
                        <div class="si-intro-head"><span>———</span><i class="el-icon-tickets"></i>苏宁自营<span>———</span></div>
                        <div class="si-intro-list">
                             <dl>
                                 <dt>商家:</dt>
                                 <dd>Apple产品苏宁自营店</dd>
                             </dl>
                             <dl>
                                 <dt>联系:</dt>
                                 <dd><i class="el-icon-bell" style="color:#f60"></i>联系客服</dd>
                             </dl>
                        </div>
                        <div class="si-intro-trend">
                            <ul>
                                <li>
                                    <p><span>商品</span></p>
                                    <p class="up"><em id="gSatisfy">4.92</em><i>↑</i></p>
                                </li>
                                <li>
                                    <p><span>服务</span></p>
                                    <p class="up"><em id="sSatisfy">4.96</em><i>↑</i></p>
                                </li>
                                <li>
                                    <p><span>物流</span></p>
                                    <p class="up"><em id="dSatisfy">4.90</em><i>↑</i></p>
                                </li>
                            </ul>
                        </div>
                        <div class="si-intro-handle">
                            <a href="#">进入店铺</a>
                        </div>
                    </div>
                    <div class="view-content">
                        <div class="area-head">
                            <h3>看了最终买</h3>
                            <ul>
                                <li><a href="#">
                                    <img src="//imgservice.suning.cn/uimg1/b2c/image/oIdMW7yjG7-EoVfEJgz-Fw.jpg_120w_120h_4e" alt="">
                                    <p class="title">
                                        <span class="benefit">自营</span><span class="sub-title">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</span>
                                    </p>
                                    <p >
                                        <span class="price">￥6999.00</span><span class="benefit">大聚惠</span>
                                    </p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice.suning.cn/uimg1/b2c/image/oIdMW7yjG7-EoVfEJgz-Fw.jpg_120w_120h_4e" alt="">
                                    <p class="title">
                                        <span class="benefit">自营</span><span class="sub-title">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</span>
                                    </p>
                                    <p >
                                        <span class="price">￥6999.00</span>
                                    </p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice.suning.cn/uimg1/b2c/image/oIdMW7yjG7-EoVfEJgz-Fw.jpg_120w_120h_4e" alt="">
                                    <p class="title">
                                        <span class="benefit">自营</span><span class="sub-title">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</span>
                                    </p>
                                    <p >
                                        <span class="price">￥6999.00</span><span class="benefit">大聚惠</span>
                                    </p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice.suning.cn/uimg1/b2c/image/oIdMW7yjG7-EoVfEJgz-Fw.jpg_120w_120h_4e" alt="">
                                    <p class="title">
                                        <span class="benefit">自营</span><span class="sub-title">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</span>
                                    </p>
                                    <p >
                                        <span class="price">￥6999.00</span>
                                    </p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice.suning.cn/uimg1/b2c/image/oIdMW7yjG7-EoVfEJgz-Fw.jpg_120w_120h_4e" alt="">
                                    <p class="title">
                                        <span class="benefit">自营</span><span class="sub-title">【领券立减】Apple iPhone X 64GB 银色 移动联通电信4G手机</span>
                                    </p>
                                    <p >
                                        <span class="price">￥6999.00</span><span class="benefit">大聚惠</span>
                                    </p>
                                </a></li>
                                
                            </ul>
                        </div>
                        
                    </div>   
                </div>
                <div class="product-detail">
                    <div class="product-detail-tab">
                        <ul>
                            <li><a href="#">商品详情</a></li>
                            <li><a href="#">包装及参数</a></li>
                            <li><a href="#">参数(21万+)</a></li>
                            <li><a href="#">问问已购用户</a></li>
                            <li><a href="#">售后保障</a></li>
                        </ul>
                        <div class="region">
                            <span>扫一扫购买</span><i class="el-icon-arrow-down"></i>
                            <div class="erwei">
                                <img src="../assets/img/erweicode.jpg" alt="">
                            </div>  
                        </div>
                    </div>
                    <div class="ccc-auth">
                        <i class="el-icon-edit"></i> <span>商品获得</span> <a href="#">中国强制性产品认证（CCC）证书</a><span>符合国家强制性产品认证（CCC）标准</span>
                    </div>
                    <div class="desc">
                        <img src="https://image.suning.cn/uimg/sop/commodity/119736138525745427559146_x.jpg" alt="">
                        <img src="https://image.suning.cn/uimg/sop/commodity/112794160886290129279490_x.jpg" alt="">
                        <img src="https://image.suning.cn/uimg/sop/commodity/213287247648868791262800_x.jpg" alt="">
                        <img src="https://image.suning.cn/uimg/sop/commodity/742303264420020864606900_x.jpg" alt="">
                        <img src="https://image.suning.cn/uimg/sop/commodity/113052099496193184167260_x.jpg" alt="">
                        <img src="https://image.suning.cn/uimg/sop/commodity/119260031069388553257000_x.jpg" alt="">
                        <img src="https://image.suning.cn/uimg/sop/commodity/703178109185226972578070_x.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery"
export default{
    data(){return {
        mdImg:"",
        lgImg:"",
        id:this.$route.params.lid,
        title:"",
        subtitle:"",
        price:0,
        coupon:"",
        flow:"",
        sales:"",
        oldprice:0,
        picList:[],
        isShow:false,
        mPosition:{left:0,top:0}
    }},
    methods:{
        smallChange(e){
            if(e.target.nodeName==="IMG")
            this.mdImg=e.target.dataset.md
            var lgSrc=e.target.dataset.lg
            this.lgImg=`background-image:url(${lgSrc})`
        },
        handleEnter(){
            this.isShow=true 
        },
        handleLeave(){
            this.isShow=false
        },
        handleMove(e){
           var mSize=160;
           var Max=448-mSize;//top,left 最大值
           var left=e.offsetX-mSize/2;
           var top=e.offsetY-mSize/2;
           if(left<0) left=0;
           else if(left>Max) left=Max;
           if(top<0) top=0;
           else if(top>Max) top=Max;
           this.mPosition={left:left+"px",top:top+"px"};
           $("#div-lg").css("background-position",`-${left}px -${top}px`)
        }
    },
    mounted(){
        var url=`http://leidtsy.applinzi.com:5050/details/pro_details?lid=${this.id}`;
        this.axios.get(url).then(res=>{
           var res=res.data
           this.price=res.price.price
           this.title=res.info.title
           this.subtitle=res.info.subtitle
           this.flow=res.info.flow
           this.coupon=res.info.coupon
           this.oldprice=res.info.oldprice
           this.sales=res.info.sales
           this.picList=res.pics
           this.lgImg=`background-image:url(http://leidtsy.applinzi.com/img/apple/lg/${this.picList[0].lg})`
           this.mdImg=`http://leidtsy.applinzi.com/img/apple/md/${this.picList[0].md}`
      })
    }
}
</script>
<style scoped>
*{margin: 0;padding: 0;list-style: none;text-decoration: none;}
.home-details .layout-list{
    width:100%;
    height: 160px;
    background: rgb(245, 242, 242);
    margin: auto;
}
.home-details .layout-list .vendor{
    width: 1100px;
    height: 120px;
    margin: auto;
}
.home-details .layout-list .vendor img{
    display: block;
    position:relative;
    top:-10px;
    left: -30px;
}
.home-details .layout-list .navs{
    width: 100%;
    height: 40px;
    background: #666;
}
.home-details .layout-list .navs .s-left span{
    display: block;
    float: left;
    width: 200px;
    height: 40px;
    font-size:14px;
    line-height: 40px;
    margin-left: 100px;
    color:#fff;
}
.home-details .layout-list .navs .cate{
    width: 900px;
    height: 40px;
    float: left;
}
.home-details .layout-list .navs .cate ul li{
    float: left;
    height: 40px;
    margin-right: 50px;
    line-height: 40px;
}
.home-details .layout-list .navs .cate ul li a{
    color:#fff;
    font-size:14px;
}
.home-details .bread-crumb{
    width: 100%;
    height: 40px;
    font-size:12px;
    background: rgb(235, 232, 232);
    line-height: 40px;
    padding-left: 100px;
    padding-top: 12px;
}
.home-details .bread-crumb .service{
    float:right;
    position:relative;
    top:-25px;
    right:20px;
}
.home-details .bread-crumb .service span:first-child{
    background: #ff6600;
    border-radius: 2px;
    color:#fff;
    padding: 2px;
    margin-right: 10px;
}
.home-details .bread-crumb .service i{
    color:#f60;
    margin:0 10px;
}
.home-details .wrapper-container{
    width: 1200px;
    height: 990px;
    margin: auto;
}
.home-details .wrapper-container .info-left{
    float: left;
    width: 450px;
    height: 570px;
}
.home-details .wrapper-container .info-left .imgZoom{
    width: 448px;
    height: 532px;
    position:relative;
}
#mask{
    width:160px;
    height:160px;
    background: rgba(229, 188, 188,.4);
    position:absolute;
    left: 0;
    top: 0;
}
#super-mask{
    width: 448px;
    height: 448px;
    background: transparent;
    position:absolute;
    left: 0;
    top: 0;
}
#div-lg{
    width: 500px;
    height: 500px;
    position:absolute;
    top: 0;
    left: 448px;
    z-index: 100;
    background: rgba(252, 249, 249, 0.3);
}
.home-details .wrapper-container .info-left .imgZoom img{
    width: 446px;
    height: 446px;
}
.home-details .wrapper-container .info-left .imgZoom .pic-list{
    width: 100%;
    height: 64px;
    overflow: hidden;
}
.home-details .wrapper-container .info-left .imgZoom .pic-list ul{
    width:1000px;
    height: 64px;
    padding-left:20px;
    margin-top: 5px;
    overflow: hidden
}
.home-details .wrapper-container .info-left .imgZoom .pic-list ul li{
    float: left;
    width: 62px;
    height: 62px;
    margin-right:30px;
    /* border:2px solid  transparent; */
    /* border:1px solid #f50; */
}
.home-details .wrapper-container .info-left .imgZoom .pic-list ul li img{
    display: block;
    width: 70px;
    height: 60px;
}
.home-details .wrapper-container .info-left .img-zoom-thumb{
    margin-top: 10px;
    margin-left: 15px;
    text-align: left;
    color:#999;
    font-size: 14px;
}
.home-details .wrapper-container .info-container .info-right{
    float: left;
    width: 710px;
    margin-left: 3px;
}
.home-details .wrapper-container .info-container .info-right h1 span{
    color:#fff;
    background: #f50;
    font-size:12px;
    line-height: 24px;
    padding:1px 3px;
    margin:0 10px 0 15px;
}
.home-details .wrapper-container .info-container .info-right h1{
    width: 710px;
    height: 24px;
    float: left;
    text-align: left;
    color:#222;
    font-weight: bold;
    font-size:16px;
}
.home-details .wrapper-container .info-container .info-right .sub-title{
    clear:both;
    float: left;
    width: 710px;
    height: 36px;
    font-size:14px;
    color:#f60;
    text-align: left;
    margin:10px 15px;
}
.home-details .wrapper-container .info-container .info-right .banner{
    display: block;
    width: 730px;
    height: 40px;
    margin-left: 10px;
}
.home-details .wrapper-container .info-container .info-right .info-price{
    width: 730px;
    margin: 20px 0 0 10px;
    background: rgb(241, 239, 239);
    padding:10px;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li.intro-item{
    clear:both;
    float: left;
    width: 72px;
    height: 18px;
    color:#999;
    font:12px "simsun";
    margin:8px 10px;
    
}
.home-details .wrapper-container .info-container .info-right .info-price ul li:nth-child(2){
    float: left;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li.old-price{
    color:#999;
    font-size:12px;
    margin-top:4px;
    text-decoration: line-through;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li span{
    display: inline-block;
    color:#666;
    font-size:12px;
    margin-right: 10px;
    line-height:24px;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li{
    text-align: left;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li span.new-price{
    height: 28px;
    color:#e00;
    margin-right: 0;
    font:700 30px/25px Tahoma;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li span.zero{
    height: 28px;
    color:#e00;
    font:700 20px Tahoma;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li span.cny{
    height: 28px;
    color:#e00;
    font:700 20px Tahoma;
    margin-right: 0;
}   
.home-details .wrapper-container .info-container .info-right .info-price ul li a{
    text-decoration: none;
    font-size: 12px;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li span.youli{
    border:1px solid #f60;
    color:#f90;
    line-height: 18px;
    padding: 1px 3px;
    margin-right: 10px;
    margin-top: 10px;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li span.vip{
    display:block;
    margin:3px;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li.divide span{
    border:1px solid #999;
    padding: 0 5px;
    margin: 10px 0;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li.qty input{
    width: 35px;
    margin-right: 5px;
}
.home-details .wrapper-container .info-container .info-right .info-price ul li.qty button{
    width: 18px;
    margin-right: 5px;
}
.clear:after{
    display: block;
    content:"";
    clear:both;
}
.home-details .wrapper-container .info-container .info-right  .mainbtn{
    clear:both;
    width: 730px;
    height: 68px;
    text-align:left;
    padding:20px 100px;
    border-bottom: 1px solid rgb(241, 231, 231);
}
.home-details .wrapper-container .info-container .info-right  .buy{
    display: inline-block;
    width: 115px;
    height: 40px;
    line-height: 40px;
    border-radius: 3px;
    color:#fff;
    font-size: 18px;
    margin-right: 20px;
    background: rgb(58, 23, 23);
    text-align: center;
    text-decoration: none;
}
.home-details .wrapper-container .info-container .info-right  .cart{
    display: inline-block;
    width: 125px;
    height: 40px;
    line-height: 40px;
    border-radius: 3px;
    color:#fff;
    font-size: 18px;
    background:#f50;
    text-align: center;
    text-decoration: none;
}   
.home-details .wrapper-container .list-box{
    clear:both;
    width: 1188px;
}
.home-details .wrapper-container .list-box ul.select-content{
    width: 100%;
    height: 34px;
    background: rgb(241, 239, 239);
}
.home-details .wrapper-container .list-box .middle-list{
    width: 100%;
    height: 290px;
    border:1px solid rgb(231, 230, 230);   
}
.home-details .wrapper-container .list-box ul li.select-item{
    float: left;
    width: 106px;
    height: 34px;
}
.home-details .wrapper-container .list-box ul li.select-item a{
    text-decoration: none;
    color:#222;
    font-size:14px;
    line-height: 34px;
}
.home-details .wrapper-container .list-box .middle-list ul{
    width: 1200px;
    height: 260px;
    padding:10px 20px;
    overflow: hidden;
}
.home-details .wrapper-container .list-box .middle-list ul li{
    float: left;
    width: 160px;
    height: 255px;
    margin-right: 30px;
    text-align: left;
}
.home-details .wrapper-container .list-box .middle-list ul li a{text-decoration: none;}
.home-details .wrapper-container .list-box .middle-list ul li img{
    width: 160px;
    height: 160px;
}
.home-details .wrapper-container .list-box .middle-list ul li .price{
    width: 100%;
    height: 18px;
    color:#f60;
    margin-top: 6px;
    line-height: 18px;
}
.home-details .wrapper-container .list-box .middle-list ul li .price i{
    font-style: normal;
    font-size:12px;
}
.home-details .wrapper-container .list-box .middle-list ul li .price span{
    font-weight: bold;
    font-size: 12px;
    font-weight:"Tahoma";
}
.home-details .wrapper-container .list-box .middle-list ul li .price em{
    font-style: normal;
    font-size: 16px;
    font-weight: bold;
    font-family:"Tahoma";
}
.home-details .wrapper-container .list-box .middle-list ul li .price label{
    width: 60px;
    height: 18px;
    font-size: 12px;
    border:1px solid #f60;
   margin-left: 25px;
}
.home-details .wrapper-container .list-box .middle-list ul li p.title{
    width: 100%;
    height: 36px;
    line-height: 18px;
    overflow: hidden;
    margin: 5px 0;
}
.home-details .wrapper-container .list-box .middle-list ul li p.title a{
    text-decoration: none;
    color:#666;
    font-size: 12px;
   
}
.home-details .wrapper-container .list-box .middle-list ul li .juhui{
    background: #f60;
    padding: 2px;
    color:#fff;
    font-size: 12px;
    border-radius: 3px;
}
.home-details .wrapper-container .middle-img{
    margin-left: -10px;
    margin-top: 20px;
}
.home-details .wrapper-container .wrapper{
    width: 100%;
    margin-top: 20px;
}
.home-details .wrapper-container .wrapper .procon-side{
    float: left;
}
.home-details .wrapper-container .wrapper .procon-side .si-intro{
    width: 190px;
    height: 215px;
    border:1px solid #f60;
}
.home-details .wrapper-container .wrapper .procon-side .si-intro .si-intro-head{
    color:#f60;
    font:700 14px/1.5 'Microsoft YaHei';
    margin-top: 10px;
}
.home-details .wrapper-container .wrapper .procon-side .si-intro .si-intro-head span{
    font:14px/1.5 'Microsoft YaHei';
    color:rgb(247, 187, 96); 
    margin: 0 5px;
}
.home-details .wrapper-container .wrapper .procon-side .si-intro .si-intro-list{
    width: 158px;
    height: 59px;
    margin: 10px auto;
    font-size: 12px;
    color:#666;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(230, 230, 230);
}
.home-details .wrapper-container .wrapper .procon-side .si-intro .si-intro-list dt,dd{
    float: left;
    margin-right: 5px;
    margin-top: 5px;
}
.home-details .wrapper-container .wrapper .procon-side .si-intro .si-intro-trend ul li{
    float: left;
    margin:5px 15px;
    color:#666;
    font-size:12px;
}
.home-details .wrapper-container .wrapper .procon-side .si-intro .si-intro-trend ul li em{
    color:#f60;
    font-style: normal;
    font-size:12px;
    margin-right: 3px;
}
.home-details .wrapper-container .wrapper .procon-side .si-intro .si-intro-trend ul li i{
    font-weight: bold;
    color:#f60;
}
.home-details .wrapper-container .wrapper .procon-side .si-intro .si-intro-handle a{
    display: inline-block;
    width: 167px;
    height: 28px;
    border:1px solid #f60;
    color:#f60;
    font-size: 14px;
    margin-top: 15px;
    padding: 5px 50px;
}
.home-details .wrapper-container .wrapper .procon-side  .view-content{
    margin-top: 10px;   
    width: 190px;
    border:1px solid rgb(228, 225, 225);
}
.home-details .wrapper-container .wrapper .procon-side  .view-content h3{
    width: 190px;
    height: 34px;
    line-height: 34px;
    font-size:14px;
    text-align: left;
    padding-left: 10px;
    border-bottom: 1px solid rgb(228, 225, 225);    
}
.home-details .wrapper-container .wrapper .procon-side  .view-content ul li{
    width: 190px;
    height: 204px;
    margin-top: 10px;
}
.home-details .wrapper-container .wrapper .procon-side  .view-content ul li img{
    width: 120px;
    height: 120px;
    margin: 0 24px;
}
.home-details .wrapper-container .wrapper .procon-side  .view-content ul li .benefit{
    background: #f60;
    color:#fff;
    font-size:12px;
    padding: 1px 3px;
    
}
.home-details .wrapper-container .wrapper .procon-side  .view-content ul li .title .sub-title{
    color:#666;
    font-size:12px;
}
.home-details .wrapper-container .wrapper .procon-side  .view-content ul li .price{
    font-size: 12px;
    color:#f60;
    text-align: left;
    margin-right: 50px;
}
.home-details .wrapper-container .wrapper .product-detail{
    float: left;
    width: 990px;
    border:1px solid rgb(228, 225, 225);
    margin-left: 10px;
    position:relative;
}
.home-details .wrapper-container .wrapper .product-detail .product-detail-tab ul{
    width: 988px;
    height: 47px;
    background: rgb(238, 237, 237);
}
.home-details .wrapper-container .wrapper .product-detail .product-detail-tab ul li{
    float: left;
  
}
.home-details .wrapper-container .wrapper .product-detail .product-detail-tab ul li a{
    color:#333;
    font-size: 14px;
    line-height: 47px;
    margin: 0 40px;
}
.home-details .wrapper-container .wrapper .product-detail .product-detail-tab .region{
    position:absolute;
    top:14px;
    right:30px;
    font-size: 12px;
    color:#333;
}
.home-details .wrapper-container .wrapper .product-detail .product-detail-tab .region .erwei{
    display: none;
}
.home-details .wrapper-container .wrapper .product-detail .product-detail-tab .region:hover .erwei{
    display: block;
}
.home-details .wrapper-container .wrapper .product-detail .ccc-auth{
    width: 870px;
    height: 37px;
    color:#333;
    font-size: 12px;
    text-align: left;
    margin: 20px 0;
    padding-left: 20px;
}
.home-details .wrapper-container .wrapper .product-detail .desc{
   width:750px;
   padding-left: 20px;
}
</style>