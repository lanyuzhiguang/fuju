<template>
    <div>
        <header style="height: 100px;background: #ff0;">
            <h1>我是头部</h1>
        </header>
        <div class="images " >
            <div class="images-top ">
                <ul class="link">
                    <li class="link-item " :class="{active:seletedIndex==0}" @click="seletedIndex=0">找二手房</li>
                    <li class="link-item " :class="{active:seletedIndex==1}" @click="seletedIndex=1">找新房</li>
                    <li class="link-item " :class="{active:seletedIndex==2}" @click="seletedIndex=2">找租房</li>
                    <li class="link-item " :class="{active:seletedIndex==3}" @click="seletedIndex=3">找学区房</li>
                    <li class="link-item " :class="{active:seletedIndex==4}" @click="seletedIndex=4">找小区</li>
                </ul>
                <div class="xuan">
                    <input type="text" :placeholder="placeholderText"><button>搜索</button>
                    <span class="map clearfix">
                      <img src="../img/mapSearch.png" alt="">
                地图找房</span>
                </div>
            </div>
            <div class="images-buttom clearfix" >
                <div class="futou" >
                    <a href=""><img src="../img/tou.png" alt=""></a>
                </div>
                <div class="swipe ">
                    <ul>
                        <li>"租"让时代镜像更精彩</li>
                        <li>二手房交易详情了解</li>
                    </ul>
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
        <rightbox></rightbox>
    </div>
</template>
<script>
    import axios from '~/plugins/axios';
    import api from '~/mainApi/index'
    import quanfooter from '~/components/index/indexfooter'
    import rightbox from '~/components/index/rightbox'

    export default {
        name: "banner",
        components: {
            quanfooter,
            rightbox,
        },
        data() {
            return{
                cc:false,
                seletedIndex:0,
                placeholderText:"输入小区名查找二手房",
                swiperOption: {
                    autoplay: true
                }
            }
        },
        methods:{
            select(){
                this.cc=true
            }
        },
        watch:{
            seletedIndex(newValue,oldValue){
                switch(newValue){
                    case 0:
                        this.placeholderText="输入小区名查找二手房";
                        break;
                    case 1:
                        this.placeholderText="输入楼盘名进行搜索";
                        break;
                    case 2:
                        this.placeholderText="输入小区名可以查找出租的房屋";
                        break;
                    case 3:
                        this.placeholderText="输入小区名搜索学区房";
                        break;
                    case 4:
                        this.placeholderText="找小区要输入小区名";
                        break;
                }

            }
        },
        async asyncData () {
            let bannerData = await axios.get(api.paramToUrl(api.adLists,{type: 0,position:0}));
            console.log(bannerData)
            return {
                bannerData: bannerData.data.data
            }
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true
                }
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
    .my-pic {
        display: block;
        width: 100%;
    }
    .images{
        width: 100%;
        height: 532px;
        position: relative;
    }
    .images-top{
        width: 1100px;
        height: 128px;
        position: absolute;
        bottom:110px;
        left: 125px;
        z-index: 2;
    }
    .images-top ul li{
        list-style: none;
        padding-right: 30px;
        color: #fff;
        float: left;
        font-size: 16px;
        cursor: pointer;
        position: relative;
        padding-bottom: 15px;
    }
    .clearfix::after {
        content: "";
        display: block;
        clear: both;
    }
    .xuan{
        width: 1100px;
        margin: 0;
        padding: 0;
    }
    .link{
        padding-left: 0;

    }
    .xuan input{
        width: 736px;
        height: 60px;
        float: left;
        border: 0;
        padding-left: 10px;
        font-size: 16px;
    }
    .xuan button{
        width: 160px;
        height: 62px;
        background: #C30D23;
        border: none;
        color: #fff;
        cursor: pointer;
        margin-top: 36px;
    }
    .link-item:hover{
        font-weight: 700;
    }
    .images-top .active{
        font-weight: 700;
    }
    .images .active::after{
        content:"";
        display: block;
        position: absolute;
        bottom: 0;
        left: 35%;
        transform: translateX(-50%);
        border: 10px solid transparent;
        border-bottom: 10px solid #fff;
    }
    .map{
        background:#5F1985 ;
        width: 180px;
        height: 60px;
        float: right;
        cursor: pointer;
        color: #fff;
        font-weight: 500;
        line-height: 60px;
    }
    .map img{
        display: block;
        float: left;
        margin-top: 20px;
        padding-left:40px;
        padding-right: 10px;
    }
    .images-buttom{
        height: 34px;
        width: 1100px;
        margin:0px auto;
        position: absolute;
        bottom:8px;
        left: 125px;
        z-index: 2;
    }
    .futou{
        height: 32px;
        width: 100px;
        float: left;
    }
    .images-buttom .swipe{
        height:20px;
        width: 170px;
        float: left;
        padding: 0 10px;
        overflow: hidden;
    }
    .swipe ul{
        padding-left: 0;
        list-style: none;
        animation-name: go;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        color: #fff;
        font-size: 16px;
    }
    @keyframes go {
        0% {
            transform: translateY(0);
        }
        25%,50%{
            transform: translateY(-16px);
        }
        75%,100% {
            transform: translateY(-38px);
        }
    }
</style>
