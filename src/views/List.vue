<template>
    <div class="home-list">
        <div class="index-title">
            <div class="nav-index-sort">
                <a id="index-goods" href="#" >全部商品分类</a>
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
                    <li><a href="#">苏宁金融</a></li>
                </ul>
            </div>
        </div>   
        <div class="search-path">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>手机/数码/配件</el-breadcrumb-item>
                <el-breadcrumb-item>手机通讯</el-breadcrumb-item>
                <el-breadcrumb-item>手机</el-breadcrumb-item>
                <el-breadcrumb-item>品牌：Apple</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="filter-container">
            <div class="s-left">
                <label>价格</label>
            </div>
            <div class="s-right">
                <a href="#">0-500</a>
                <a href="#">500-1000</a>
                <a href="#">1000-1700</a>
                <a href="#">1700-2800</a>
                <a href="#">2800-4500</a>
                <a href="#">4500-8000</a>
                <a href="#">8000以上</a>
            </div>
            <div class="s-left">
                <label>网络制式</label>
            </div>
            <div class="s-right">
                <a href="#">全网通</a><a href="#">其他</a>
            </div> 
            <div class="s-left">
                <label>机身内存</label>
            </div>
            <div class="s-right">
                <a href="#">512GB</a>
                <a href="#">512GB</a>
                <a href="#">256GB</a>
                <a href="#">128GB</a>
                <a href="#">64GB</a>
                <a href="#">32GB</a>
                <a href="#">16GB</a>
            </div>
            <div class="s-left">
                <label>屏幕尺寸</label>
            </div>
            <div class="s-right">
                <a href="#">6.1英寸以上</a>
                <a href="#">5.6-6.0英寸</a>
                <a href="#">5.5英寸以上</a>
                <a href="#">5.1-5.4英寸</a>
                <a href="#">4.6-4.9英寸</a>
                <a href="#">4.0英寸及以下</a>
            </div>
            <div class="s-left">
                <label>其他选项</label>
            </div>
            <div class="s-right">
                <a href="#">操作系统</a><i class="el-icon-arrow-down"></i>
                <a href="#">运行内存</a><i class="el-icon-arrow-down"></i>
                <a href="#">CPU</a><i class="el-icon-arrow-down"></i>
                <a href="#">后置摄像头</a><i class="el-icon-arrow-down"></i>
                <a href="#">潜质摄像头</a><i class="el-icon-arrow-down"></i>
                <a href="#">电池容量</a><i class="el-icon-arrow-down"></i>
                <a href="#">大家说</a><i class="el-icon-arrow-down"></i>
                <a href="#">颜色</a><i class="el-icon-arrow-down"></i>
            </div>
        </div>
        <div class="second-filter">
            <div class="sort">
                <span>综合</span>
                <span>销量</span>
                <span>评价数</span>
                <span>价格</span>
            </div>
            <div class="price-interval">
                <input type="text" placeholder="￥">
                <span>-</span>
                <input type="text" placeholder="￥">
                <span class="addr">收货地</span>
                <span class="city">北京</span>
            </div>
           <div class="promotion">
                <img src="//image.suning.cn/uimg/asbs/ad/1542986013026_pc_list.png" alt="">
                <span>苏宁服务</span>
                <span>有货商品</span>
                <span>更多</span><i class="el-icon-arrow-down"></i>
           </div>
            <div class="page">
                <i class="el-icon-arrow-left"></i>
                <span class="pageCount">1/16</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div class="phone-list">
            <ul>
                <li class="item-bg" v-for="item in phone_list" @click.stop.prevent="toDetails(item.lid)">
                    <router-link to="">
                    <img  class="bg-img" :src="'http://leidtsy.applinzi.com/img/apple/lg/'+item.img" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">{{item.price}}</span><span class="decimal">.00</span></div>  
                        <a href="#">{{item.title}}</a>
                        <div class="info-config">
                            <span class="memory">{{item.memory}}</span><span>|</span><span class="screen">{{item.screen}}</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">{{item.evaluate}}+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p class="label">
                            <span>大聚惠</span>
                        </p>
                        <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i><span>收藏</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </router-link></li>
                <!-- <li class="item-bg"><a href="#">
                    <img  class="bg-img" src="//imgservice5.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_400w_400h_4e" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">6999</span><span class="decimal">.00</span></div>  
                        <a href="#">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</a>
                        <div class="info-config">
                            <span>64GB</span><span>5.6-6.0英寸</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">2.0万+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p  class="label"><span>大聚惠</span><span>赠品</span></p>
                         <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i><span>收藏</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </a></li>
                 <li class="item-bg"><a href="#">
                    <img  class="bg-img" src="//imgservice5.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_400w_400h_4e" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">6999</span><span class="decimal">.00</span></div>  
                        <a href="#">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</a>
                        <div class="info-config">
                            <span>64GB</span><span>5.6-6.0英寸</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">2.0万+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p  class="label"><span>大聚惠</span><span>赠品</span></p>
                         <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i><span>收藏</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </a></li>
                 <li class="item-bg"><a href="#">
                    <img  class="bg-img" src="//imgservice5.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_400w_400h_4e" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">6999</span><span class="decimal">.00</span></div>  
                        <a href="#">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</a>
                        <div class="info-config">
                            <span>64GB</span><span>5.6-6.0英寸</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">2.0万+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p  class="label"><span>大聚惠</span><span>赠品</span></p>
                         <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i><span>收藏</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </a></li>
                <li class="item-bg"><a href="#">
                    <img  class="bg-img" src="//imgservice5.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_400w_400h_4e" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">6999</span><span class="decimal">.00</span></div>  
                        <a href="#">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</a>
                        <div class="info-config">
                            <span>64GB</span><span>5.6-6.0英寸</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">2.0万+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p  class="label"><span>大聚惠</span>
                         <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i><span>收藏</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </a></li>
                <li class="item-bg"><a href="#">
                    <img  class="bg-img" src="//imgservice5.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_400w_400h_4e" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">6999</span><span class="decimal">.00</span></div>  
                        <a href="#">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</a>
                        <div class="info-config">
                            <span>64GB</span><span>5.6-6.0英寸</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">2.0万+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p  class="label"><span>大聚惠</span><span>赠品</span></p>
                         <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </a></li>
                <li class="item-bg"><a href="#">
                    <img  class="bg-img" src="//imgservice5.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_400w_400h_4e" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">6999</span><span class="decimal">.00</span></div>  
                        <a href="#">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</a>
                        <div class="info-config">
                            <span>64GB</span><span>5.6-6.0英寸</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">2.0万+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p  class="label"><span>大聚惠</span><span>赠品</span></p>
                         <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i><span>收藏</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </a></li>
                <li class="item-bg"><a href="#">
                    <img  class="bg-img" src="//imgservice5.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_400w_400h_4e" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">6999</span><span class="decimal">.00</span></div>  
                        <a href="#">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</a>
                        <div class="info-config">
                            <span>64GB</span><span>5.6-6.0英寸</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">2.0万+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p  class="label"><span>大聚惠</span>
                         <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i><span>收藏</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </a></li>
                <li class="item-bg"><a href="#">
                    <img  class="bg-img" src="//imgservice5.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_400w_400h_4e" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">6999</span><span class="decimal">.00</span></div>  
                        <a href="#">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</a>
                        <div class="info-config">
                            <span>64GB</span><span>5.6-6.0英寸</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">2.0万+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p  class="label"><span>大聚惠</span>
                         <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i><span>收藏</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </a></li>
                <li class="item-bg"><a href="#">
                    <img  class="bg-img" src="//imgservice5.suning.cn/uimg1/b2c/image/Ms2nkwe5iKrLy3CU8-MsaA.png_400w_400h_4e" alt="">
                    <div class="focus-img">
                        <ul>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt="">  </li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                            <li> <img src="//imgservice5.suning.cn/uimg1/b2c/image/lWy_qT2DZXNBubtMk57i-w.png_400w_400h_4e" alt=""></li>
                        </ul>
                    </div>
                    <div class="price-box">
                        <div class="price"><span class="icon">￥</span><span class="new-price">6999</span><span class="decimal">.00</span></div>  
                        <a href="#">A12仿生处理器-6.1英寸-128GB内存-全面屏-面容识别-双卡双待</a>
                        <div class="info-config">
                            <span>64GB</span><span>5.6-6.0英寸</span>
                        </div>
                        <div class="evaluate">
                            <span class="qty">2.0万+</span>
                            <span>评价</span>
                        </div>
                        <p class="store">苏宁自营</p>
                        <p  class="label"><span>大聚惠</span><span>赠品</span></p>
                         <div class="option">
                            <a href="#">
                                <input type="text"><span>对比</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-star-off"></i><span>收藏</span>
                            </a>
                            <a href="#">
                                <i class="el-icon-goods"></i><span>加入购物车</span>
                            </a>
                        </div>
                    </div>
                </a></li> -->
            </ul>
            <div class="clear"></div>
        </div>
        <div class="block" style="margin-top: 30px;width:100%">
            <!-- handleSizeChange每页多少条 -->
            <!-- handleCurrentChange当前页 -->
            <el-pagination  
              @size-change="handleSizeChange"        
              @current-change="handleCurrentChange(pno)"
              :current-page.sync="currentPage"
              :page-size="20"
              layout="total,prev, pager, next"
              :total="listDataNo">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default{
    data(){return { 
        phone_list:[],
        pno:1,
        listDataNo:0,
        currentPage:1
     }},
     mounted(){
        this.axios.get("http://leidtsy.applinzi.com:5050/list/phone_list",{
            params:{pno:0}
        }).then(res=>{
            this.phone_list=res.data.products     
            this.listDataNo=res.data.count
            this.lid=res.data.products.lid 
        })
    },  
    methods:{
        handleCurrentChange(pno){
            this.phone_list=this.phone_list.slice((pno-1)*20,pno*20)
            console.log(pno)
        },
        handleSizeChange(){
            this.phone_list=this.phone_list.slice(0,20)
        },
        // 当前商品的lid
        toDetails(lid){
            this.$router.push("/home/details/"+lid)
        }   
     },
   
}
</script>
<style scoped>
*{margin: 0;padding: 0;list-style: none;text-decoration: none;}
.home-list {
  clear:both;
  width: 100%;
}
.home-list .index-title{
    width: 100%;
    height: 38px;
    border-bottom: 2px solid #333;
}
.home-list .index-title .nav-index-sort{
    float: left;
    width: 190px;
    height: 38px;
    background: #f80;
    border-bottom: 2px solid #333;
    margin-left: 100px;
}
.home-list .index-title .nav-index-sort a{
    display: block;
    line-height: 38px;
    color:#fff;
    margin-top: 8px;
    font:14px/1.5 "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
    text-decoration: none;
}
.home-list .index-title .nav-index {
    width: 100%;
    height: 38px;
    padding-left: 60px;
 
}
.home-list .index-title .nav-index ul li{
    float: left;
    width: 85px;
    height: 38px;
    line-height: 38px;
}
.home-list .index-title .nav-index ul li a{
    color: #333;
    font-size: 15px;
    text-decoration: none;
    font-size:15px;
    font-weight: bold;
}
.search-path .el-breadcrumb{
   margin-left: 100px;
   width: 1150px;
   height: 30px;
   margin: 15px auto;
   border-bottom: 1px solid rgb(221, 220, 220);
}
.home-list .filter-container{
    width: 100%;
    height: 205px;
    padding-left: 120px;
}
.home-list .filter-container .s-left{
    float: left;
    width: 110px;
    height: 40px;
    border-bottom: 1px solid rgb(243, 238, 238);
    line-height: 40px;
    text-align: left;
    color:#999;
    font-size:12px;
}
.home-list .filter-container .s-left:not(.home-list .filter-container .s-left:first-child){
    clear:both;
}   
.home-list .filter-container .s-right{
    text-align:left;
    float: left;
    width: 1100px;
    height: 40px;
    border-bottom: 1px solid rgb(243, 238, 238);
    line-height: 40px;
    color:#333;
    font-size: 12px;
}
.home-list .filter-container .s-right a{
    text-decoration: none;
    color:#333;
    margin-left: 20px;
}
.home-list .filter-container .s-right i{
    margin: 4px;
}
.home-list .second-filter{
    margin: auto;
    width:100%;
    height: 38px;
    background: rgb(241, 239, 239);
    line-height: 38px;
    padding-left: 100px;
}
.home-list .second-filter .sort{
    float: left;
    width: 307px;
    height: 38px;
}
.home-list .second-filter .sort span{
    margin-left:30px;
}
.home-list .second-filter .price-interval{
    float: left;
    width: 208px;
    height: 38px;
}
.home-list .second-filter .price-interval span{
    display:block;
    margin-left:3px;
}
.home-list .second-filter .price-interval .addr,.city{
    border:1px solid rgb(199, 198, 198);
    width: 40px;
    height:26px;
    line-height:26px;
    margin-top: 5px;
}
.home-list .second-filter .promotion{
    float: left;
    width: 286px;
    height: 38px;
    margin-left: 200px;
    text-align: left;
}
.home-list .second-filter .promotion img{
    display: block;
    float: left;
    margin-top: 5px;
}
.home-list .second-filter span{
    display: block;
    float: left;
    color:#333;
    font-size:12px;
    margin-left:10px;
}
.home-list .second-filter input{
    display: block;
    float: left;
    width: 56px;
    height: 26px;
    margin-top: 5px;
}
.home-list .second-filter .page{
    display: block;
    float: left;
    width:120px;
    height: 38px;
}
.home-list .second-filter .page i{
    margin-right:25px;
}
.home-list .second-filter .page span{
    position: relative;
    left: 40px;
}
.home-list  .phone-list{
    width:1200px;
    margin: auto;
}
.home-list  .phone-list ul li.item-bg{
    float: left;
    width: 240px;
    height: 500px;
    border-radius: 2px;
}
.home-list  .phone-list ul li.item-bg:hover{
    border:1px solid rgb(218, 216, 216);
    box-shadow: 1px 1px 1px 1px rgb(223, 221, 221);
}
.home-list  .phone-list ul li.item-bg a{
    text-decoration: none;
    cursor: pointer;
}
.home-list .phone-list ul li a .bg-img{
    width:220px;
    height: 220px;
}
.home-list  .phone-list ul li.item-bg .focus-img{
    width: 100%;
    height: 32px;
}
.home-list  .phone-list ul li.item-bg .focus-img ul li{
    display: block;
    float: left;
    width: 40px;
    height: 30px;
    margin:2px 1px
}
.home-list  .phone-list ul li.item-bg .focus-img ul li img{
    width: 32px;
    height: 32px;
}
.home-list .phone-list ul li.item-bg .price-box{
    width: 220px;
    height: 146px;
}
.home-list .phone-list .clear:after{
    content:"";
    display: block;
    clear:both;
}
.home-list .phone-list .price-box .info-config{
    color:#999;
    font-size:12px;
    text-align: left;
    padding-left: 10px;
    margin-top: 5px;
}
.home-list .phone-list .price-box .info-config span:nth-child(2){
    margin: 0 10px;
}
.home-list .phone-list .price-box .price{
    width: 220px;
    height: 20px;
    text-align: left;
    padding-left: 10px;
    margin-top:10px;
}
.home-list .phone-list .price-box .price span{
    color:#f60;

}
.home-list .phone-list .price-box .price .icon,.decimal{
    font-size: 8px;
}
.home-list .phone-list .price-box .price .new-price{
    font-weight: bold;
    font-size: 18px;
    font-family: Tahoma;
}
.home-list .phone-list .price-box a{
    display: block;
    width: 100%;
    height: 36px;
    font-size:12px;
    text-align: left;
    padding-left:10px;
    margin-top: 10px;
    color:#666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.home-list .phone-list .price-box .evaluate{
    width: 100%;
    height: 18px;  
    text-align:left;
    padding-left: 10px;
    margin-top:10px;
}
.home-list .phone-list .price-box .evaluate .qty{
    color:#0284ff;
    font-weight: bold;
    font-size:12px;
    margin-right: 3px;
}
.home-list .phone-list .price-box .evaluate span:last-child{
    color:#666;
    font-size:14px;
}
.home-list .phone-list .price-box .store{
    width: 58px;
    height: 18px;
    border:1px solid #f60;
    font-size:12px;
    color:#f60;
    margin: 10px 0 3px 8px;
}
.home-list .phone-list .price-box .label span{
    display: block;
    float: left;
    height: 18px;
    background: #f60;
    font-size:12px;
    color:#fff;
    margin:8px 0  3px 8px;
    padding: 3px;
    line-height:15px;
    border-radius: 3px;
}
.home-list .phone-list .price-box .option{
    clear:both;
    width: 100%;
    height: 28px;
    margin:5px 8px;
}
.home-list .phone-list .price-box .option a{
    display: inline-block;
    width: 62px;
    height: 28px;
    line-height: 28px;
    border:1px solid rgb(228, 225, 225);
}
.home-list .phone-list .price-box .option a:last-child{
    width: 95px;
}
.home-list .phone-list .price-box .option input{
    width: 10px;
    height: 10px;
    margin-right: 3px;
}
</style>