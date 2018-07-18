<template>
    <div>
        <headerone></headerone>
        <div class="newloupan-header-two">
            <div class="newloupan-logo">
                <img src="../img/logo.png" alt="">
                <span @click="select" class="btn clearfix">呼和浩特&nbsp;<i class="iconfont icon-jiantouxia"></i></span>
                <mt-popup v-model="cc"  modal="false">
                    <div class="xuan">
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
                <a href="">首页</a>
                <a href="" style="color: #c30d23">楼盘</a>

            </div>
        </div>
        <div class="newloupan-fanhui">
            <a href="">福居网</a>><a href="">新房首页</a>><a href="">新房</a>
        </div>
        <quanfooter></quanfooter>
    </div>
</template>

<script>
    import headerone from '~/components/index/headerquan'
    import quanfooter from '~/components/index/indexfooter'
    export default {

        components: {
            quanfooter,
            headerone,
        },
        data() {
            return {
                cc: false,
            }
        },
        methods:{
            select(){
                this.cc=true
            }
        },
    }
</script>

<style scoped>
    .newloupan-header-two{
        height: 80px;
        width: 100%;
        border-bottom: 1px solid #CCCCCC;
    }
    .newloupan-logo{
        width: 1100px;
        height: 80px;
        margin: 0 auto;
    }
    .newloupan-logo img{
        float: left;
        display: block;
        margin: 20px 70px 20px 0px;
        width: 130px;
        height: 40px;
    }
    .btn{
        float: left;
        display: inline-block;
        padding: 4px 8px;
        font-size: 16px;
        background: none;
        border: 1px solid #999;
        color: #333;
        border-radius: 15px;
        height: 24px;
        margin: 16px 40px 16px 0;
    }
    .xuan{
        width: 644px;
        height:274px;
    }
    .xuan h1{
        margin: 0;
        padding: 0;
    }
    .btn-ul{
        margin-top: 12px;
        border-top: 1px solid #7f828b;
        list-style: none;
        padding-left: 0;
    }
    .xuan ul p{
        font-size: 20px;
    }
    .xuan ul a{
        text-decoration: none;
        cursor: pointer;
    }
    .xuan ul li{
        padding-bottom: 8px;
    }
    .newloupan-logo a{
        color: #000;
        margin: 26px;
        line-height: 80px;
        text-decoration: none;
    }
    .newloupan-fanhui, .newhome-fanhui a{
        font-size: 14px;
        color: #ccc;
    }


</style>