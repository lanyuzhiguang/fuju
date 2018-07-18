<template>
    <header>
        <div class="true-nav">
            <div class="true-header-left clearfix">
                <ul>
                    <li><div class="lititle">首页</div></li>
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
            <div class="true-header-right">
                <a href="">请登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="">立即注册</a>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "headerquan"
    }
</script>

<style >
    header{
        width: 100%;
        background: #F4F4F4;
    }
    .true-nav{
        margin: 0 auto;
        width: 1100px;
        height: 60px;
    }
    .true-header-right{
        height: 60px;
        text-align: right;
        font-size: 12px;
        color: #333;
        line-height: 60px;
    }
    .true-header-right a{
        text-decoration: none;
    }
    .true-header-left{
        height:60px;
        width: 800px;
        position: relative;
        float: left;
    }
    .true-header-left ul{
        padding-left: 0;
    }
    .true-header-left ul li{
        list-style: none;
        float: left;
        margin:4px 34px 0 0px ;
    }
    .true-header-left ul  .zuihou {
        margin-right: 0;
    }
    .lititle{
        height: 40px;
    }
    .true-header-left ul li:hover{
        border-bottom: 2px solid#C30D23;
        cursor: pointer;
        color: #C30D23;
    }
    .weituo{
        position: absolute;
        top: 62px;
        left: 592px;
        background: #fff;
        display: none;
        z-index: 2;
    }
    .true-header-left ul li:hover .weituo{
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
</style>