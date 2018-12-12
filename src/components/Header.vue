<template>
    <div class="app-header">
       <div class="header-nav">
            <div class="nav-left">
                <ul class="list-unstyled mb-0">
                    <li class=" float-left mr-4 navLi"><a href="#">网站导航<i class="el-icon-arrow-down ml-1 "></i><i class="el-icon-arrow-up ml-1 disabled"></i></a>
                        <div class="navItem site-list">
                            <dl class="site-list slb text-justify">
                                <dt>特色购物</dt>
                                <dd>
                                    <p><a href="#">苏宁互联</a></p>
                                    <p><a href="#">苏宁达人</a></p>
                                    <p><a href="#">苏宁卡</a></p>
                                    <p><a href="#">苏宁国际</a></p>
                                    <p><a href="#">大聚惠</a></p>
                                    <p><a href="#">以旧换新</a></p>
                                    <p><a href="#">二手优品</a></p>
                                    <p><a href="#">领券中心</a></p>
                                    <p><a href="#">香港苏宁</a></p>
                                    <p><a href="#">苏宁Outlets</a></p>
                                    <p><a href="#">节能超市</a></p>
                                    <p><a href="#">导购指南</a></p>
                                </dd>
                            </dl>
                            <dl class="site-list slb text-justify">
                                <dt>主题频道</dt>
                                <dd>
                                    <p><a href="#">电器城</a></p>
                                    <p><a href="#">苏宁超市</a></p>
                                    <p><a href="#">手机</a></p>
                                    <p><a href="#">运动馆</a></p>
                                    <p><a href="#">图书</a></p>
                                    <p><a href="#">红孩子母婴</a></p>
                                    <p><a href="#">美妆个护</a></p>
                                    <p><a href="#">电脑</a></p>
                                    <p><a href="#">服装城</a></p>
                                    <p><a href="#">智能生活</a></p>
                                    <p><a href="#">家装管</a></p>
                                    <p><a href="#">汽车用品</a></p>
                                    <p><a href="#">排行榜</a></p>
                                    <p><a href="#">医药馆</a></p> 
                                </dd>
                            </dl>
                            <dl class="site-list slb text-justify">
                                <dt>生活助手</dt>
                                <dd>
                                    <p><a href="#">零钱宝</a></p>
                                    <p><a href="#">手机充值</a></p>
                                    <p><a href="#">转账还款</a></p>
                                    <p><a href="#">约服务</a></p>
                                    <p><a href="#">水电煤</a></p>
                                    <p><a href="#">保险</a></p>
                                    <p><a href="#">机票</a></p>
                                    <p><a href="#">门店查询</a></p>   
                                </dd>
                            </dl>
                            <dl class="site-list slb text-justify">
                                <dt>会员服务</dt>
                                <dd>
                                    <p><a href="#">会员联盟</a></p>
                                    <p><a href="#">延长保修</a></p>
                                    <p><a href="#">免费书城</a></p>
                                    <p><a href="#">易付宝</a></p>
                                    <p><a href="#">苏宁理财</a></p>
                                    <p><a href="#">苏宁金融</a></p>  
                                </dd>
                            </dl>
                            <dl class="site-list slb text-justify">
                                <dt>更多热点</dt>
                                <dd>
                                    <p><a href="#">PP视频</a></p>
                                    <p><a href="#">客户端</a></p>
                                    <p><a href="#">商家入驻</a></p>
                                    <p><a href="#">苏宁联盟</a></p>
                                    <p><a href="#">用户体验</a></p>
                                    <p><a href="#">校园先锋</a></p>
                                    <p><a href="#">苏宁云</a></p>
                                    <p><a href="#">苏宁足球</a></p>
                                    <p><a href="#">苏宁公益</a></p>
                                </dd>
                            </dl>
                        </div>
                        </li>
                    <li class=" float-left mr-3 shopItemLi"><a href="#">商家入驻<i class="el-icon-arrow-down ml-1"></i><i class="el-icon-arrow-up ml-1 disabled"></i></a>
                        <div class="shopItem">
                                <ul>
                                    <li><a href="#">合作招商</a></li>
                                    <li><a href="#">服务市场</a></li>       
                                </ul>
                                <ul>
                                    <li><a href="#">金融中心</a></li>
                                    <li><a href="#">培训中心</a></li>       
                                </ul>
                                <ul>
                                    <li><a href="#">易通天下</a></li>
                                    <li><a href="#">规则中心</a></li>
                                </ul>
                        </div>
                        </li>
                    <li class=" float-left mr-3 serveItemLi"><a href="#">客户服务<i class="el-icon-arrow-down ml-1"></i><i class="el-icon-arrow-up ml-1 disabled"></i></a>
                        <div class="serveItem">
                            <ul>
                                <li><a href="#">苏宁帮客</a></li>
                                <li><a href="#">帮助中心</a></li>
                                <li><a href="#">查找门店</a></li>
                                <li><a href="#">退换/维修</a></li>
                                <li><a href="#">建议反馈</a></li>
                                <li><a href="#">30天包退</a></li>
                                <li><a href="#">苏宁服务</a></li>
                                <li><a href="#">在线咨询</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="nav-right mr-5">
            <ul class="list-unstyled mb-0 float-right mr-5">
                <li class=" float-left mr-3"><router-link to="/login">请登录</router-link></li>
                <li class=" float-left mr-3"><a href="#" style="color:orange">注册有礼</a></li>
                <li class=" float-left mr-3 orderItemLi"><a href="#" >我的订单<i class="el-icon-arrow-down ml-1"></i><i class="el-icon-arrow-up ml-1 disabled"></i></a>
                    <div class="orderItem">
                        <ul>
                            <li><a href="#">待支付</a></li>
                            <li><a href="#">待收货</a></li>
                            <li><a href="#">待评价</a></li>
                            <li><a href="#">修改订单</a></li>
                        </ul>
                    </div>
                </li>
                <li class=" float-left mr-3 buyItemLi"><a href="#">我的易购<i class="el-icon-arrow-down ml-1"></i><i class="el-icon-arrow-up ml-1 disabled"></i></a>
                    <div class="buyItem">
                        <ul>
                            <li><a href="#"><img src="../../static/img/logo_1.jpg"></a></li>
                            <li><a href="#">请登录</a><a href="#"><p  class="card">点击打卡</p></a></li>                   
                        </ul>
                        <ul>
                            <li><a href="#">我的二手</a></li>
                            <li><a href="#">我的收藏</a></li>
                            <li><a href="#">我的金融</a></li>
                            <li><a href="#">苏宁会员</a></li>
                            <li><a href="#">我的任性付</a></li>
                            <li><a href="#">我的优惠券</a></li>
                        </ul>
                    </div>
                </li>
                <li class=" float-left mr-3"><a href="#">苏宁会员</a></li>
                <li class=" float-left mr-3"><a href="#" style="color:orange">购物车<i class="el-icon-arrow-down ml-1"></i><i class="el-icon-arrow-up ml-1 disabled"></i></a></li>
                <li class=" float-left mr-3"><a href="#">易付宝</a></li>
                <li class=" float-left mr-3"><a href="#">企业采购</a></li>
                <li class=" float-left mr-3"><a href="#">手机苏宁<i class="el-icon-arrow-down ml-1"></i><i class="el-icon-arrow-up ml-1 disabled"></i></a></li>
             </ul>
            </div>
       </div>
       <div class="header-container">
             <a href="#"><img src="//image3.suning.cn/uimg/cms/img/153135831598566332.png" alt=""></a> 
             <a href="#"><img src="//image3.suning.cn/uimg/cms/img/154184122519433208.gif   " alt="" ></a> 
            <div class="search-box ml-2">
                <input id="search" type="text" placeholder="家电嘉年华 满额赠4999空净">
                <img class="fdj"src="../assets/img/fdj.jpg" alt="" style="width:26px;height:26px;position: relative;left: -535px;top:5px;">
                <input id="btn-submit" type="submit" value="搜索">
                <div class="tuijian">
                    <ul class="search-items">
                        <li class="pr-2"><a href="#">烤箱</a><span class="ml-2">|</span></li>
                        <li class="pr-2"><a href="#">预定抽彩电</a><span  class="ml-2">|</span></li>
                        <li class="pr-2"><a href="#">空调</a><span  class="ml-2">|</span></li>
                        <li class="pr-2"><a href="#">冰箱半价抢</a><span  class="ml-2">|</span></li>
                        <li class="pr-2"><a href="#">赢1111神券</a><span  class="ml-2">|</span></li>
                        <li class="pr-2"><a href="#">iPhone</a><span  class="ml-2">|</span></li>
                        <li class="pr-2"><a href="#">笔记本</a><span  class="ml-2">|</span></li>
                        <li class="pr-2"><a href="#">抽纸</a></li>
                    </ul>
                </div>
            </div>  
       </div>
    </div>
</template>
<script>
 
    export default{
        data(){return { 
       
             }
         },
        methods:{
        }
}
</script>
<style scoped>
*{
    list-style:none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing:border-box;
}
.disabled{
    display:none;
}
.navItem{
   float:left;
   position:absolute;
    background:#fff;
    border:1px solid rgb(230, 227, 227);
    z-index:100;
    display: none;
}
.navLi:hover .navItem{
    display: block;
}
.app-header .header-nav{
    width: 100%;
    height:35px;
    background-color:#f5f5f5;
}
.app-header .header-nav i{
    color:rgb(201, 194, 194);
}
.nav-left ul{
    font-size:10px;
    margin-left:90px;
    
}
.nav-left ul li a{
    color:#666;
    line-height:35px;   
    text-decoration: none;
    padding-left: 6px;
}
.nav-right ul{
    font-size:10px;
}
.nav-right ul li a {
    color:#666;
    line-height: 35px;
    text-decoration: none;
}
.header-container{
    width:100%;
    height: 110px;
    padding-left: 100px;
    border: 1x solid red;
}
.header-container a img{
    width: 190px;
    height: 90px;
    cursor: pointer;
    float:left;
}
.header-container span img{
    width: 160px;
    height: 100px;
}
.search-box{
    width: 600px;
    height: 100px;
    margin-top: 20px;
    float: left;
}
#search{
    width: 390px;
    height: 36px;
    border:2px solid #fa0;
    float: left;
    font-size:12px;
    padding-left: 40px;
}
#btn-submit{
    width: 120px;
    height: 36px;
    background: #f90;
    font-size:18px;
    color:#fff;
    font-family: 'MicroSoft YaHei';
    float: left;
    border:0;
    font-weight: bold;
}
.tuijian .search-items{clear:both;}
.tuijian .search-items li{
    font-size:10px;  
    float: left;
    padding-top: 8px;
}
.tuijian .search-items li a{
    color:#666;
    text-decoration: none;
}
.site-list{
    float:left;
    margin-bottom: 0;
}
.navItem dl{
    width: 180px;
    height:220px;
}
.navItem dl dd{
    display:block;
    text-align: left;

}
.navItem dl dd p{
    width: 68px;
    height:20px;
    float: left;
    margin-bottom: 3px;
}
.navItem dl dd p a:hover{
    color:orange;
}
.slb{
    padding: 20px;
    border-right:1px solid rgb(230, 227, 227);
}
.shopItem{
    position: absolute;
    width: 160px;
    height: 80px;
    border:1px solid rgb(230, 227, 227);
    background: #fff;
    display: none;
}
.shopItemLi:hover .shopItem{
    display: block;
}
.shopItem ul{
   width: 180px;
   padding-left: 5px;
}
.shopItem ul li{
    float: left;
    height: 20px;
    position: relative;
    left:-90px;
    top:0;
    margin-right: 28px;
    margin-bottom: 3px;
}
.shopItem ul li a:hover{ color:orange;}
.serveItem{
    position:absolute;  
    left: 180px;
    width: 160px;
    height: 120px;
    background: #fff;
    border:1px solid rgb(230, 227, 227);
    display: none;
}
.serveItemLi:hover .serveItem{
    display: block;
}
.serveItem ul{
    width: 180px;
    padding-left: 5px;
}
.serveItem ul li{
    float: left;
    height: 20px;
    position: relative;
    left:-90px;
    margin: 3px;
    margin-right: 20px;

}
.serveItem ul li a:hover{ color:orange;}
.orderItem{
    position:absolute;
    width: 80px;
    height: 120px;
    background: #fff;
    border:1px solid rgb(230, 227, 227);
    z-index: 1;
    display: none;
}
.orderItemLi:hover .orderItem{
    display: block;
}
.orderItem ul li{
    height: 20px;
    margin: 5px;
    text-align: left;
    padding-left: 10px;
}
.orderItem ul li a:hover{color:orange}
.buyItem{
    position:absolute;
    width: 170px;
    height: 150px;
    background: #fff;
    border:1px solid rgb(230, 227, 227);
    z-index: 1;
    display: none;
}
.buyItemLi:hover .buyItem{
    display: block;
}
.buyItem ul:first-child li{
    float: left;
    height: 40px;
    margin: 5px;
    text-align: left;
    padding-left: 10px;
    margin-bottom: 20px;

}
.buyItem ul li a:hover{color:orange}
.buyItem ul:nth-child(2) li{
    width: 80px;
    float: left;
    height: 18px;
    margin-top: 5px;
    text-align: left;
    padding-left: 10px;
}
.card{
    width: 65px;
    line-height: 22px;
    background:#f60;
    color:#fff;
    font-size:10px;
    text-align: center;
    margin: auto;
    border-radius: 4px;
    display: block;
}
</style>