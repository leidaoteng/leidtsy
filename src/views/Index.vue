<template>
    <div class="home-index">
        <div class="home-container">
            <div class="nav-index-sort">
                    <div class="nav-index-hook">
                        <a id="index-goods" href="#" >全部商品分类</a>
                        <a id="doubelev" href="#">双11开抢</a>
                    </div>
            </div>
            <div class="nav-index">
                <ul class="nav-index-title list-unstyled">
                    <li><a href="#">大聚惠</a></li>
                    <li><a href="#">红孩子</a></li>
                    <li><a href="#">苏宁超市</a></li>
                    <li><a href="#">电器城</a></li>
                    <li><a href="#">生活家电</a></li>
                    <li><a href="#">时尚服饰</a></li>
                    <li><a href="#">苏宁国际</a></li>
                    <li><a href="#">苏宁Outlets</a></li>
                    <li><a href="#">金融</a></li>
                    <li><a href="#">直播</a></li>
                </ul>
            </div>
            <img style="position: relative;left: 530px;" src="//image1.suning.cn/uimg/cms/img/154138224612143883.png" alt="">
        </div>
        <div class="firstScreen">
            <!-- <div class="fs-bg">
                <img src="//image3.suning.cn/uimg/cms/img/154183774861039676.png" alt="">
                <img src="//image3.suning.cn/uimg/cms/img/154183732506962658.png" alt="">
            </div> -->
            <div class="list-item">
                <ul class="index-list">
                    <li>
                        <router-link to="/home/products">手机</router-link><span>|</span>
                        <a href="#">运营商</a><span>|</span>
                        <a href="#">智能数码</a>
                    </li>
                    <li>
                        <a href="#">电视</a><span>|</span>
                        <a href="#">冰箱</a><span>|</span>
                        <a href="#">空调</a><span>|</span>
                        <a href="#">洗衣机</a>
                    </li>
                    <li>
                        <a href="#">厨卫大电</a><span>|</span>
                        <a href="#">生活家电</a><span>|</span>
                        <a href="#">厨具</a>
                    </li>
                    <li>
                        <a href="#">电脑办公</a><span>|</span>
                        <a href="#">相机</a><span>|</span>
                        <a href="#">DIY</a>
                    </li>
                    <li>
                        <a href="#">家具</a><span>|</span>
                        <a href="#">家电</a><span>|</span>
                        <a href="#">家装</a><span>|</span>
                        <a href="#">家纺</a>
                    </li>
                    <li>
                        <a href="#">食品</a><span>|</span>
                        <a href="#">酒水</a><span>|</span>
                        <a href="#">生鲜</a><span>|</span>
                        <a href="#">特产</a>       
                    </li>
                    <li>
                        <a href="#">美妆</a><span>|</span>
                        <a href="#">个护清洁</a><span>|</span>
                        <a href="#">宠物</a>
                    </li>
                    <li>
                        <a href="#">母婴</a><span>|</span>
                        <a href="#">玩具</a><span>|</span>
                        <a href="#">车床</a><span>|</span>
                        <a href="#">童装</a>       
                    </li>
                    <li>
                        <a href="#">运动</a><span>|</span>
                        <a href="#">户外</a><span>|</span>
                        <a href="#">足球</a><span>|</span>
                        <a href="#">跑步机</a>    
                    </li>
                    <li>
                        <a href="#">男装</a><span>|</span>
                        <a href="#">女装</a><span>|</span>
                        <a href="#">内衣</a><span>|</span>
                        <a href="#">鞋靴</a>    
                    </li>
                    <li>
                        <a href="#">箱包</a><span>|</span>
                        <a href="#">钟表</a><span>|</span>
                        <a href="#">珠宝</a><span>|</span>
                        <a href="#">艺术</a>    
                    </li>
                    <li>
                        <a href="#">汽摩</a><span>|</span>
                        <a href="#">二手车</a><span>|</span>
                        <a href="#">汽车用品</a>
                    </li>
                    <li>
                        <a href="#">图书</a><span>|</span>
                        <a href="#">童书</a><span>|</span>
                        <a href="#">教辅教材</a>    
                    </li>
                    <li>
                        <a href="#">医药健康</a><span>|</span>
                        <a href="#">计生情趣</a>
                   
                    </li>
                    <li>
                        <a href="#">理财</a><span>|</span>
                        <a href="#">分期</a><span>|</span>
                        <a href="#">保险</a><span>|</span>
                        <a href="#">房产</a>    
                    </li>
                </ul>            
            </div>
            <div class="carousel">
                <!-- <img src="//image5.suning.cn/uimg/aps/material/154183736786584288.jpg" alt=""> -->
                <div class="block">
                    <el-carousel :interval="2000" height="480px">
                        <el-carousel-item v-for="item in imageList" :key="item.id">
                            <img :src="item.url" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <!-- user info -->
            <div class="user-info">
                <span><img src="../../static/img/logo_1.jpg" alt=""></span>
                <p class="infor">Hi,你好</p>
                <div class="btn">
                    <a href="https://reg.suning.com/person.do" class="register">新人有礼</a>
                    <a href="" class="super">super</a>
                </div>
                <div class="enter">
                        <a href="#" class="yunzuan">领云钻</a>
                        <a href="#" class="quan">领券</a>
                </div>
            </div>
            <div class="toutiao">
                    <ul>
                        <li><a href="https://news.suning.com/wtoutiao/witem2_5857736848.html" target="_blank"><i>[关注]</i>&nbsp;&nbsp;&nbsp;夏饮绿，冬饮红，一年四季喝乌龙</a></li>
                        <li><a href="https://news.suning.com/wtoutiao/witem2_7539414198.html" target="_blank"><i>[热门]</i>&nbsp;&nbsp;&nbsp;千元霸屏机荣耀8X Max，实力圈粉正当红</a></li>
                        <li><a href="https://news.suning.com/wtoutiao/witem2_9687867748.html" target="_blank"><i>[新品]</i>&nbsp;&nbsp;&nbsp;荣耀Magic 2众多黑科技，全面屏+麒麟980</a></li>
                        <li><a href="https://news.suning.com/wtoutiao/witem2_5686679519.html" target="_blank"><i>[评测]</i>&nbsp;&nbsp;&nbsp;沙宣网红款—“小脸洗发水”迷迭香款测评</a></li>
                        <li><a href="https://news.suning.com/wtoutiao/witem2_9687867748.html" target="_blank"><i>[活动]</i>&nbsp;&nbsp;&nbsp;苏宁红孩子&新思路少儿型秀大赛</a></li>
                    </ul>
            </div>
            <div class="kuaijie">
                <ul>
                    <li><a href="#"><i class="el-icon-mobile-phone"></i><p>话费</p></a></li>
                    <li><a href="#"><i class="el-icon-location-outline"></i><p>水电煤</p></a></li>
                    <li><a href="#"><i class="el-icon-share"></i><p>苏宁卡</p></a></li>
                    <li><a href="#"><i class="el-icon-setting"></i><p>理财</p></a></li>
                    <li><a href="#"><i class="el-icon-refresh"></i><p>分期</p></a></li>
                    <li><a href="#"><i class="el-icon-star-off"></i><p>苏宁公益</p></a></li>
                </ul>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="content">
                <div class="pro-title">
                    <img src="//image5.suning.cn/uimg/cms/img/153988075446328271.png" alt="">
                    <p class="cc-info">距离下场</p>
                    <p class="t-time">
                        <span class="hour">00</span><i>:</i>
                        <span class="minutes">00</span><i>:</i>
                        <span class="seconds">00</span>
                    </p>
                    <div class="t-list">
                        <ul>
                            <li><a href="#">22:00场-正在疯抢</a></li>
                            <li><a href="#">10:00场-即将开抢</a></li>
                            <li><a href="#">12:00场-即将开抢</a></li>
                        </ul>
                    </div>
                    <a  class="right-more" href="#">更多抢购</a>
                    <i class="el-icon-d-arrow-right"></i>
                </div>
                <div class="tab-content">
                    <ul class="list-styled">
                        <li v-for="item in flashSale"><a href="#">
                            <img :src="'http://leidtsy.applinzi.com/img/purchase_img/'+item.img" alt="">
                            <p class="title">{{item.title}}</p>
                            <p class="price">
                                    <span class="gbprice"><i>￥</i><em>{{item.new_price}}</em></span>  
                                    <span class="reprice"><i>￥</i><em>{{item.old_price}}</em></span>
                            </p>
                            <span class="progress-line"></span>
                            <p class="precent">已抢<i>0</i>%</p>
                            <!-- <el-progress :percentage="70"></el-progress> -->
                        </a></li>
                        <!-- <li><a href="#">
                            <img src="//image2.suning.cn/uimg/nmps/MBLSPZT/10018869110569876818picH_1_260x260.jpg" alt="">
                            <p class="title">一对活宝  广西百香果五斤装</p>
                            <p class="price">
                                    <span class="gbprice"><i>￥</i><em>39.8</em></span>  
                                    <span class="reprice"><i>￥</i><em>44.90</em></span>
                            </p>
                            <span class="progress-line"></span>
                            <p class="precent">已抢<i>0</i>%</p>
                        </a></li>
                        <li><a href="#">
                            <img src="//image2.suning.cn/uimg/nmps/MBLSPZT/10018869110569876818picH_1_260x260.jpg" alt="">
                            <p class="title">一对活宝  广西百香果五斤装</p>
                            <p class="price">
                                    <span class="gbprice"><i>￥</i><em>39.8</em></span>  
                                    <span class="reprice"><i>￥</i><em>44.90</em></span>
                            </p>
                            <span class="progress-line"></span>
                            <p class="precent">已抢<i>0</i>%</p>
                        </a></li>
                        <li><a href="#">
                            <img src="//image2.suning.cn/uimg/nmps/MBLSPZT/10018869110569876818picH_1_260x260.jpg" alt="">
                            <p class="title">一对活宝  广西百香果五斤装</p>
                            <p class="price">
                                    <span class="gbprice"><i>￥</i><em>39.8</em></span>  
                                    <span class="reprice"><i>￥</i><em>44.90</em></span>
                            </p>
                            <span class="progress-line"></span>
                            <p class="precent">已抢<i>0</i>%</p>
                        </a></li>
                        <li><a href="#">
                            <img src="//image2.suning.cn/uimg/nmps/MBLSPZT/10018869110569876818picH_1_260x260.jpg" alt="">
                            <p class="title">一对活宝  广西百香果五斤装</p>
                            <p class="price">
                                    <span class="gbprice"><i>￥</i><em>39.8</em></span>  
                                    <span class="reprice"><i>￥</i><em>44.90</em></span>
                            </p>
                            <p class="progress-line"></p>
                            <p class="precent">已抢<i>0</i>%</p>
                        </a></li> -->
                    </ul>
                </div>
                <a id="tab-pic" href="#"><img src="//image3.suning.cn/uimg/cms/img/154201992017250541.jpg" alt=""></a>
            </div>
            <div class="goods-module">
                    <div class="goods-dp-module">
                        <div class="title">
                            <h5>人气好货</h5><a href="#"><span>更多精选</span><i class="el-icon-arrow-right"></i></a>
                        </div>
                        <div class="content">
                            <ul>
                                <li><a href="#">
                                    <p class="name">雅培小安素奶粉</p>
                                    <p class="desc"><i>476</i>人说好</p>
                                    <img src="//image1.suning.cn/uimg/b2c/qrqm/0000000000000000000102461620_200x200.jpg?ver=2146&from=mobile" alt="">
                                </a></li>
                                <li><a href="#">
                                    <p class="name">雅培金装奶粉</p>
                                    <p class="desc"><i>476</i>人说好</p>
                                    <img src="//image3.suning.cn/uimg/b2c/qrqm/0000000000000000000122489482_200x200.jpg?ver=2168&from=mobile" alt="">
                                </a></li>
                                <li><a href="#">
                                    <p class="name">可爱多婴儿收口</p>
                                    <p class="desc"><i>476</i>人说好</p>
                                    <img src="//image2.suning.cn/uimg/b2c/qrqm/0000000000000000000612404419_200x200.jpg?ver=2039&from=mobile" alt="">
                                </a></li>
                                <li><a href="#">
                                    <p class="name">MI智能空气净化器</p>
                                    <p class="desc"><i>476</i>人说好</p>
                                    <img src="//image4.suning.cn/uimg/b2c/qrqm/0000000000000000000183893293_200x200.jpg?ver=2059&from=mobile" alt="">
                                </a></li>
                                <li><a href="#">
                                    <p class="name">杯具熊儿童保温杯</p>
                                    <p class="desc"><i>476</i>人说好</p>
                                    <img src="//image5.suning.cn/uimg/b2c/qrqm/0000000000000000000618488071_200x200.jpg?ver=2118&from=mobile" alt="">
                                </a></li>
                                <li><a href="#">
                                    <p class="name">美的智能预约压力锅</p>
                                    <p class="desc"><i>476</i>人说好</p>
                                    <img src="//image2.suning.cn/uimg/b2c/qrqm/0070157217000000000146290354_200x200.jpg?ver=2001&from=mobile" alt="">
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="goods-live-module">
                            <div class="title">
                                <h5>生活部落</h5><a href="#"><span>进入专属部落</span><i class="el-icon-arrow-right"></i></a>
                            </div>
                            <div class="content">
                                <ul>
                                    <li><a href="#">
                                        <p class="name">宝宝营养师</p>
                                        <p class="desc">强身健体优选</p>
                                        <img class="first-img" src="//image.suning.cn/uimg/b2c/qrqm/0070238051000000010606782107_200x200.jpg?ver=2000" alt="">
                                        <img src="//image.suning.cn/uimg/b2c/qrqm/0070212271000000010547843825_200x200.jpg?ver=2000" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">聪明宝贝</p>
                                        <p class="desc">益智小当家</p>
                                        <img  class="first-img" src="//image.suning.cn/uimg/b2c/qrqm/0070237478000000010635766915_200x200.jpg?ver=2000" alt="">
                                        <img src="//image.suning.cn/uimg/b2c/qrqm/0070237478000000010637210242_200x200.jpg?ver=2000" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">美丽孕妈</p>
                                        <p class="desc">十月美丽修行</p>
                                        <img class="first-img" src="//image.suning.cn/uimg/b2c/qrqm/0070233148000000010691607600_200x200.jpg?ver=2000" alt="">
                                        <img src="//image.suning.cn/uimg/b2c/qrqm/0070225074000000010607953387_200x200.jpg?ver=2000" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">孩童小伙伴</p>
                                        <p class="desc">童趣乐翻天</p>
                                        <img class="first-img" src="//image.suning.cn/uimg/b2c/qrqm/0070220437000000010603397013_200x200.jpg?ver=2000" alt="">
                                        <img src="//image.suning.cn/uimg/b2c/qrqm/0070237478000000010607130233_200x200.jpg?ver=2000" alt="">
                                    </a></li>
                                </ul>
                            </div>
                    </div>
                    <div class="goods-phb-module">
                                <div class="title">
                                    <h5>排行榜</h5><a href="#"><span>精品风向标</span><i class="el-icon-arrow-right"></i></a>
                                </div>
                                <div class="content">
                                    <div class="first-list">
                                        <p  class="cate-title">休闲食品</p>
                                        <ul>
                                            <li><a href="#">
                                                <img src="//imgservice.suning.cn/uimg1/b2c/image/SSYH6FcR5xrEbNMv68kMPg==.jpg?format=120h_120w_4e_80q" alt="">
                                                <p class="name">好吃点 饼干 零食 熊字饼115g</p>
                                                <p class="price"><i>￥</i>3<em>.90</em></p>
                                            </a></li>
                                            <li><a href="#">
                                                <img src="//imgservice.suning.cn/uimg1/b2c/image/IhvNyz3OIQPdLFOtRsLXIA.jpg?format=120h_120w_4e_80q" alt="">
                                                <p class="name">好丽友(Orion) 糕点 巧克力派68g/盒 2枚(蛋糕礼盒)</p>
                                                <p class="price"><i>￥</i>4<em>.40</em></p>
                                            </a></li>
                                            <li><a href="#">
                                                <img src="//imgservice.suning.cn/uimg1/b2c/image/7W4OXfj_6ITogM44lvzbFA.jpg?format=120h_120w_4e_80q" alt="">
                                                <p class="name">好吃点 饼干零食 香脆腰果饼800g(饼干礼盒)</p>
                                                <p class="price"><i>￥</i>17<em>.90</em></p>
                                            </a></li>
                                        </ul>
                                    </div>
                                     <div class="second-list">
                                        <p  class="cate-title">厨房小电</p>
                                        <ul>
                                            <li><a href="#">
                                                <img src="//imgservice.suning.cn/uimg1/b2c/image/tajUnUEQFNVwaoUlDv8UTA.jpg?format=120h_120w_4e_80q" alt="">
                                                <p class="name">荣事达（Royalstar）韩式多功能电热锅HG-1593电火锅5升大容量双管加热不沾内锅可立把手锅盖</p>
                                                <p class="price"><i>￥</i>79<em>.00</em></p>
                                            </a></li>
                                            <li><a href="#">
                                                <img src="//imgservice.suning.cn/uimg1/b2c/image/ZGuiwRosul0YP9tbckf9cg.jpg?format=120h_120w_4e_80q" alt="">
                                                <p class="name">苏泊尔（SUPOR)多用途电火锅 H3030YK804-150 三档火力 经久耐用 多功能家用鸳鸯火锅 一锅双味</p>
                                                <p class="price"><i>￥</i>169<em>.00</em></p>
                                            </a></li>
                                            <li><a href="#">
                                                <img src="//imgservice.suning.cn/uimg1/b2c/image/XUMc3UOhUjxjuUW5AWuRvA.jpg?format=120h_120w_4e_80q" alt="">
                                                <p class="name">利仁(Liven)HG-X1000 电火锅 多功能电热杯 学生锅宿舍电煮锅 迷你家用煮面锅 蓝色煮面小电锅涮煮功能</p>
                                                <p class="price"><i>￥</i>49<em>.00</em></p>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                    </div>
                    <div class="goods-outlets-module">
                            <div class="title">
                                <h5>苏宁Outlets</h5><a href="#"><span>更多大牌特卖</span><i class="el-icon-arrow-right"></i></a>
                            </div>
                            <div class="content">
                                <ul>
                                    <li class="first"><a href="#">
                                        <p class="name">大牌特卖</p>
                                        <p class="desc">施华洛世奇满298减200</p>
                                        <img src="//image1.suning.cn/uimg/cms/img/154244605027363875.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">阿玛尼 时尚腕表</p>
                                        <p class="desc">全场6.0折起</p>
                                        <img src="//image3.suning.cn/uimg/cms/img/154219076810389425.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">茵曼 魅力冬装</p>
                                        <p class="desc">2件8折</p>
                                        <img src="//image5.suning.cn/uimg/cms/img/154219155515588318.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">GXG 型格男装</p>
                                        <p class="desc">2件8.5折</p>
                                        <img src="//image4.suning.cn/uimg/cms/img/154219098499564553.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">李宁 潮跑型动</p>
                                        <p class="desc">全场1.4折起</p>
                                        <img src="//image5.suning.cn/uimg/cms/img/154219130123716939.jpg" alt="">
                                    </a></li>
                                </ul>
                            </div>
                    </div>
                    <div class="goods-sngj-module">
                            <div class="title">
                                <h5>苏宁国际</h5><a href="#"><span>更多国际尖货</span><i class="el-icon-arrow-right"></i></a>
                            </div>
                            <div class="content">
                                <ul>
                                    <li class="first"><a href="#">
                                        <p class="name">苏宁国际</p>
                                        <p class="desc">美国先锋榜 满199-60</p>
                                        <img src="//image4.suning.cn/uimg/cms/img/154236581006411664.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">国际直营 正品保证</p>
                                        <p class="desc">闪电发货</p>
                                        <img src="//image1.suning.cn/uimg/cms/img/154159418963461769.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">美国苏宁 黑五必买</p>
                                        <p class="desc">满199减60</p>
                                        <img src="//image2.suning.cn/uimg/cms/img/154236631204505860.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">大牌保健 原装进口</p>
                                        <p class="desc">3件7折</p>
                                        <img src="//image5.suning.cn/uimg/cms/img/154227270785667236.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">最强剁手榜 爆款汇聚</p>
                                        <p class="desc">尖货不得不败</p>
                                        <img src="//image4.suning.cn/uimg/cms/img/154193737694245145.jpg" alt="">
                                    </a></li>
                                </ul>      
                             </div>
                    </div>
                    <div class="goods-jiadian-module">
                            <div class="title">
                            <h5>生活家电</h5><a href="#"><span>更多生活家电</span><i class="el-icon-arrow-right"></i></a>
                            </div>
                            <div class="content">
                                <ul>
                                    <li class="first"><a href="#">
                                        <p class="name">感恩生活 典雅享受</p>
                                        <p class="desc">一件9折 两件88折</p>
                                        <img src="//image1.suning.cn/uimg/cms/img/154237474369680815.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">生活家电 超值优惠</p>
                                        <p class="desc">9.9元抢好货</p>
                                        <img src="//image2.suning.cn/uimg/cms/img/154237479293525686.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">个护美姿 黑五扫货</p>
                                        <p class="desc">两件88折</p>
                                        <img src="//image3.suning.cn/uimg/cms/img/154237486532326320.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">精选品质 小家电</p>
                                        <p class="desc">低至9.9元</p>
                                        <img src="//image1.suning.cn/uimg/cms/img/154237491684399237.jpg" alt="">
                                    </a></li>
                                    <li><a href="#">
                                        <p class="name">生活家电 感恩预售</p>
                                        <p class="desc">最高省5000</p>
                                        <img src="//image5.suning.cn/uimg/cms/img/154237495353627169.jpg" alt="">
                                    </a></li>
                                </ul>            
                            </div>
                    </div>
                    
            </div>
            <div class="pindao-enter">
                <div class="left-enter">
                    <ul>
                        <li class="item1"><a href="#">
                            <span class="line n-line"></span>
                            <p class="name">苏宁生鲜</p>
                            <span class="line w-line"></span>
                            <p class="desc">每满99减30</p>
                            <img src="//image1.suning.cn/uimg/cms/img/154233222300075715.png" alt="">
                        </a></li>
                        <li class="item2"><a href="#">
                            <span class="line n-line"></span>
                            <p class="name">企业采购</p>
                            <span class="line w-line"></span>
                            <p class="desc">电脑办公爆款直降1000元</p>
                            <img src="//image4.suning.cn/uimg/cms/img/154226937820862657.png" alt="">
                        </a></li>
                        <li class="item3"><a href="#">
                            <span class="line n-line"></span>
                            <p class="name">苏宁智能</p>
                            <span class="line w-line"></span>
                            <p class="desc">智能新品限时特惠</p>
                            <img src="//image2.suning.cn/uimg/cms/img/154233627917051136.png" alt="">
                        </a></li>
                        <li class="item4"><a href="#">
                            <span class="line n-line"></span>
                            <p class="name">苏宁众筹</p>
                            <span class="line w-line"></span>
                            <p class="desc">智能拟光化妆镜</p>
                            <img src="//image5.suning.cn/uimg/cms/img/154198918145514705.png" alt="">
                        </a></li>
                        <li class="item5"><a href="#">
                            <span class="line n-line"></span>
                            <p class="name">二手优品</p>
                            <span class="line w-line"></span>
                            <p class="desc">低价抢iPhone</p>
                            <img src="//image4.suning.cn/uimg/cms/img/154159355716820149.png" alt="">
                        </a></li>
                        <li class="item6"><a href="#">
                            <span class="line n-line"></span>
                            <p class="name">领券中心</p>
                            <span class="line w-line"></span>
                            <p class="desc">超市全品类满99减35</p>
                            <img src="//image5.suning.cn/uimg/cms/img/154250633892534925.png" alt="">
                        </a></li>
                    </ul>
                </div>
                <div class="wrapper">
                    <div class="title"><h5>苏宁直播</h5></div>
                    <div class="bigshow-wrapper">
                        <ul>
                            <li><a href="#">
                                <div class="black-opacity">
                                    <span></span>
                                    <img src="//image1.suning.cn/uimg/cms/img/154269119435382604.jpg" alt="">
                                    <i class="hf">回放</i>
                                    <div class="black-cover"></div>
                                    <p class="name">饱满又大颗的神奇果子</p>                                   
                                </div>    
                            </a></li>
                            <li><a href="#">

                            </a></li>
                            <li><a href="#">

                            </a></li>
                        </ul>
                    </div>
                    <div class="smallshow-wrapper">
                        <ul>
                            <li><a href="#">
                                <img src="//image1.suning.cn/uimg/cms/img/154269119435382604.jpg" alt="">
                            </a></li>
                            <li><a href="#">
                                <img src="//image2.suning.cn/uimg/cms/img/154269128176425924.jpg" alt="">
                            </a></li>
                            <li><a href="#">
                                <img src="//image3.suning.cn/uimg/cms/img/154269134184773133.jpg" alt="">
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div class="right-enter">
                    <ul>
                        <li class="item7"><a href="#">
                            <p class="name">苏宁金融</p>
                            <p class="desc">支付抽奖送金币</p>
                            <img src="//image4.suning.cn/uimg/cms/img/154235950177623941.png" alt="">
                        </a></li>
                        <li class="item8"><a href="#">
                            <p class="name">中华特色馆</p>
                            <p class="desc">前200第二件半价</p>
                            <img src="//image1.suning.cn/uimg/cms/img/154263008881544425.png" alt="">
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){return {
            imageList:[
                {id:0,url:require("../assets/img/154017900985152207.jpg")},
                {id:1,url:require("../assets/img/154182126235046124.jpg")},
                {id:2,url:require("../assets/img/154184825859760084.jpg")},
                {id:3,url:require("../assets/img/154192426711174491.jpg")},
                {id:4,url:require("../assets/img/154193272294346345.jpg")},
                {id:5,url:require("../assets/img/154193462970080847.jpg")},
                {id:6,url:require("../assets/img/154193796440223880.jpg")},
                {id:7,url:require("../assets/img/e249c10192394314a9c0138f46085c25.jpg")}
            ],
            flashSale:[]
         }},
         mounted(){
             this.axios.get("http://leidtsy.applinzi.com:5050/index/purchase").then(res=>{
                 this.flashSale=res.data
             })
         }
    }
</script>
<style scoped>
    *{margin: 0;padding: 0;text-decoration: none;box-sizing:border-box;list-style: none;}

    .app-home .home-container{
        width: 100%;
        height: 38px; 
        overflow-x: hidden; 
    }
    .nav-index-hook{
        position:absolute;
        left: 100px;
        float: left;  
    }
    #index-goods,#doubelev{
        width: 96px;
        line-height: 38px;
        background: #f80;
        color:#fff;
        font-size: 13px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        float: left;
    }
    #doubelev{
        width: 94px;
    }
    .nav-index{
       float: left;
       position: absolute;
       left:300px;
    }
    .nav-index .nav-index-title li {
        float: left;
    }
    .nav-index .nav-index-title li a{
        text-decoration: none;
        font-size:15px;
        font-weight: bold;
        float: left;
        line-height:38px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color:#2c3e50;
        text-align: center;
        margin-right: 20px;
    }
    .nav-index .nav-index-title li a:hover{
        color:orange;
    }
    .firstScreen{
        width: 100%;
        height: 482px;
        margin:auto;
    }
    .firstScreen .fd-bg img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 482px;
    }
    .list-item{
        width: 190px;
        height: 480px;
        background: #333;
        float: left;
        margin-left: 100px;
    }
    .list-item .index-list span{
        color:#fff;
        padding: 0 4px 0 4px;
    }
    .list-item .index-list li{
        position:relative;
        width: 175px;
        height: 32px;
        line-height:32px;
        text-align: left;
        padding-left: 10px;
       
    }
    .list-item .index-list li a{
        font-family: "Microsoft Yahei";
        font-size: 12px;
        color:#fff;
        text-decoration: none;
    }
    .carousel{
        width: 830px;
        height: 480px;
        float: left;   
      }
    .carousel  .el-carousel-item{
        width: 830px;
        height: 480px;
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        margin: 0;
      }
    #imglist{
        width: 800px;
        height: 480px;
        display: block;
    }
     .carousel .el-carousel-item:nth-child(2n) {
         background-color: #99a9bf;
      }
      
    .carousel.el-carousel-item:nth-child(2n+1) {
         background-color: #d3dce6;
      }
    .user-info{
          width: 170px;
          height: 169px;
          float: left;
      }
    .user-info img{
          width: 52px;
          height: 52px;
          margin-top: 20px;
      }
    .user-info p.infor{
          font-size:14px;
          margin-top: 8px;
      }
    .user-info .btn{
          width: 170px;
          height: 22px;
          padding:0;
      }
    .user-info .btn a{
          display:inline-block;
          width: 70px;
          height: 22px;
          border:1px solid orange;
          text-align: center;
          margin:0 3px;
          font-size:12px;
          line-height: 22px;
          text-decoration: none;
          color:orange;
       
      }
    .user-info .enter a{
          display: inline-block;
          width: 70px;
          height: 18px;
          background: #ffe4db;
          border-radius: 9px;
          font-size:12px;
          color:rgb(235, 97, 120);
          margin:10px  3px;
          text-decoration: none;
      }
    .toutiao {
          width: 150px;
          height: 145px;
          clear:both;
          overflow:hidden;
          display:inline-block;
          position: relative;
          left:-25px;
    
      }
    .toutiao ul li a{
          color:#333;
          text-decoration: none;
    
      }
      .toutiao ul li{
          text-align: left; 
          font-size:12px;
          margin:8px 0px;
    }
      .toutiao ul li a i{
          color:#f60;
          font-style:normal;
      }
      .kuaijie{
          width: 170;
          height: 145px;
      }
      .kuaijie ul li{
          float: left;  
          font-size:12px;
      }
      .kuaijie ul li a{
          width: 56px;
          height: 72px;
          display:block;
          margin: 1px 1px;
          text-decoration: none;
      }
      .kuaijie ul li a i{
          display:inline-block;
          color:#f90;
          width: 24px;
          height: 36px;
      }
      .kuaijie ul li a p{
          color:#333;
          margin-bottom: 0;
     }
     .kuaijie ul li a p:hover{color:#f90}
     .content-wrapper {
         width: 100%;
         background: rgb(245, 242, 242);
         padding: 20px 0;
     }
     .content-wrapper .content .pro-title{
         width: 1300px;
         height: 47px;
         margin:0 100px;
         background: #fff;
     }
     .content-wrapper .content .pro-title img{
        float: left;
        width: 80px;
        height: 20px;
        margin: 14px 0 0 20px;
    }
     .content-wrapper .content .pro-title .cc-info{
         float: left;
         height: 16px;
         margin: 15px 0 0 20px;
         line-height: 16px;
         font-size: 12px;
     }
     .content-wrapper .content .pro-title .t-time{
         height: 20px;
         line-height: 20px;
         float: left;
         margin:14px 0 0 8px;
     }
     .content-wrapper .content .pro-title .t-time i{
         font-style: normal;
         font-weight: bold;
         float: left;
     }
     .content-wrapper .content .pro-title .t-time span{
         width: 20px;
         height: 20px;
         color:#fff;
         margin:0 4px 0 4px;
         padding: 1px;
         border-radius: 5px;
         background: #333;
         float: left;
         vertical-align: middle;
     }
     .content-wrapper .content .pro-title .t-list{
         float: left;
         width: 579px;
         height: 36px;
         margin-left: 50px;
     }
     .content-wrapper .content .pro-title .t-list li{
         width: 133px;
         height: 24px;
         line-height:24px;
         font-size: 14px;
         float: left;
         margin:12px 60px 0 0;
         cursor: default;
         text-align: center;
     }
     .content-wrapper .content .pro-title .t-list li a{ color:#000;}
     .content-wrapper .content .pro-title .t-list li a:hover{
         color:#fff;
         border-radius: 20px;
         background-image:linear-gradient(to right,rgb(236, 99, 74) 30%,rgb(236, 135, 117) 60%,rgb(241, 174, 163) 100%);
         text-decoration: none;
         padding: 5px 8px;
     }
     .content-wrapper .content .pro-title .right-more{
         position: relative;
         margin-left:50px;
         font-size: 14px;
         color:#999;
         line-height: 47px;
         padding-right: 18px;
         text-decoration: none;
         cursor: pointer;
     }
     .content-wrapper .content .tab-content{
         width: 1000px;
         height: 260px;
         float: left;
         margin-left:100px;
         overflow: hidden;   
         background: #fff;
         border-top:1px solid #ccc;
     }
     .content-wrapper .content .tab-content ul{
        width: 4000px;
        height: 260px;
     }
     .content-wrapper .content .tab-content ul li{
         width: 199px;
         height: 240px;
         float: left;
     }
     #tab-pic{
         float: left;
         width: 170px;
         height: 240px;
         margin: 8px;
     }
     .content-wrapper .content .tab-content li a{
         float: left;
         width: 200px;
         height: 240px;
         border-right:1px solid #ccc;
         text-decoration: none;
     }
     .content-wrapper .content .tab-content li img{
         display: block;
         width: 159px;
         height: 159px;
         margin:10px 20px;
     }
     .content-wrapper .content .tab-content li p.title{
         width: 156px;
         height: 16px;
         margin: 0 0 0 20px;
         line-height:16px;
         overflow:hidden;
         color:#333;
         font-size:12px;
     }
     .content-wrapper .content .tab-content li p.price{
         width: 179px;
         height: 21px;
         margin: 6px 0 0 20px;
         text-align: left;
     }
     .content-wrapper .content .tab-content li .price .gbprice i,.gbprice em{
         font-style:normal;
         line-height: 21px;
         font-size:16px;
         font-weight: bold;
         color:#f60;    
         cursor: pointer;
     }
     .content-wrapper .content .tab-content li .price .reprice i, .reprice em{
        font-style:normal;
         color:#999;
         text-decoration: line-through;
         margin-left: 6px;
         font-size:12px;
     }
     .content-wrapper .content .tab-content li .progress-line{
         float: left;
         width: 100px;
         height: 6px;
         background: pink;
         border-radius: 10px;
         margin: 8px 0 0 20px;
         /* background:url("//res.suning.cn/project/cmsWeb/suning/homepage/v6/css/images/index.png?v=2018101801") -561px -74px; */
     }
     .content-wrapper .content .tab-content li p.precent{
         width: 42px;
         height: 18px;
         float: left;
         color:#999;
         font-size:10px;
         margin:0 0 0  10px;
     }
     .content-wrapper .goods-module{
         margin-left: 100px;
     }
     .content-wrapper .goods-module .goods-dp-module,.goods-live-module,.goods-phb-module,.goods-outlets-module,.goods-sngj-module,.goods-jiadian-module{
         width: 390px;
         height: 427px;
         float: left;
         margin: 15px 6px 0 0;
         background: #fff;
     }
     .content-wrapper .goods-module .goods-dp-module .title,.goods-live-module .title ,.goods-phb-module .title,.goods-outlets-module .title,.goods-sngj-module .title,.goods-jiadian-module .title{
         width: 390px;
         height: 45px;
         background: #3b8c94;
         color:#fff;
     }
     .content-wrapper .goods-module .goods-dp-module .title h5,.goods-live-module .title h5 ,.goods-phb-module .title h5,.goods-outlets-module .title h5,.goods-sngj-module .title h5,.goods-jiadian-module .title h5{
         float: left;
         font: bold 18px/45px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
         line-height: 45px;
         padding-left: 15px;
     }
     .content-wrapper .goods-module .goods-dp-module .title a,.goods-live-module .title a,.goods-phb-module .title a,.goods-outlets-module .title a,.goods-sngj-module .title a,.goods-jiadian-module .title a{
         text-decoration: none;
         font-size:12px;
         color:#fff;
         line-height: 45px;
         float:right;
         padding-right: 15px;
     }
     .content-wrapper .goods-module .goods-dp-module .content,.goods-live-module .content,.goods-phb-module .content,.goods-outlets-module .content,.goods-sngj-module .content,.goods-jiadian-module .content{
         width: 390px;
         height: 427px;
         margin:0 auto;
     }  
     .content-wrapper .goods-module .goods-dp-module .content ul li {
         width: 184px;
         height: 120px;
         float: left;
         padding: 0 3px 3px 0;
     }
     .content-wrapper .goods-module .goods-dp-module .content ul li a,.goods-live-module .content ul li a{text-decoration: none;}
     .content-wrapper .goods-module .goods-dp-module .content ul li{
         border-right:1px solid rgb(196,184,184);
         border-bottom:1px solid rgb(196,184,184);
     }
     .content-wrapper .goods-module .goods-dp-module .content ul li:nth-child(2n){
         border-right:0;
     }
     .content-wrapper .goods-module .goods-dp-module .content ul li:nth-child(5){
         border-bottom:0;
     }
     .content-wrapper .goods-module .goods-dp-module .content ul li:nth-child(6){
         border-bottom: 0;
     }
     .content-wrapper .goods-module .goods-dp-module .content ul li img{
         display: block;
         width: 90px;
         height: 90px;
         /* position: absolute; */
         float:right;
         position: relative;
         top:-50px;
         left:1px;     
     }
     .content-wrapper .goods-module .goods-dp-module .content ul li .name{
         width: 72px;
         height: 38px;
         color:#333;
         font:14px/20px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
         margin: 14px 0 0 15px;
         text-align: left;
     }
     .content-wrapper .goods-module .goods-dp-module .content ul li .desc{
         width: 72px;
         height: 16px;
         margin: 10px 0 0 15px;
         font:12px/20px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB"; 
         color:#999;
         text-align: left;
     }
     .content-wrapper .goods-module .goods-dp-module .content ul li .desc i{
         font-style: normal;
         color:#3b8c94;
     }
     .content-wrapper .goods-module .goods-live-module .title{
         background: #e66a07;
     }
     .content-wrapper .goods-module .goods-live-module .content ul li{
        width: 184px;
        height: 180px;
        float: left;
    }
    .content-wrapper .goods-module .goods-live-module .content ul li{
        border-right: 1px solid rgb(196, 184, 184);
        border-bottom: 1px solid rgb(196, 184, 184);
    }
    .content-wrapper .goods-module .goods-live-module .content ul li:nth-child(2n){
        border-right:0;
    }
    .content-wrapper .goods-module .goods-live-module .content ul li:nth-child(3){
        border-bottom:0;
    }
    .content-wrapper .goods-module .goods-live-module .content ul li:nth-child(4){
        border-bottom: 0;
    }
    .content-wrapper .goods-module .goods-live-module .content ul li .name{
         width: 86px;
         height: 20px;
         margin:10px 0 5px 8px;
         padding: 0 8px;
         overflow:hidden;
         float: left;
         background: #e66a07;
         border-radius: 20px;
         color:#fff;
         font: 14px/20px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
     } 
    .content-wrapper .goods-module .goods-live-module .content ul li p.desc{
         width: 144px;
         height: 16px;
         overflow:hidden;
         color:#999;
         font: 12px/16px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
         text-align: left;
         margin:10px 0 0 15px;
     }
    .content-wrapper .goods-module .goods-live-module .content ul li img{
         float: left;
         width: 90px;
         height: 90px;
         vertical-align: middle;
         margin-top: 14px;   
         border-style: none;
     }
    .content-wrapper .goods-module .goods-phb-module .title{
         background: #b62323;
     }
     .content-wrapper .goods-module .goods-phb-module .content .first-list,.second-list{
         width: 369px;
         height: 180px;
     }
     .content-wrapper .goods-module .goods-phb-module .content .first-list{
         border-bottom: 1px solid rgb(196,184,184);
     }
    .content-wrapper .goods-module .goods-phb-module .content ul li{
        float: left;
        width: 123px;
        height: 166px;
    }
    .content-wrapper .goods-module .goods-phb-module .content ul li img{
        display: block;
        width: 80px;
        height: 80px;
        margin:18px auto 0;
    }
    .content-wrapper .goods-module .goods-phb-module .content .first-list .cate-title,.second-list .cate-title{
        /* position:relative;
        top:14px;
        left:0; */
        width: 66px;
        height:22px;
        color:#fff;
        background: #c72c2c;
        border-radius: 12px;
        margin:14px 0 0 0;
        font: 14px  "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    }
    .content-wrapper .goods-module .goods-phb-module .content ul li a{text-decoration: none;}
    .content-wrapper .goods-module .goods-phb-module .content ul li .name{
        width: 100px;
        height: 28px;
        line-height:28px;
        overflow:hidden;
        color:#333;
        margin:0 0 0 10px;
        font: 12px/14px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
        display: block;
    }
    .content-wrapper .goods-module .goods-phb-module .content .first-list li .price,.second-list li .price{
        width: 112px;
        height: 22px;
        margin: 1px 0 0 11px;
        color:#b62323;
        font: 14px/22px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
        text-align: left;
    }
    .content-wrapper .goods-module .goods-phb-module .content .first-list li .price i,.second-list li .price i{
        font-style:normal;
        font-size:12px;
    }
    .content-wrapper .goods-module .goods-phb-module .content .first-list li .price em,.second-list li .price em{
        font-style:normal;
        font-size:8px;
    }
    .content-wrapper .goods-module .goods-outlets-module .title{
         background: #c43d7e;
     }
     .content-wrapper .goods-module .goods-sngj-module .title{
         background: #6d55bd;
     }
     .content-wrapper .goods-module .goods-jiadian-module .title{
         background: #325bb5;
     }
    .content-wrapper .goods-module .goods-outlets-module .content ul li,.goods-sngj-module .content ul li,.goods-jiadian-module .content ul li{
        float: left;
        width: 184px;
        height: 120px;
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li a,.goods-sngj-module .content ul li a,.goods-jiadian-module .content ul li a{
        text-decoration: none;
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li p,.goods-sngj-module .content ul li p,.goods-jiadian-module .content ul li p{
        margin-bottom: 0;
        overflow:hidden;
        text-align: left;
        margin-left: 12px;
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li,.goods-sngj-module .content ul li,.goods-jiadian-module .content ul li{
        border-left: 1px solid rgb(196, 184, 184);
        border-bottom: 1px solid rgb(196, 184, 184);
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li.first,.goods-sngj-module .content ul li.first,.goods-jiadian-module .content ul li.first{
        width: 184px;
        height: 240px;
        border-left:0;
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li:nth-child(4),.goods-sngj-module .content ul li:nth-child(4),.goods-jiadian-module .content ul li:nth-child(4){
        border-left:0;
        border-bottom: 0;
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li:nth-child(5),.goods-sngj-module .content ul li:nth-child(5),.goods-jiadian-module .content ul li:nth-child(5){
        border-bottom: 0;
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li.first img,.goods-sngj-module .content ul li.first img,.goods-jiadian-module .content ul li.first img{
        width: 160px;
        height: 160px;
        display: block;
        position:relative;
        top:30px;
        left:0px;
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li.first .name,.goods-sngj-module .content ul li.first .name,.goods-jiadian-module .content ul li.first .name{
        width: 140px;
        height: 20px;
        color:#333;
        font: 14px/20px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li.first .desc,.goods-sngj-module .content ul li.first .desc,.goods-jiadian-module .content ul li.first .desc{
        width: 144px;
        height: 16px;
        color:#c43e7e;
        margin:10px 0 0 15px;
        font: 12px/16px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li img,.goods-sngj-module .content ul li img,.goods-jiadian-module .content ul li img{
        width: 90px;
        height: 90px;
        position: relative;
        left:45px;
        top:-60px;
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li .name,.goods-sngj-module .content ul li .name,.goods-jiadian-module .content ul li .name{
        width: 72px;
        height: 40px;
        color:#333;
        font: 14px/20px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB"; 
        padding-top: 3px;
    }
    .content-wrapper .goods-module .goods-outlets-module .content ul li .desc,.goods-sngj-module .content ul li .desc,.goods-jiadian-module .content ul li .desc{
        width: 72px;
        height: 16px;
        color:#999;
        margin:12px 0 0 15px;
        font: 12px/16px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    }
    .content-wrapper .pindao-enter{
        clear:both;
        width: 1190px;
        height: 530px;
        margin:0 95px;
    }
    .content-wrapper .pindao-enter .left-enter{
        float: left;
        width: 790px;
        height: 530px;
        padding-top: 15px;
    }
    .content-wrapper .pindao-enter .left-enter ul li{
        position: relative;
        float: left;
        width: 390px;
        height: 170px;
        margin: 0 4px 4px 0;
    }
    .content-wrapper .pindao-enter .left-enter ul li a{text-decoration: none;}
    .content-wrapper .pindao-enter .left-enter ul li .line{
        display: block;
        height: 2px;
        width: 154px;
        border-radius: 50px;
        margin:0 0 5px 30px;
        background-image:linear-gradient(to right,#fff 0,#cfc0c0 30%,rgb(255, 255, 255) 100%);
    }
    .content-wrapper .pindao-enter .left-enter ul li .n-line{
        width: 78px;
        margin-top: 50px;
    }
    .content-wrapper .pindao-enter .left-enter ul li img{
        display: block;
        width: 170px;
        height: 170px;
        position: absolute;;
        top:5px;
        left:200px;
    }
    
    .content-wrapper .pindao-enter .left-enter ul li.item1{
        background-image:linear-gradient(to right,#e89621  0,#f5c568 100%);
    }
    .content-wrapper .pindao-enter .left-enter ul li.item2{
        background-image:linear-gradient(to right,#325bb4  0,#4c9afe 100%);
    }
    .content-wrapper .pindao-enter .left-enter ul li.item3{
        background-image:linear-gradient(to right,#1c9daf  0,#40cda7 100%);
    }
    .content-wrapper .pindao-enter .left-enter ul li.item4{
        background-image:linear-gradient(to right,#d13837  0,#df6d4f 100%);
    }
    .content-wrapper .pindao-enter .left-enter ul li.item5{
        background-image:linear-gradient(to right,#ca4283  0,#eb75cf 100%);
    }
    .content-wrapper .pindao-enter .left-enter ul li.item6{
        background-image:linear-gradient(to right,#5d40c1  0,#8c5fdb 100%);
    }
    .content-wrapper .pindao-enter .left-enter ul li p{
        text-align: left;
        display: block;
        margin: 0 0 0 30px;
    }
    .content-wrapper .pindao-enter .left-enter ul li .name,ul li .desc{
        width: 160px;
        height: 26px;
        margin: 5px 0 5px 30px;
        color:#fff;
        font: bold 20px/26px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
        overflow: hidden;
    }
    .content-wrapper .pindao-enter .left-enter ul li .desc{
        font:14px/20px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    }
    .content-wrapper .pindao-enter .wrapper{
        float: left;
        width: 390px;
        height: 227px;
        /* overflow: hidden; */
   }
    
    .content-wrapper .pindao-enter .wrapper .title{
        width: 390px;
        height: 45px;
        background: #3f3435;
        margin-top: 15px;
    }
    
    .content-wrapper .pindao-enter .wrapper .title h5{
        float: left;
        padding-left: 20px;
        color:#fff;
        font:bold 18px/45px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    }
   
    .content-wrapper .pindao-enter .wrapper .bigshow-wrapper{
        width: 390px;
        height: 227px;
        box-sizing: border-box;
    }
    
    .content-wrapper .pindao-enter .wrapper .bigshow-wrapper ul li .hf{
        float: left;
        position: relative;
        top:-210px;
        left: 30px; 
        width: 58px;
        height: 18px;
        color:#fff;
        font:10px/18px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
        padding-left: 14px;
        border-radius: 20px;
        background: #000;
        opacity: .6;
        
    }
     
    .content-wrapper .pindao-enter .wrapper .bigshow-wrapper ul li img{
        display: block;
        width: 390px;
        height: 227px; 
    }
    
    .content-wrapper .pindao-enter .wrapper .bigshow-wrapper ul li .black-opacity{
        background: #000;
        opacity:.8; 
    }
    /* .content-wrapper .pindao-enter .wrapper .bigshow-wrapper ul li .black-opacity span{
        display: block;
        position:absolute;
        background: #000;
        opacity:.4; 
        width: 50px;
        height: 50px;
        background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543054657370&di=61a97c65cf0a9a8197e91c5a633925af&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F45%2F31%2F5814de4d8c6d6_610.jpg);
    }  */
    .content-wrapper .pindao-enter .wrapper .bigshow-wrapper ul li .black-cover{
        float: left;
        position: relative;
        top: -63px;
        width: 390px;
        height: 45px;
        background: #000;
        opacity: .6;
    } 
    .content-wrapper .pindao-enter .wrapper .bigshow-wrapper ul li  p.name{
        float: left;
        position: relative;
        top:-110px;
        padding-left:30px;
        width: 320px;
        height: 45px;
        overflow: hidden;
        text-align: left;
        color:#fff;
        font:14px/45px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    }
    
    .content-wrapper .pindao-enter .wrapper .smallshow-wrapper{
        float: left;
        position: absolute;
        width: 390px;
        height: 73px;
    }
    .content-wrapper .pindao-enter .wrapper .smallshow-wrapper ul{
        width: 1000px;
        height: 73px;
        overflow: hidden;
    }
    .content-wrapper .pindao-enter .wrapper .smallshow-wrapper ul li{
        position: relative;
        float: left;
        width: 128px;
        height: 73px;
    }
    .content-wrapper .pindao-enter .wrapper .smallshow-wrapper ul li img{
        width: 125px;
        height: 73px;
        margin: 3px 3px;
    }
    .content-wrapper .pindao-enter .right-enter{
        float: left;
        width: 390px;
        height: 170px;
        margin-top: 135px;
    }
    .content-wrapper .pindao-enter .right-enter ul{
        width: 390px;
        height: 170px;
    }
    .content-wrapper .pindao-enter .right-enter ul li.item7{
        position:relative;
        float: left;
        width: 190px;
        height: 170px;
        margin: 0 5px 0 0;
        overflow:hidden;
        background-image:linear-gradient(to right,#6ea166  0,#9fc766 100%);
    }
    .content-wrapper .pindao-enter .right-enter ul li.item8{
        position:relative;
        float: left;
        width: 190px;
        height: 170px;
        margin: 0 5px 0 0;
        overflow:hidden;
        background-image:linear-gradient(to right,#4023bb  0,#5871e9 100%);
    }
    .content-wrapper .pindao-enter .right-enter ul li img{
        position:absolute;
        width: 190px;
        height: 100px;
        bottom: 0;
        left: 20px;
    }
    .content-wrapper .pindao-enter .right-enter ul li  a{text-decoration: none;}
    .content-wrapper .pindao-enter .right-enter ul li p.name{
        width: 120px;   
        height: 26px;
        margin: 20px 0 5px 35px;
        color:#fff;
        overflow: hidden;
        font:bold 20px/26px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB"
    }
    .content-wrapper .pindao-enter .right-enter ul li p.desc{
        width: 126px;
        height: 20px;
        font: 14px/20px "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    }
    </style>