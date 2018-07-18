<template>
    <div>
        <headerone></headerone>
        <div class="oldhome-header-two">
            <div class="oldhome-logo">
                <img src="../img/logo.png" alt="">
                <a href="" style="color: #c30d23">在售</a>
                <a href="">小区</a>
                <a href="">地图找房</a>
                <a href="">计算器</a>
                <a href="">去估价</a>
            </div>
        </div>
        <div class="oldhome-content">
            <div class="saixuanone">
            <div class="oldhome-fanhui">
                <a href="">福居网</a>><a href="">二手房</a>
            </div>
            <div class="oldhome-xuantwo">
                <input type="text" placeholder="搜索"><button>搜索</button>
            </div>
                <!--saixuan-->
                <div class="check-one">
                <div class="checktop ">
                    <div class="allcheck clearfix">
                        <span class="quyu">区域</span>

                        <div class="quyucheck" >
                            <!--<checkList :options="optionsbuxian" v-model="isChecked.checkValue" @change="handleClear('checkValue')"></checkList>-->
                            <checkList :options="options" v-model="optionall.checkValue" @change="handleChange('checkValue')"></checkList>
                        </div>
                    </div>
                    <div class="allcheck clearfix">
                        <span class="quyu">价格</span>
                        <div class="quyucheck">
                            <checkList :options="optionstwo" v-model="optionall.checkValuetwo"></checkList>
                        </div>
                    </div>
                    <div class="money">
                        <input type="text">-<input type="text">万 <button>确定</button>
                    </div>
                    <div class="allcheck clearfix">
                      <span class="quyu">户型</span>
                      <div class="quyucheck">
                          <checkList :options="optionsthree" v-model="optionall.checkValuethree"></checkList>
                      </div>
                  </div>
                </div>
                <div class="checkmiddle">
                    <div class="middlecontent" style="height: 0;"v-trans >
                        <slot>
                    <div class="allcheck clearfix">
                        <span class="quyu">类型</span>
                        <div class="quyucheck">
                            <checkList :options="optionsfour" v-model="optionall.checkValuefour"></checkList>
                        </div>
                    </div>
                    <div class="allcheck clearfix">
                        <span class="quyu">装修</span>
                        <div class="quyucheck">
                            <checkList :options="optionsfive" v-model="optionall.checkValuefive"></checkList>
                        </div>
                    </div>
                    <div class="allcheck clearfix">
                        <span class="quyu">朝向</span>
                        <div class="quyucheck">
                            <checkList :options="optionssix" v-model="optionall.checkValuesix"></checkList>
                        </div>
                    </div>
                    <div class="allcheck clearfix">
                        <span class="quyu">面积</span>
                        <div class="quyucheck">
                            <checkList :options="optionsseven" v-model="optionall.checkValueseven"></checkList>
                        </div>
                    </div>
                    <div class="money">
                        <input type="text">-<input type="text">平 <button>确定</button>
                    </div>
                    <div class="allcheck clearfix">
                        <span class="quyu">楼龄</span>
                        <div class="quyucheck">
                            <checkList :options="optionseight" v-model="optionall.checkValueeight"></checkList>
                        </div>
                    </div>
                    <div class="allcheck clearfix">
                        <span class="quyu">楼层</span>
                        <div class="quyucheck">
                            <checkList :options="optionsnine" v-model="optionall.checkValuenine"></checkList>
                        </div>
                    </div>
                    <div class="allcheck clearfix">
                        <span class="quyu">电梯</span>
                        <div class="quyucheck">
                        <checkList :options="optionsten" v-model="optionall.checkValueten"></checkList>
                        </div>
                    </div>
                    <div class="check-sesrch clearfix">
                        <span class="quyu">其他</span>
                        <div class="quyucheck">
                            <input type="text"><button>确定</button>
                        </div>
                    </div>
                        </slot>
                    </div>
                </div>
                <div class="checkfooter ">
                    <div class="checkfooter-one ">
                        <span class="checkonelast">筛选</span>
                        <div class="linkcheck clearfix " >
                            <!--<span class="checkcha " >-->
                                <span class="xuanzhong-cha " v-for="item in seletedData" >
                                    {{item.label}}
                                    <i class="iconfont icon-cha fright" @click="handleReduce(item)"></i>
                            </span>
                            <span class="remove" @click="handleClearAll">
                                <i class="iconfont icon-lajitong"></i>
                                 清除全部
                            </span>
                            <!--</span>-->

                        </div>
                    </div>
                    <div class="drop-down" @click="handleShow">
                        {{isShow?"收起选项 ": "更多选项 " }}
                        <i class="iconfont icon-jiantoushang"  ></i>
                        <i class="iconfont icon-jiantouxia"  ></i>
                        <!--<span>-->
                        <!--<i class="iconfont icon-jiantoushang" ></i>-->
                        <!--</span>-->
                        <!--<span >-->
                        <!--<i class="iconfont icon-jiantouxia"  ></i>-->
                        <!--</span>-->
                    </div>
                </div>
                </div>
            </div>
            <div class="oldsaixuan-er ">
                <div class="oldkuang">
                <button class="btn-one">最新</button>
                <button class="btn-two">房屋总价 <i class="iconfont icon-jiantou1-copy-copy"></i></button>
                <button class="btn-two">房屋单价 <i class="iconfont icon-jiantou1-copy-copy"></i></button>
                <button class="btn-two">房屋面积 <i class="iconfont icon-jiantou1-copy-copy"></i></button>
                </div>
                <div class="saixuanfang-two ">
                    <div class="allcheck clearfix">
                        <span class="saixuantwo">筛选</span>
                        <div class="quyucheck">
                            <checkList :options="optionslast"v-model="checkValuelast"></checkList>
                        </div>
                    </div>
                </div>
                <div class="xiangqing-title">
      共找到<span style="color:#C30D23">7</span>个<span>呼和浩特</span><span>二手房源</span>
                </div>
                <div class="xiangqing clearfix">
                    <div class="fangziliao-one clearfix">
                      <div class="fangtu ">
                       <img src="../img/fabg.png" alt="">
                      </div>
                      <div class="fangzi ">
                        <a href="">新宇小区，可落户</a>
                        <div class="condition-five">
                        <div>
                            <span>闻都新苑</span>|<span>3室1厅1卫</span>|<span>南北</span>                         </div>
                         <div>
                           <span>高楼层/3层</span>|<span>中装</span>
                         </div>
                         <div>
                            <span>0年建</span>|<span>平层</span></div>
                         <div>
                             <span>0人关注</span>|<span>共 0次带看</span>|<span>11天前发布</span>
                         </div>
                       </div>
                       <div class="fangyuan-you">
                       <span>交通便利</span>
                       </div>
                      </div>
                      <div  class="fang-shuju clearfix">
                        <div class="daxiao">83万</div>
                        <div class="danjia">单价 <span>10000</span>元/平米</div>
                        <button>关注</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <quanfooter></quanfooter>
    </div>
</template>

<script>
    import headerone from '~/components/index/headerquan'
    import quanfooter from '~/components/index/indexfooter'
    import checkList from '~/components/index/checkList'

    export default {

        components: {
            quanfooter,
            headerone,
            checkList,
        },
        data(){
            return{
                optionall:{
                    checkValue: [],
                    checkValuetwo: [],
                    checkValuethree: [],
                    checkValuefour: [],
                    checkValuefive: [],
                    checkValuesix: [],
                    checkValueseven: [],
                    checkValueeight: [],
                    checkValuenine: [],
                    checkValueten: [],
                },
                // optionsbuxian:[
                //     {value: 1,label: "不限"}],
                options: [
                    {value: 1,label: "不限"},
                    {value: 2,label: "金桥开发区"},
                    {value: 3,label: "如意开发区"},
                    {value: 4,label: "玉泉区"},
                    {value: 5,label: "回民区"},
                    {value: 6,label: "赛罕区"},
                    {value: 7,label: "新城区"},
                ],
                optionstwo: [
                    {value: 1,label: "不限"},
                    {value: 2,label: "30万以下"},
                    {value: 3,label: "30-40万 "},
                    {value: 4,label: "40-50万"},
                    {value: 5,label: "50万以上"},
                ],
                optionsthree: [
                    {value: 1,label: "一室"},
                    {value: 2,label: "二室"},
                    {value: 3,label: "三室 "},
                    {value: 4,label: "四室"},
                    {value: 5,label: "五室"},
                ],
                optionsfour: [
                    {value: 1,label: "平层"},
                    {value: 2,label: "复式"},
                    {value: 3,label: "跃层 "},
                ],
                optionsfive: [
                    {value: 1,label: "毛坯"},
                    {value: 2,label: "豪装"},
                    {value: 3,label: "精装 "},
                    {value: 4,label: "简装"},
                    {value: 5,label: "中装"},
                ],
                optionssix: [
                    {value: 1,label: "东"},
                    {value: 2,label: "西"},
                    {value: 3,label: "南 "},
                    {value: 4,label: "北"},
                    {value: 5,label: "南北"},
                    {value: 6,label: "双南"},
                    {value: 7,label: "东南"},
                    {value: 8,label: "西南"},
                    {value: 9,label: "东北"},
                    {value: 10,label: "西北"},
                    {value: 11,label: "东西"},
                ],
                optionsseven: [
                    {value: 1,label: "不限"},
                    {value: 2,label: "50平以下"},
                    {value: 3,label: "50-70平 "},
                    {value: 4,label: "70-90平"},
                    {value: 5,label: "90平以上"},
                ],
                optionseight: [
                    {value: 1,label: "不限"},
                    {value: 2,label: "5年以内"},
                    {value: 3,label: "10年以内 "},
                    {value: 4,label: "15年以内"},
                    {value: 5,label: "15年以上"},
                ],
                optionsnine: [
                    {value: 1,label: "不限"},
                    {value: 2,label: "底层"},
                    {value: 3,label: "低楼层 "},
                    {value: 4,label: "中层"},
                    {value: 5,label: "中高层"},
                ],
                optionsten: [
                    {value: 1,label: "是"},
                    {value: 2,label: "否"},
                ],
                // isChecked:{
                //     checkValue:true,
                //     checkValuetwo:true,
                //     checkValueseven:true,
                //     checkValueeight:true,
                //     checkValuenine:true,
                // },
                optionslast:[
                    {value: 1,label: "两年内"},
                    {value: 2,label: "满两年"},
                    {value: 3,label: "满五年 "},
                    {value: 4,label: "随时看房"},
                ],
                checkValuelast: [],
                isShow:false,
                fillData: {
                    total_priceData: [
                        {
                            title: "30万以下",
                            id: '0-30'
                        },
                        {
                            title: "30-40万",
                            id: '30-40'
                        },
                        {
                            title: "40-50万",
                            id: '40-50'
                        },
                        {
                            title: "50万以上",
                            id: '50-99999'
                        }
                    ],
                    bedroomData: [
                        {title: "一室", id: 0},
                        {title: "两室", id: 1},
                        {title: "三室", id: 2},
                        {title: "四室", id: 3},
                        {title: "五室", id: 4}
                    ],
                    typeData: [
                        {title: '平层', id: 0},
                        {title: '复式', id: 1},
                        {title: '跃层', id: 2}
                    ],
                    decorationData: [
                        {title: '毛坯', id: 0},
                        {title: '豪装', id: 1},
                        {title: '精装', id: 2},
                        {title: '简装', id: 3},
                        {title: '中装', id: 4}
                    ],
                    directionData: [
                        {title: '东', id: 0},
                        {title: '西', id: 1},
                        {title: '南', id: 2},
                        {title: '北', id: 3},
                        {title: '南北', id: 4},
                        {title: '西南', id: 5},
                        {title: '东北', id: 6},
                        {title: '东北', id: 7},
                        {title: '西北', id: 8},
                        {title: '东西', id: 9}
                    ],
                    built_areaData: [
                        {title: '50平以下', id: 1},
                        {title: '50-70平', id: 2},
                        {title: '70-90平', id: 3},
                        {title: '90以上', id: 4}
                    ],
                    diantiData: [{id: 0, title: '是'}, {id: 1, title: '否'}],
                    ageData: [
                        {id: 1, title: '5年以内'},
                        {id: 2, title: '10年以内'},
                        {id: 3, title: '15年以内'},
                        {id: 4, title: '15年以上'}
                    ],
                    floor_typeData: [
                        {id: 1, title: "底层"},
                        {id: 2, title: "低楼层"},
                        {id: 3, title: "中层"},
                        {id: 4, title: "中高层"},
                    ]
                },
            }
        },
        methods:{
          handleShow(){
              this.isShow=!this.isShow;
          },
          handleReduce(item){
              console.log(item)
              let index=this.optionall[item._paretName].findIndex(val=> {
                      if(val.value==item.value){
                          return true
                      }
                  })

              this.optionall[item._paretName].splice(index,1)
          },
            handleClearAll(){
              let optionall=this.optionall;
              for(let arr in optionall){
              if(optionall[arr] instanceof Array){
                  optionall[arr].splice(0);
                  // this.handleChange(arr);
              }
              }
            },
            // handleClear(key){
            //   if(this.isChecked[key]){
            //       this.optionall[key].splice(0);
            //   }
            // },
            // handleChange(val){
            //         if(this.optionall[val].length>0){
            //             this.isChecked[val]=false;
            //         }
            //   else{
            //       this.isChecked[val]=true;
            //   }
            //
            // },

        },
        directives:{
            trans:{
                update(el,biding,vnode){
                    let isShow = vnode.context.$data.isShow;
                    if(!isShow){
                        el.style.height=0;
                    }
                    else{
                        el.style.height="auto";
                        let startHeight=0;
                        let targetHeight=getComputedStyle(el).height;
                        el.style.transition="none";
                        el.style.height=startHeight;
                        // el.offsetWidth;
                        el.style.transition="height ease .5";
                        el.style.height=targetHeight
                    }
                    },

            }
        },
        computed:{
            seletedData(){
                let optionall=this.optionall;
                let allData=[];
                for (let key in optionall){
                   if(optionall[key] instanceof Array){
                       // allData.push(optionall[key]);
                       optionall[key].map(item=> {
                           item._paretName=key;
                          allData.push(item);
                          console.log(allData)
                       })

                   }
                }
                return allData;
            }



        },
    }
</script>

<style scoped>
    .clearfix::after {
        content: "";
        display: block;
        clear: both;
    }
    .oldhome-content{
        width: 1100px;
        margin: 0 auto;
    }
    .oldhome-header-two{
        height: 80px;
        width: 100%;
        border-bottom: 1px solid #CCCCCC;
    }
    .oldhome-logo{
        width: 1100px;
        height: 80px;
        margin: 0 auto;
    }
    .oldhome-logo img{
        float: left;
        display: block;
        margin: 20px 70px 20px 0px;
        width: 130px;
        height: 40px;
    }
    .oldhome-logo a{
        color: #000;
        margin: 26px;
        line-height: 80px;
        text-decoration: none;
    }
    .oldhome-fanhui, .oldhome-fanhui a{
        font-size: 14px;
        color: #ccc;
        text-decoration: none;
        margin-top: 20px;
    }
    .oldhome-xuantwo{
        margin-bottom: 50px;
    }
    .oldhome-xuantwo input{
        width: 720px;
        height: 60px;
        background: #F4F4F4;
        border: 0;
        padding-left: 30px;
        font-size: 16px;
        margin-top: 30px;
    }
    .oldhome-xuantwo button{
        width: 160px;
        height: 62px;
        background: #C30D23;
        border: 0;
        color: #fff;
        cursor: pointer;
        margin-top: 30px;
    }
     .middlecontent{
         transition:height ease 3s;
         overflow: hidden;
      }
    .allcheck .quyu,.check-sesrch .quyu{
        font-size: 12px;
        color: #000;
        text-align: left;
        float: left;
    }
    .quyucheck{
        width: 608px;
        /*height: 78px;*/
        float: left;
        margin-left: 20px;
        line-height: 40px;
    }
    .money{
        width: 1006px;
        height: 27px;
        margin-left: 40px;
        margin-bottom: 10px;
        color: #999999;
    }
    .money input{
        width: 58px;
        height: 20px;
        border: 1px solid #ccc;
        margin-left: 5px;
        margin-right: 5px;
    }
    .money button,.check-sesrch button{
        color: #fff;
        background:#C30D23;
        border: none;
        padding: 5px 10px;
    }
    .check-sesrch input{
        width: 162px;
        height: 25px;
        border: 1px solid #ccc;
        margin-left: 22px;
        margin-right: 10px;

    }
    .checkfooter{
        margin-top: 20px;
        padding-bottom: 32px;
        border-bottom: 1px solid #CCCCCC;
    }
    .checkfooter .checkonelast{
        font-size: 12px;
        color: #000;
        text-align: left;
        float: left;
    }
    .linkcheck{
        color: #666;
        font-size: 14px;
        margin-left: 40px;
        width: 642px;
    }
    .linkcheck .xuanzhong-cha{
        width: 112px;
        height: 28px;
        border: 1px solid #ccc;
        color: #c30d23;
        line-height: 28px;
        padding-left: 10px;
        margin-right: 22px;
        margin-bottom: 10px;
        float: left;
        cursor: pointer;
    }
    .remove{
        line-height: 28px;
        margin-bottom: 10px;
        font-size: 16px;
        text-align: center;
        float: left;
        cursor: pointer;
    }
    .linkcheck .xuanzhong-cha .iconfont{
        float: right;
        background: #ccc;
        padding: 0 6px;
        margin: 0;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }

    .drop-down{
        border: none;
        background: #fff;
        font-size: 16px;
        color: #bbb;
        line-height: 40px;
        cursor: pointer;
        text-align: center;
        margin-top: 20px;
    }

   .oldsaixuan-er{
       margin-top: 80px;
    }
   .oldkuang .btn-one{
       width: 78px;
       height: 42px;
       background: #C30D23;
       border-radius:20px;
       cursor: pointer;
       color: #fff;
       font-size: 18px;
       border: 1px solid #C30D23;
   }
   .oldkuang .btn-two{
        width: 136px;
        height: 43px;
        cursor: pointer;
        color:#C30D23 ;
        font-size: 18px;
        border-radius: 20px;
        margin-left: 20px;
        padding: 10px 20px;
        background: none;
        border: 1px solid #C30D23;
    }
   .saixuanfang-two{
       margin: 20px;
   }
   .saixuanfang-two .saixuantwo{
       font-size: 16px;
       color: #000;
      float: left;
       margin-top: 10px;
       margin-right: 40px;
   }
   .gexiang input{


   }





    .xiangqing-title {
        font-size: 30px;
        color: #000;
        text-align: left;
    }
    .xiangqing-title span{
        margin-left: 10px;
    }
    .fangziliao-one{
        height: 214px;
        width: 1100px;
        margin-top: 40px;
    }
    .fangtu,.fangzi{
        float: left;
        height: 214px;
        margin-right: 30px;
    }
    .fang-shuju{
        float: right;
        height: 214px;
    }
    .fangtu img{
        width: 285px;
        height: 214px;
    }
    .fangzi a{
        text-decoration: none;
        font-size: 20px;
        color: #333;
        padding-bottom: 20px;
    }
    .condition-five{
        font-size: 14px;
        color: #666;
    }
    .condition-five div{
        margin-top: 20px;
    }
    .fangyuan-you{
        margin-top: 10px;
    }
    .fangyuan-you span{
        font-size: 14px;
        color: #fff;
        background: #5F1985;
        border-radius: 3px;
        margin-right: 10px;
        padding: 5px 10px;
    }
    .fang-shuju .daxiao{
        font-size: 40px;
        color: #c30d23;
        text-align: right;
    }
    .fang-shuju .danjia{
        font-size: 14px;
        color: #666;
        margin-top: 20px;
        text-align: right;

    }
    .fang-shuju button{
        float: right;
        border: 1px solid #c30d23;
        border-radius: 8px;
        width: 108px;
        height: 38px;
        margin-top: 20px;
        background: none;
        color: #c30d23;
        font-size: 18px;
    }


</style>