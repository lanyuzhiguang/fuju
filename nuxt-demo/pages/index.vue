<template>
  <div class="home">
      <header>
        <div class="header-right">
            <a href="">请登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="">立即注册</a>
        </div>
          <div  class="navigation clearfix">
              <div class="navigation-left clearfix">
       <img src="../img/logo.png" alt="">

              <span @click="select" class="btn clearfix">呼和浩特&nbsp;<i class="iconfont icon-jiantouxia"></i></span>
              <mt-popup v-model="cc"  modal="false">
                  <div class="index-xuanone">
                      <i class="iconfont icon-chahao" @click="chaguan"></i>
                      <h1>选择区县</h1>
                      <ul class="btn-ul">
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
     </div>
              <div class="navigation-right clearfix">
                  <ul>
                      <li><div class="lititle" style=" color: #C30D23;border-bottom:2px solid#C30D23;
        ">首页</div></li>
                      <li><div class="lititle">二手房</div></li>
                      <li><div class="lititle">新房</div></li>
                      <li><div class="lititle">租房</div></li>
                      <li><div class="lititle">学区房</div></li>
                      <li><div class="lititle">小区</div></li>
                      <li><div class="lititle">经纪人</div></li>
                      <li><div class="lititle">百科</div></li>
                      <li><div class="lititle">在线委托</div>
                          <div class="weituo">
                              <div><a href="">我是业主</a></div>
                              <div><a href="">帮我找房</a></div>
                          </div></li>
                      <li><div class="lititle">工具</div></li>
                      <li class="zuihou"><div class="lititle">专题</div></li>
                  </ul>
              </div>
          </div>
    </header>
      <div class="images " >
          <div class="images-top clearfix">
              <ul class="link">
                  <li class="link-item " :class="{active:seletedIndex==0}" @click="seletedIndex=0">找二手房</li>
                  <li class="link-item " :class="{active:seletedIndex==1}" @click="seletedIndex=1">找新房</li>
                  <li class="link-item " :class="{active:seletedIndex==2}" @click="seletedIndex=2">找租房</li>
                  <li class="link-item " :class="{active:seletedIndex==3}" @click="seletedIndex=3">找学区房</li>
                  <li class="link-item " :class="{active:seletedIndex==4}" @click="seletedIndex=4">找小区</li>
              </ul>
              <div class="xuantwo">
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
      <div class="four-cha">
         <div class="store">
             <a href="">
             <img src="../img/store.png" alt="">
             <p class="titleA">查门店</p>
             <p class="titleB">查优质门店</p>
             </a>
         </div>
          <div class="store">
              <a href="">
              <img src="../img/entrust.png" alt="">
              <p  class="titleA">查门店</p>
              <p class="titleB">查优质门店</p>
              </a>
          </div>
          <div class="store">
              <a href="">
              <img src="../img/mapBlue.png" alt="">
              <p  class="titleA">查门店</p>
              <p class="titleB">查优质门店</p>
              </a>
          </div>
          <div class="store">
          <a href="">
              <img src="../img/encyclopedias.png" alt="">
              <p  class="titleA">查门店</p>
              <p class="titleB">查优质门店</p>
          </a> </div>
      </div>
      <div class="threefang">
          <a href="" class="fang"><img src="../img/zsfy.png" alt=""></a>
          <a href=""  class="fang"> <img src="../img/dbf.png" alt=""></a>
          <a href=""  class="fang"><img src="../img/feature.png" alt=""></a>
      </div>
      <div class="meifang">
          <div class="titletop">
              <span class="title-left">精品新房</span>
              <span class="title-right"><a href="">更多新房 <i class="iconfont icon-mjiantou"></i></a></span>
          </div>
          <div class="titlebottom">在这里为您寻觅一个新家</div>
          <div class="meifang-img">
              <div class="meitu"><a href=""><img src="../img/u826.png" alt=""></a>
                  <span class="meitu-left">呼和浩特亿利生态城</span>
                  <span class="meitu-right">0元/平</span>
              </div>
              <div class="meitu"><a href=""><img src="../img/u826.png" alt=""></a></div>
              <div class="meitu"><a href=""><img src="../img/u826.png" alt=""></a></div>
          </div>
      </div>
      <div class="meifang">
          <div class="titletop">
          <span class="title-left">二手优品</span>
          <span class="title-right"><a href="">更多二手房 <i class="iconfont icon-mjiantou"></i></a></span>
          </div>
          <div class="titlebottom">生活因为宽广，才会不断延伸</div>
          <div class="meifang-img-er">
              <div class="quanbox"><div class="meitu-er">
                  <a href=""><img src="../img/u826.png" alt=""></a>
                  <div class="daxiao">102万</div>
              </div>
                  <div class="meitu-left-er">千家和泰欣家园 精装修</div>
                  <div class="meitu-right-er">2室2厅2卫 122.00㎡</div>
              </div>
              <div class="quanbox">
                  <div class="meitu-er">
                  <a href=""><img src="../img/u826.png" alt=""></a>
                  <div class="daxiao">102万</div>
              </div>
                  <div class="meitu-left-er">千家和泰欣家园 精装修</div>
                  <div class="meitu-right-er">2室2厅2卫 122.00㎡</div>
              </div>
              <div class="quanbox"><div class="meitu-er">
                  <a href=""><img src="../img/u826.png" alt=""></a>
                  <div class="daxiao">102万</div>
              </div>
                  <div class="meitu-left-er">千家和泰欣家园 精装修</div>
                  <div class="meitu-right-er">2室2厅2卫 122.00㎡</div>
              </div>
          </div>
      </div>
      <div class="huikuang"></div>
      <div class="meifang">
          <div class="titletop">
              <span class="title-left">精品租房</span>
              <span class="title-right"><a href="">更多租房 <i class="iconfont icon-mjiantou"></i></a></span>
          </div>
          <div class="titlebottom">与其等待，不如坐享繁华</div>
          <div class="meifang-img-er">
              <div class="quanbox"><div class="meitu-er">
                  <a href=""><img src="../img/u826.png" alt=""></a>
              </div>
                  <div class="meitu-left-er">阳光馨苑小区 出售</div>
                  <div class="meitu-right-san clearfix">
                      <span class="meitu-right-er">2室2厅2卫 122.00㎡</span>
                      <span class="meitu-right-san-right">1100元/月</span>
                  </div>
              </div>
              <div class="quanbox"><div class="meitu-er">
                  <a href=""><img src="../img/u826.png" alt=""></a>
              </div>
                  <div class="meitu-left-er">阳光馨苑小区 出售</div>
                  <div class="meitu-right-san clearfix">
                      <span class="meitu-right-er">2室2厅2卫 122.00㎡</span>
                      <span class="meitu-right-san-right">1100元/月</span>
                  </div>
              </div>
              <div class="quanbox"><div class="meitu-er">
                  <a href=""><img src="../img/u826.png" alt=""></a>
              </div>
                  <div class="meitu-left-er">阳光馨苑小区 出售</div>
                  <div class="meitu-right-san clearfix">
                      <span class="meitu-right-er">2室2厅2卫 122.00㎡</span>
                      <span class="meitu-right-san-right">1100元/月</span>
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
import api from '~/mainApi/index';
import quanfooter from '~/components/index/indexfooter';
import rightbox from '~/components/index/rightbox';
export default {
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
      },
      chaguan(){
          this.cc=false
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
    .home{
        margin: 0;
        padding: 0;
    }
    .header-right{
        margin: 0 auto;
        width: 1100px;
        height: 30px;
        text-align: right;
        font-size: 12px;
        color: #333;
    }
    .header-right a{
        text-decoration: none;
    }
    .navigation{
        width: 1100px;
        margin: 0px auto;
        height: 62px;
    }
    .navigation-left{
        height: 60px;
        float: left;
    }
    .navigation-left img{
        float: left;
        display: block;
        margin: 11px 20px 11px 0px;
        width: 130px;
        height: 40px;
    }
    .btn{
        float: left;
        display: inline-block;
        padding: 4px 4px;
        font-size: 16px;
        background: none;
        border: 1px solid #999;
        color: #333;
        border-radius: 15px;
        height: 24px;
        margin: 14px 40px 14px 0;
    }
    .index-xuanone{
        width: 642px;
        height:284px;
        padding: 40px;
        position: relative;
    }
    .index-xuanone .iconfont{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .index-xuanone h1{
        margin: 0;
        padding: 0;
    }
    .btn-ul{
        margin-top: 12px;
        border-top: 1px solid #7f828b;
        list-style: none;
        padding-left: 0;
    }
    .index-xuanone ul p{
        font-size: 20px;
    }
    .index-xuanone ul a{
        text-decoration: none;
        line-height: 1.15;
    }
    .index-xuanone ul a:hover{
        color:#C30D23 ;
    }
    .index-xuanone ul li{
         padding-bottom: 8px;
    }
    .navigation-right{
        height:62px;
        width: 805px;
        float: right;
        position: relative;
    }
    .navigation-right ul{
        padding-left: 0;
    }
    .navigation-right ul li{
        list-style: none;
        float: left;
        margin:4px 17px 0 17px ;
    }
    .navigation-right ul  .zuihou {
        margin-right: 0;
    }
    .lititle{
        height: 40px;
    }
    .navigation-right ul li:hover{
        border-bottom: 2px solid#C30D23;
        color: #C30D23;
        cursor: pointer;
    }
    .weituo{
        position: absolute;
        top: 62px;
        left: 592px;
        background: #fff;
        display: none;
        z-index: 2;
    }
    .navigation-right ul li:hover .weituo{
        display: block;
    }
     .weituo a{
        text-decoration: none;
    }
    .weituo a:hover{
        color: #C30D23;
    }
    .weituo div{
        padding:5px 10px;
    }
    .images{
        width: 100%;
        position: relative;
    }
    .my-pic {
        display: block;
        width: 100%;
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
    .xuantwo{
        width: 1100px;
        margin: 0;
        padding: 0;
    }
    .link{
        padding-left: 0;
    }
    .xuantwo input{
        width: 736px;
        height: 60px;
        float: left;
        border: 0;
        padding-left: 10px;
        font-size: 16px;
    }
    .xuantwo button{
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
    .four-cha{
        width: 1100px;
        margin: 40px auto;
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .store{
        cursor: pointer;
    }
    .store img{
        height: 96px;
        width: 96px;
    }
    .store a,.store a hover{
        text-decoration: none;
    }
    .titleA{
        font-size: 20px;
        color: #333;
        margin-top: 20px;
        margin-bottom: 5px;
    }
    .titleB{
        margin: 0px;
        font-size: 14px;
        color: #666;
    }
    .threefang{
        margin: 10px auto;
        width: 1100px;
        display: flex;
        justify-content: space-around;
    }
    .threefang a{
        cursor: pointer;
    }
    .meifang{
        width: 1100px;
        margin: 0 auto;
        padding-top: 20px;
        margin-bottom: 15px;
    }
    .titletop{
        clear: both;
        height: 50px;
    }
    .title-left{
        font-size: 30px;
        font-weight: bolder;
        color: #333;
        line-height: 50px;
    }
    .title-right{
        float: right;
        margin:0px;
        line-height: 50px;
    }
    .title-right a{
        font-size: 16px;
        color: #999;
        text-decoration: none;
        cursor: pointer;
    }
    .titlebottom{
        padding-top: 10px;
        color: #666;
    }
    .meifang-img{
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
    }
    .meitu{
        width: 345px;
        height: 258px;
        overflow: hidden;
        position: relative;
    }
    .meifang-img img{
        width: 345px;
        height: 258px;
        transition: transform linear .5s;
    }
    .meitu:hover img {
        transform: scale(1.1, 1.1);
    }
    .meitu-left{
        color: #fff;
        font-size: 16px;
        position: absolute;
        top: 230px;
        left:10px;
    }
    .meitu-right{
        color: #fff;
        font-size: 16px;
        position: absolute;
        top: 230px;
        right:10px;
    }
    .meifang-img-er{
        margin-top: 40px;
        height: 332px;
        display: flex;
        justify-content: space-between;
    }
    .quanbox{
        width: 345px;
        height: 332px;
    }
    .meitu-er{
        width: 345px;
        height: 258px;
        overflow: hidden;
        position: relative;
    }
   .daxiao{
       background: url("../img/pricetag.png");
       width: 100px;
       height: 52px;
       position: absolute;
       top: 10px;
       left:0;
       font-size: 20px;
       color: #fff;
       text-align: center;
       line-height: 52px;
   }
    .meifang-img-er img{
        width: 345px;
        height: 258px;
        transition: transform linear .5s;
    }
    .meitu-er:hover img {
        transform: scale(1.1, 1.1);
    }
    .meitu-left-er{
        font-size: 16px;
        padding-top: 20px;
    }
    .meitu-right-er{
        padding-top: 20px;
        font-size: 14px;
        color: #7f828b;
    }
    .meitu-right-san-right{
        font-size: 14px;
        color: #C4051E;
        float: right;
    }
    .huikuang{
        width: 1100px;
        height: 110px;
        background: url("../img/ad.png") no-repeat;
        background-size: 100%;
        margin: 25px auto;
    }
</style>
