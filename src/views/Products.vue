<template>
    <div class="home-products">
        <div class="index-list">
            <div class="goods-sort">
                <a href="#">全部商品分类</a>
            </div>
            <div class="nav-index">
                <ul>
                    <li><a href="#">正品好店</a></li>
                    <li><a href="#">手机周边</a></li>
                    <li><a href="#">智能穿戴</a></li>
                    <li><a href="#">苏宁互联</a></li>
                    <li><a href="#">营业厅</a></li>
                    <li><a href="#">以旧换新</a></li>
                    <li><a href="#">手机维修</a></li>
                    <li><a href="#">苏宁极物</a></li>
                </ul>
            </div>
        </div>
        <div class="first-screen">
            <div class="nav-wrapper">
                <div class="nav-left-index">
                    <ul>
                        <li>
                            <span>大牌营销</span>
                            <router-link to="/home/list">Apple</router-link>
                            <a href="#">小米</a>
                            <a href="#">荣耀</a>
                            <a href="#">华为</a>
                            <a href="#">OPPO</a>
                            <a href="#">vivo</a>
                        </li>
                        <li>
                            <span>搞机达人</span>
                            <a href="#">全部手机</a>
                            <a href="#">拍照手机</a>
                            <a href="#">游戏手机</a>
                            <a href="#">女性手机</a>
                            <a href="#">全面屏</a>
                            <a href="#">老人手机</a>
                        </li>
                        <li>
                            <span>手机配件</span>
                            <a href="#">手机贴膜</a>
                            <a href="#">手机壳</a>
                            <a href="#">数据线</a>
                            <a href="#">移动电源</a>
                            <a href="#">充电器</a>
                            <a href="#">蓝牙耳机</a>
                        </li>
                        <li>
                            <span>运营商</span>
                            <a href="#">营业厅</a>
                            <a href="#">1分领</a>
                            <a href="#">换套餐</a>
                            <a href="#">靓号转去</a>
                            <a href="#">充话费</a>
                            <a href="#">充流量</a>
                        </li>
                    </ul>
                </div>
                <div class="second-item">
                    <ul>
                        <li><a href="#">
                            <img src="../assets/img/yp.png" alt=""> <span>二手优品</span>
                        </a></li>
                        <li><a href="#">
                          <img src="../assets/img/kx.png" alt="">  <span>苏宁快修</span>
                        </a></li>
                        <li><a href="#">
                          <img src="../assets/img/hx.png" alt=""> <span>以旧换新</span>
                        </a></li>
                    </ul>
                </div>
                <div class="carousel">
                    <div class="block">
                        <el-carousel :interval="2000" height="420px">
                            <el-carousel-item v-for="item in imageList" :key="item.id">
                                 <img :src="item.url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div id="clear-fix"></div>
            </div>
            <div class="phone-active">
                <ul>
                    <li>
                        <p class="phone-title">感恩回馈</p>
                        <p class="sub-title">爆款手机5折起</p>
                        <img src="//image3.suning.cn/uimg/cms/img/154201277409838220.png" alt="">
                    </li>
                    <li>
                        <p class="phone-title">手机新品专题</p>
                        <p class="sub-title">爆款新机等你来PICK</p>
                        <img src="//image3.suning.cn/uimg/cms/img/153984373003664247.png" alt="">
                    </li>
                    <li>
                        <p class="phone-title">正品好货</p>
                        <p class="sub-title">荣耀10青春版0元预约</p>
                        <img src="//image4.suning.cn/uimg/cms/img/154288284834177339.png" alt="">
                    </li>
                    <li>
                        <p class="phone-title">男生女生手机PK</p>
                        <p class="sub-title">总有一款适合你</p>
                        <img src="//image5.suning.cn/uimg/cms/img/154168209466755339.png" alt="">
                    </li>
                    <li>
                        <p class="phone-title">以旧换新</p>
                        <p class="sub-title">最高补贴500元</p>
                        <img src="//image3.suning.cn/uimg/cms/img/153934112481951890.png" alt="">
                    </li>
                </ul>
            </div>   
            <div class="phone-floor">
                <p class="hot-sale">热卖爆款</p>  
            </div>
            <div class="phone-main-floor">
                <div class="left-pic">
                        <img src="//image3.suning.cn/uimg/cms/img/154183864560135570.jpg" alt="">
                </div>
                <div class="floor-loop-box1">
                            <ul>
                                <li v-for="list in phone_ht">
                                    <a href="#">
                                        <img :src="'http://leidtsy.applinzi.com/img/hot_sale_img/'+list.img"/>
                                        <p class="name">{{list.title}}}</p>
                                        <p class="price">￥<span>{{list.price.toFixed(2)}}</span></p>
                                    </a>
                                </li>
                                <!-- <li>
                                    <a href="#">
                                        <img src="//imgservice1.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_200w_200h_4e" alt="">
                                        <p class="name">iPhone XR 128GB 黑色 移动联通电信全网通4G手机 双卡双待</p>
                                        <p class="price">￥<span>6999.00</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="//imgservice2.suning.cn/uimg1/b2c/image/2pTEAOrxuOTLEAUg9fjFOg.jpg_200w_200h_4e" alt="">
                                        <p class="name">小米8青春版 4GB+64GB 深空灰 移动联通电信4G全网通手机 AI双摄 全面屏</p>
                                        <p class="price">￥<span>1399.00</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="//imgservice2.suning.cn/uimg1/b2c/image/aT1eFtGYn1KQoN5stE6GrQ.jpg_200w_200h_4e" alt="">
                                        <p class="name">荣耀8X 91%屏占比 2000万AI双摄 4GB+64GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待</p>
                                        <p class="price">￥<span>1399.00</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="//imgservice5.suning.cn/uimg1/b2c/image/Ms3cOocHcVIopRVEgOhmdg.jpg_200w_200h_4e" alt="">
                                        <p class="name">华为Mate 20 亮黑色 6GB+128GB 麒麟980芯片全面屏徕卡三摄移动联通电信4G手机</p>
                                        <p class="price">￥<span>4999.00</span></p>
                                    </a>
                                </li> -->
                        </ul>
                </div>     
            </div> 
             <div class="phone-floor">
                <p class="hot-sale">新品抢先</p>  
            </div>
            <div class="phone-main-floor">
                <div class="left-pic">
                        <img src="//image5.suning.cn/uimg/cms/img/154183881387988660.jpg" alt="">
                </div>
                <div class="floor-loop-box1">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="//imgservice3.suning.cn/uimg1/b2c/image/fULrBUkFYwQ5rEV2j9xmUg.png_200w_200h_4e" alt="">
                                        <p class="name">iPhone XS Max 256GB 金色 移动联通电信全网通4G手机 双卡双待</p>
                                        <p class="price">￥<span>6999.00</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="//imgservice2.suning.cn/uimg1/b2c/image/2pTEAOrxuOTLEAUg9fjFOg.jpg_200w_200h_4e" alt="">
                                        <p class="name">小米8青春版 4GB+64GB 深空灰</p>
                                        <p class="price">￥<span>1399.00</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="//imgservice3.suning.cn/uimg1/b2c/image/k89Y9h4otB4jb8OSPowzgQ.jpg_200w_200h_4e" alt="">
                                        <p class="name">vivoZ1青春版 4+32GB 极光色 4G全网通 新一代全面屏AI双摄手机</p>
                                        <p class="price">￥<span>1098.00</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="//imgservice5.suning.cn/uimg1/b2c/image/BTwklqpL2Keo1uK5QISdog.jpg_200w_200h_4e" alt="">
                                        <p class="name">OPPO K1 千元屏幕指纹手机 4+64G 银光绿 光感屏幕指纹全网通4G 双卡双待手机</p>
                                        <p class="price">￥<span>1599.00</span></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="//imgservice4.suning.cn/uimg1/b2c/image/Fsx80a5uzecdyRWMrYK72w.jpg_200w_200h_4e" alt="">
                                        <p class="name">三星A9s 6GB+128GB 鱼子黑 移动联通电信4G手机</p>
                                        <p class="price">￥<span>3499.00</span></p>
                                    </a>
                                </li>
                        </ul>
                </div>     
            </div> 
            <div class="phone-floor">
                <p class="hot-sale">品牌墙</p>  
            </div>
            <div class="phone-wall">
                <ul>
                    <li><a href="#">
                        <img src="//image3.suning.cn/uimg/cms/img/153406116486373576.jpg" alt="">
                        <p class="shadow" >
                            <span class="desc1">XR抢券立减</span>
                            <span class="desc2">查看更多</span>
                        </p>
                        <p></p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image3.suning.cn/uimg/cms/img/153406117753107612.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">小米Mix3新品</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image1.suning.cn/uimg/cms/img/153406119063109672.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">荣耀Magic2</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image2.suning.cn/uimg/cms/img/153406119873778257.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">华为Mate20</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image3.suning.cn/uimg/cms/img/153406120680849319.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">Vivo Z3新品</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image4.suning.cn/uimg/cms/img/153406121497697846.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">OPPO K1新品</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image2.suning.cn/uimg/cms/img/153611914062247251.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">诺基亚 X5</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image4.suning.cn/uimg/cms/img/153406123502821818.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">魅族 Note8</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image2.suning.cn/uimg/cms/img/153611877042383078.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">三星A9s新品</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image5.suning.cn/uimg/cms/img/153611908626736036.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">努比亚X新品</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image4.suning.cn/uimg/cms/img/153611933876504536.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">T9 HelloKitty版</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image3.suning.cn/uimg/cms/img/154276449664483536.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">99元起</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image5.suning.cn/uimg/cms/img/153612846144217018.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">索尼旗舰限时特惠</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image4.suning.cn/uimg/cms/img/153613361202776347.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">8848</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image5.suning.cn/uimg/cms/img/153612840865919678.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">爆款直降</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                    <li><a href="#">
                        <img src="//image1.suning.cn/uimg/cms/img/153613648932178542.jpg" alt="">
                        <p class="shadow">
                            <span class="desc1">suger</span>
                            <span class="desc2">查看更多</span>
                        </p>
                    </a></li>
                </ul>
            </div>
            <div class="phone-floor">
                <p class="hot-sale">苏宁网厅</p>  
            </div>
            <div class="internet">
                <ul>
                    <li class="first-content"><a href="#">
                        <div class="title">
                            <p class="name">宽带</p>
                            <span>更多</span>
                            <i class="arrow"></i>
                        </div>
                        <div class="content">
                            <ul>
                                <li><a href="#">
                                    <img src="//imgservice4.suning.cn/uimg1/b2c/image/ifFyivHIBQjVkNW748opUw.jpg_200w_200h_4e" alt="">
                                    <p class="name">江苏电信宽带南京苏州无锡电信宽带办理江苏光纤宽带包年套餐安装</p>
                                    <p class="price">￥359.00</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice2.suning.cn/uimg1/b2c/image/rzPATdqA0LHbHD2r5EbjuQ==.jpg_200w_200h_4e" alt="">
                                    <p class="name">中国联通山东联通报装宽带【青岛】100M 高速光纤入网宽带新装宽带办理安装网线FTTH模式大王卡融合宽带套餐日租宽带</p>
                                    <p class="price">￥100.00</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice3.suning.cn/uimg1/b2c/image/T4sB9VVtjyvIdrLQWTYJfw==.jpg_200w_200h_4e" alt="">
                                    <p class="name">【正规】【独享】深圳电信光纤宽带100M不限流量团购融合礼包新装办理包年申请</p>
                                    <p class="price">￥599.00</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice4.suning.cn/uimg1/b2c/image/tTD7WCezXPPcsj6yvT3EGw==.jpg_200w_200h_4e" alt="">
                                    <p class="name">广州电信宽带100M/200M/500M手机全国流量号卡包年新装宽带免安装融合套餐</p>
                                    <p class="price">￥180.00</p>
                                </a></li>
                            </ul>
                        </div>
                    </a></li>
                    <li class="first-content"><a href="#">
                        <div class="title">
                            <p class="name">手机卡</p>
                            <span>更多</span>
                            <i class="arrow"></i>
                        </div>
                        <div class="content">
                            <ul>
                                <li><a href="#">
                                    <img src="//imgservice3.suning.cn/uimg1/b2c/image/YD8JCTq8bChak8lVkxjogw.png_200w_200h_4e" alt="">
                                    <p class="name">移动手机流量卡纯流量上网卡全国通用移动4g流量日租卡物联网电话卡手机卡0月租靓号卡腾讯大王卡广东北京上海</p>
                                    <p class="price">￥9.90</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice5.suning.cn/uimg1/b2c/image/_AoCrLgag47oXOL8VZn2sA.jpg_200w_200h_4e" alt="">
                                    <p class="name">电信手机卡流量卡手机卡全国通用上网卡4g手机电话卡大王卡全国发货</p>
                                    <p class="price">￥19.00</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice1.suning.cn/uimg1/b2c/image/yeCGgqnNI391BHPecIeRng.png_200w_200h_4e" alt="">
                                    <p class="name">中国移动流量卡大王卡4g手机卡无限流量上网卡腾讯大王卡日租卡电话卡全国通用</p>
                                    <p class="price">￥17.00</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice2.suning.cn/uimg1/b2c/image/_7bHbBZcy_eZ51YTx_Cv0Q.jpg_200w_200h_4e" alt="">
                                    <p class="name">重庆联通靓号4g无限流量卡上网卡手机电话卡犇驰卡靓号</p>
                                    <p class="price">￥200.00</p>
                                </a></li>
                            </ul>
                        </div>
                    </a></li>
                    <li class="first-content"><a href="#">
                          <div class="title">
                            <p class="name">流量卡</p>
                            <span>更多</span>
                            <i class="arrow"></i>
                        </div>
                        <div class="content">
                            <ul>
                                <li><a href="#">
                                    <img src="//imgservice3.suning.cn/uimg1/b2c/image/iFxMoi2Gj4qXJNjSpdXjmQ.jpg_200w_200h_4e" alt="">
                                    <p class="name">电信移动流量卡电信卡日租卡4G流量大王卡手机上网卡无限流量卡（29元包全国流量+300分钟通话 充值50送50话费</p>
                                    <p class="price">￥9.90</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice3.suning.cn/uimg1/b2c/image/s20V-t5TjdwJJwE7HQoJgw.jpg_200w_200h_4e" alt="">
                                    <p class="name">联通 移动无限流量卡全国不限流量4g纯流量上网卡不限速联通流量王卡26包100G流量全国通用超值</p>
                                    <p class="price">￥55.00</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice4.suning.cn/uimg1/b2c/image/BR_4FgPJp-y2WBn2xvwqHA.jpg_200w_200h_4e" alt="">
                                    <p class="name">电信移动联通流量上网卡移动4G日租卡上网卡纯流量卡全国通用电话卡手机卡笔记本随身wifi流量卡</p>
                                    <p class="price">￥53.00</p>
                                </a></li>
                                <li><a href="#">
                                    <img src="//imgservice5.suning.cn/uimg1/b2c/image/4hc2RhTz6NoI7E1ZDZko2w.png_200w_200h_4e" alt="">
                                    <p class="name">移动靓号手机流量卡电信手机卡纯流量上网卡移动流量卡4G全国通用日租卡物联网电话卡手机卡0月租腾讯大王卡上海广东北京</p>
                                    <p class="price">￥53.00</p>
                                </a></li>
                            </ul>
                        </div>
                    </a></li>
                </ul>
            </div>
            <div class="phone-floor">
                <p class="hot-sale">猜你喜欢</p>  
            </div>
            <div class="like">
                <ul>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00 <i class="like-label">大聚惠</i></p>       
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/ETUPYJientfts4257ta8Uw.jpg_200w_200h_4e" alt="">
                        <p class="name">【爆款抢购】Huawei/华为nova2s 6GB+64GB 浅艾蓝移动联通电信4G手机</p>
                        <p class="like-price">￥1899.00</p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/PkyCGQ6HXkyk0lh5l6scpg.jpg_200w_200h_4e" alt="">
                        <p class="name">【爆款抢购】Huawei/华为nova2s 6GB+64GB 曜石黑移动联通电信4G手机</p>
                       <p class="like-price">￥2699.00</p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/fYVBBovVvyWezAslYUlbAA.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 Plus 64GB 深空灰色 移动联通电信4G手机</p>
                        <p class="like-price">￥5699.00 <i class="like-label">大聚惠</i></p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/Vvd8-5cK0aA8jQ4SuV7ssg.jpg_200w_200h_4e" alt="">
                        <p class="name">华为/荣耀(honor）Play 全网通 4GB+64GB 幻夜黑 智能手机 全面屏手机 双卡双待</p>
                        <p class="like-price">￥1699.00 <i class="like-label">抢</i></p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00 <i class="like-label">大聚惠</i></p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00</p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00</p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00 <i class="like-label">大聚惠</i></p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00 <i class="like-label">大聚惠</i></p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00</p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00 <i class="like-label">抢</i></p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00 <i class="like-label">大聚惠</i></p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00</p>
                    </a></li>
                    <li><a href="#">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/7djW1_Qwbk2HKxeQpAGHKw.png_200w_200h_4e" alt="">
                        <p class="name">Apple iPhone 8 64GB 金色 移动联通电信4G手机</p>
                        <p class="like-price">￥4699.00 <i class="like-label">大聚惠</i></p>
                    </a></li>
                </ul>
            </div>
        </div> 
    </div>
</template>
<script>
export default{
    data(){
        return {
            imageList:[
                {id:0,url:require("../assets/img/2-154235522355087830.jpg")},
                {id:1,url:require("../assets/img/2-154293371579870218.jpg")},
                {id:2,url:require("../assets/img/2-154296011446637789.jpg")},
                {id:3,url:require("../assets/img/2-154297006734427740.jpg")},
                {id:4,url:require("../assets/img/2-154297021165571053.jpg")},
            ],
        phone_ht:[]
        }
    },
    methods:{ },
    mounted(){
             this.axios.get("http://leidtsy.applinzi.com:5050/products/hotsale").then(res=>{
                 this.phone_ht=res.data
             })
         }
}
</script>
<style scoped>
*{margin: 0;padding: 0;list-style: none;text-decoration: none;}
.home-products .index-list{
    width:100%;
    height: 38px;
}
.home-products .index-list .goods-sort{
    float: left;
    width: 232px;
    height: 38px;
    background: #3284e5;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-left: 100px;
}
.home-products .index-list .goods-sort a{
    display: block;
    text-decoration: none;
    width:232px;
    line-height: 38px;
    color:#fff;
}
.home-products .index-list .nav-index{
    float: left;
    height: 38px;
    margin-left: 20px;
}
.home-products .index-list .nav-index ul li{
    float: left;
    width: 99px;
    height: 38px;
    line-height: 38px;
}
.home-products .index-list .nav-index ul li a{
    color:#000;
    text-decoration: none;
}
.home-products .first-screen{
    clear:both;
    width: 100%;
    background: rgb(241, 240, 240);
    padding-left: 100px;
    position:relative;
}
.home-products .first-screen .nav-wrapper .nav-left-index{
    clear:both;
    float: left;
    width: 230px;
    height: 336px;
    background: #fff;
}
.home-products .first-screen .nav-wrapper .nav-left-index ul li{
    width: 231px;
    height: 84px;
    border-bottom: 1px dotted #666;
    font:12px/1.5 "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    padding-top: 5px;
}
.home-products .first-screen .nav-wrapper .nav-left-index span{
    display: block;
    text-align: left;
    font-size:14px;
    font-weight: bold;
    font-family: "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    margin-left: 10px;
}
.home-products .first-screen .nav-wrapper .nav-left-index ul li a{
    text-decoration: none;
    color:#666;
    display: block;
    width: 63px;
    height: 21px;
    float: left;
    text-align: left;
    margin-left: 10px;
}
.home-products .first-screen .nav-wrapper .second-item{
    width: 231px;
    height: 84px;
}
.home-products .first-screen .nav-wrapper .second-item ul li{
    float: left;
    border-right: 1px dotted #666;
    background: #fff;
    font:12px/1.5 "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
}
.home-products .first-screen .nav-wrapper .second-item ul li:last-child{
    border-right:0;
}
.home-products .first-screen .nav-wrapper .second-item ul li a{
    text-decoration: none;
    display: block;
    width: 76px;
    height: 86px;
}
.home-products .first-screen .nav-wrapper .second-item ul li  IMG{
    display: block;
    position:relative;
    left: 20px;
    top: 8px;
}
.home-products .first-screen .nav-wrapper .second-item ul li a span{
    color:#666;
    display: block;
    margin-top: 15px;
}
.home-products .first-screen  .carousel{
    width: 960px;
    height: 480px;
    float: left;   
    position:absolute;
    left: 330px;
    top:0px;
}
.home-products .first-screen  .carousel .block{
    width: 960px;
}
.home-products .first-screen  .carousel  .el-carousel-item{
    width: 960px;
    height: 480px;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
}
#clear-fix::after{
    content:"";
    display: block;
    clear:both;
}
.home-products .first-screen .phone-active{
    width: 100%;
    height: 300px;
    margin-top: 30px;
}
.home-products .first-screen .phone-active ul li{
    float: left;
    width: 238px;
    height: 300px;
    box-shadow: 10px 0 20px 0 rgba(0,0,0,0.05);
    background-image:linear-gradient(to right,rgb(240, 235, 235) 2%,rgb(253, 249, 249) 3%,#fff 100%);
}
.home-products .first-screen .phone-active ul li:hover{
    color:#fff;
    background-image:linear-gradient(to right,rgb(84, 95, 238) 30%,rgb(108, 127, 235) 60%,rgb(91, 167, 238) 100%);
}
.home-products .first-screen .phone-active ul li img{
    width: 200px;
    height: 200px;
    margin-top: 10px;
}
.home-products .first-screen .phone-active ul li .phone-title{
    width: 100%;
    height: 25px;
    text-align: center;
    font:bold 18px/25px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    margin: 20px 0 5px;
}
.home-products .first-screen .phone-active ul li .sub-title{
    height: 20px;
    color:#999;
    text-align: center;
    font:14px/20px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
}
.home-products .first-screen .phone-floor .hot-sale{
    clear:both;
    color:#333;
    text-align: center;
    font:30px/42px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    padding:20px;
}

.home-products .first-screen .phone-main-floor .left-pic{
    float: left;
    width: 260px;
    height: 260px;
}
.home-products .first-screen .phone-main-floor .floor-loop-box1{
    float: left;
    width:930px;
    height: 260px;
    overflow: hidden;
}
.home-products .first-screen .phone-main-floor .floor-loop-box1 ul{
    width: 4000px;
    height: 260px;

}
.home-products .first-screen .phone-main-floor .floor-loop-box1 ul li{
    float: left;
    width: 185px;
    height: 260px;
}
.home-products .first-screen .phone-main-floor .floor-loop-box1 ul li img{
    width: 160px;
    height: 160px;
    margin: 10px;
}
.home-products .first-screen .phone-main-floor .floor-loop-box1 ul li .name{
    width: 168px;
    height: 34px;
    line-height: 34px;
    color:#666;
    font:12px/17px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    text-align: center;
    padding-left:5px;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.home-products .first-screen .phone-main-floor .floor-loop-box1 ul li .price{
    color:#f40;
    text-align: center;
    font:18px/25px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
}
.home-products .first-screen .phone-main-floor .floor-loop-box1 ul li a{text-decoration: none;}
.home-products .first-screen .phone-main-floor .floor-loop-box1 ul li{
    box-shadow: 10px 0 20px 0 rgba(0,0,0,0.05);
    background-image: linear-gradient(to left,rgb(228, 225, 225) 1%,rgb(250, 248, 248) 2%,rgb(255, 255, 255) 100%);
}
.home-products .first-screen .phone-wall{
    width: 100%;
    height: 242px;
}
.home-products .first-screen .phone-wall ul li{
    float: left;
    position:relative;
    margin-right: 1px;
    margin-bottom: 1px;
    width: 148px;
    height: 120px;
    overflow: hidden;
}
.home-products .first-screen .phone-wall ul li img{
    width: 148px;
    height: 120px;
}
.home-products .first-screen .phone-wall ul li .shadow{
    position:absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #3284e5;
    opacity: .9;
}
.home-products .first-screen .phone-wall ul li:hover .shadow{
    display: block;
    top: 0;
    left: 0;
    transition: all 0.5s linear 0.2s;
}
.home-products .first-screen .phone-wall ul li .shadow .desc1{
    display: block;
    width: 100%;
    height: 25px;
    color:#fff;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 20px;
    overflow: hidden;
    font:18px/25px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
}
.home-products .first-screen .phone-wall ul li .shadow .desc2{
    display: inline-block;
    width: 90px;
    height: 26px;
    text-align: center;
    color:#333;
    background: #fff;
    font:14px/26px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    border-radius:30px;
}
.home-products .first-screen .internet{
    width: 100%;
    height: 475px;
}
.home-products .first-screen .internet .title{
    width: 390px;
    height: 50px;
    background:rgb(242, 181, 48);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.home-products .first-screen .internet .title .name{
    float: left;
    width: 200px;
    height: 50px;
    color:#fff;
    text-align: left;
    margin-left:15px;
    font:18px/50px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
}
.home-products .first-screen .internet .title span{
    color:#fff;
    float: left;
    /* line-height:30px; */
    margin: 16px 0 0 100px;
    font:14px/20px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
}
.home-products .first-screen .internet .title .arrow{
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    margin: 20px 0 0 10px;
    border-left:1px solid #fff;
    border-bottom:1px solid #fff;
    transform:rotate(-135deg);
}
.home-products .first-screen .internet ul li.first-content{
    float: left;
    width: 390px;
    height: 475px;
    margin-right:5px;
    background: #fff;
}
.home-products .first-screen .internet ul li.first-content:nth-child(2) a .title{
    background:rgb(92, 204, 167);
}
.home-products .first-screen .internet ul li.first-content:last-child a .title{
    background:rgb(88, 99, 204);
}
.home-products .first-screen .internet ul li .content ul li{
    float: left;
    width: 194px;
    height: 210px;
 
}
.home-products .first-screen .internet ul li .content ul li img{
    width: 120px;
    height: 120px;
    margin: 10px 37px 5px;
}
.home-products .first-screen .internet ul li .content ul li .price{
    color:#f40;
    font:18px/25px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    text-align: center;
}
.home-products .first-screen .internet ul li .content ul li .name{
    width: 180px;
    height: 32px;
    color:#666;
    font:12px/16px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    padding-left: 20px;
    margin-bottom: 5px;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.home-products .first-screen .like{
    width: 100%;

}
.home-products .first-screen .like ul li a{
    text-decoration: none;
    float: left;
    width: 236px;
    height: 310px;
    border-right:1px solid rgb(233, 228, 228);
    border-bottom:1px solid rgb(233, 228, 228);
}
.home-products .first-screen .like ul li:nth-child(5n+5) a{
    border-right:0;
}
.home-products .first-screen .like ul li img{
    width: 200px;
    height: 200px;
    margin: 5px;
}
.home-products .first-screen .like ul li .name{
    width: 198px;
    height: 32px;
    color:#666;
    font:12px/16px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    padding-left: 20px;
    margin-bottom: 5px;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.home-products .first-screen .like ul li .like-price{
    color:#f40;
    font:18px/25px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    text-align: center;
}
.home-products .first-screen .like ul li .like-price .like-label{
    font:12px/18px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    height: 18px;
    color:#fff;
    background: #f60;
    border-radius: 3px;
    margin-left: 10px;
    margin-top: 4px;
    padding: 0 5px;
}
</style>