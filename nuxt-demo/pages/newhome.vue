<template>
    <div>
        <headerone></headerone>
        <div class="newhome-header-two clearfix">
            <div class="newhome-logo">
                <img src="../img/logo.png" alt="">
                <span @click="select" class="kuangbtn clearfix">呼和浩特&nbsp;<i class="iconfont icon-jiantouxia"></i></span>
                <mt-popup v-model="cc"  modal="false">
                    <div class="new-home-xuan">
                        <i class="iconfont icon-chahao" @click="chaguan"></i>
                        <h1>选择区县</h1>
                        <ul class="kuangbtn-ul">
                            <p> <a href="">呼和浩特</a></p>
                            <li> <a href="">H&nbsp;&nbsp;回民区</a></li>
                            <li> <a href="">J&nbsp;&nbsp;金桥开发区</a></li>
                            <li><a href="">R&nbsp;&nbsp;如意开发区</a></li>
                            <li> <a href="">S&nbsp;&nbsp;赛罕区</a></li>
                            <li> <a href="">X&nbsp;&nbsp;新城区</a></li>
                            <li> <a href="">Y&nbsp;&nbsp;玉泉区</a></li>
                        </ul>
                    </div>
                </mt-popup>
                <span class="soulou"><a href="" style="color: #c30d23">首页</a></span>
                <span class="soulou"><a href="" >楼盘</a></span>
                <div class="newhome-xuantwo">
                    <input type="text" ><button>搜索</button>
                    <span class="map clearfix">
                       地图找房
                    </span>
                </div>
            </div>
        </div>
        <div class="new-home-images " >
            <div class="ncontent clearfix">
                <div class="new-images-xialasi">
                    <div class="newxiala-one" style=" margin-top: 80px;">
                        区域
                        <i class="iconfont icon-jiantouxia"></i>
                        <ul class="manchuxia">
                            <li>不限</li>
                            <li> 金桥开发区</li>
                            <li>如意开发区</li>
                            <li>赛罕区</li>
                            <li>新城区</li>
                            <li>玉泉区</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="banner" v-banner style="overflow: hidden;">
                <div v-swiper:mySwiper="swiperOption" id="banner" >
                    <div class="swiper-wrapper" style="height: 100%;">
                        <div class="swiper-slide" v-for="banner in bannerData" style="height: 100%;overflow: hidden;">
                            <img :src="'http://www.fooju.cn/'+banner.picurl" class="my-pic">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <quanfooter></quanfooter>
    </div>
</template>

<script>
    import axios from '~/plugins/axios';
    import api from '~/mainApi/index';
    import headerone from '~/components/index/headerquan'
    import quanfooter from '~/components/index/indexfooter';
    import rightbox from '~/components/index/rightbox';
    export default {
        components: {
            headerone,
            quanfooter,
            rightbox,
        },
        data() {
            return{
                cc:false,
                swiperOption: {
                    autoplay: true
                }
            }
        },
        methods:{
            select(){
                this.cc=true
            },
            chaguan(){
                this.cc=false
            }
        },
        async asyncData () {
            let bannerData = await axios.get(api.paramToUrl(api.adLists,{type: 0,position:0}));
            console.log(bannerData)
            return {
                bannerData: bannerData.data.data
            }
        },
        mounted() {
            console.log(this.bannerData)
        },
        directives: {
            banner: {
                inserted(el,binding,vnode) {
                    function setBannerHeight() {
                        let bannerHeight = (document.documentElement.clientHeight || document.body.clientHeight)- 100;
                        let bannerWidth = document.documentElement.clientWidth || document.body.clientWidth;
                        el.style.height = bannerHeight + 'px';

                        let bannerRate = bannerWidth/bannerHeight;
                        let imgArr = el.querySelectorAll('img');
                        imgArr.forEach(item => {
                            let imgHeight = item.offsetHeight;
                            let imgWidth = item.offsetWidth;
                            let imgRate = imgWidth/imgHeight;

                            if(bannerRate>imgRate){
                                item.style.width = bannerWidth + "px";
                                item.style.height = "auto";
                                item.style.marginTop = -(item.offsetHeight - bannerHeight)/2 + 'px';
                            }
                            else {
                                item.style.height = bannerHeight + "px";
                                item.style.width = "auto";
                                item.style.marginLeft = -(item.offsetWidth - bannerWidth)/2 + 'px';
                            }

                        })
                    }
                    setBannerHeight();
                    window.onresize = setBannerHeight
                }
                ,unbind(el) {
                    window.onresize = null;
                }
            }
        }
    }
</script>

<style scoped>
    .clearfix::after {
        content: "";
        display: block;
        clear: both;
    }
    .newhome-header-two{
        height: 80px;
        width: 100%;
        border-bottom: 1px solid #CCCCCC;
    }
    .newhome-logo{
        width: 1100px;
        height: 80px;
        margin: 0 auto;
    }
    .newhome-logo img{
        float: left;
        display: block;
        margin: 20px 0px;
        width: 130px;
        height: 40px;
    }
    .kuangbtn{
        float: left;
        display: inline-block;
        padding: 4px 8px;
        font-size: 16px;
        background: none;
        border: 1px solid #999;
        color: #333;
        border-radius: 15px;
        height: 24px;
        margin: 16px 20px;
    }
    .new-home-xuan{
        width: 644px;
        height:274px;
        padding:40px ;
    }
   .new-home-xuan .iconfont {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .new-home-xuan h1{
        margin: 0;
        padding: 0;
    }
    .kuangbtn-ul{
        margin-top: 12px;
        border-top: 1px solid #7f828b;
        list-style: none;
        padding-left: 0;
    }
    .new-home-xuan ul p{
        font-size: 20px;
    }
    .new-home-xuan ul a{
        text-decoration: none;
    }
    .new-home-xuan .kuangbtn-ul li{
        padding-bottom: 8px;
    }
    .newhome-logo .soulou a{
        color: #000;
        margin: 26px;
        line-height: 80px;
        text-decoration: none;
    }
    .newhome-xuantwo{
        width: 580px;
        height: 40px;
        margin: 20px 0;
        padding: 0;
        float: right;
    }
    .newhome-xuantwo input{
        width: 300px;
        height: 40px;
        border: 0;
        padding-left: 10px;
        font-size: 16px;
    }
    .newhome-xuantwo button{
        width: 102px;
        height: 42px;
        background: #C30D23;
        border: none;
        color: #fff;
        cursor: pointer;

    }
    .newhome-xuantwo .map{
        background:#5F1985 ;
        width: 154px;
        height: 40px;
        float: right;
        cursor: pointer;
        color: #fff;
        font-weight: 500;
        line-height: 40px;
        text-align: center;
    }
    .new-home-images{
        width: 100%;
        position: relative;
    }
    .my-pic {
        display: block;
        width: 100%;
    }
    .ncontent{
        width: 110px;
        height: 424px;
        margin: 0 auto;
        z-index: 2;
        position: absolute;
        top: 0px;
        left: 120px;
    }
    .new-images-xialasi{
        width: 300px;
        height: 525px;
        background: rgba(255, 0, 0, 0.4);
        float: left;
        z-index: 2;
        position: relative;


    }
    .newxiala-one{
        width: 198px;
        height: 25px;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: #fff;
        margin: 0 auto;
        cursor: pointer;
        line-height: 25px;
    }
    .newxiala-one .iconfont {
        float: right;
    }
    .manchuxia{
        position: absolute;
        top:91px;
        left: 50px;
        width: 198px;
        background: #fff;
        list-style: none;
        padding-left: 0;
    }
    .manchuxia li{
        color: #000;
        padding:5px 0;
        text-align: center;
    }
    .manchuxia li:hover{
        background: #D6CECE;
    }

    .clearfix::after {
        content: "";
        display: block;
        clear: both;
    }
    .new-home-images .active::after{
        content:"";
        display: block;
        position: absolute;
        bottom: 0;
        left: 35%;
        transform: translateX(-50%);
        border: 10px solid transparent;
        border-bottom: 10px solid #fff;
    }



</style>