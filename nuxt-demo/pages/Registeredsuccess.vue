<template>
    <div class="success">
        <header>
        <span class="logo">
            <img src="../img/logo.png" alt="">
        </span>
            <div class="back">
                <span class="back-left">返回福居网首页</span>
                <span class="back-right"><img src="../zhuce/u44.png" alt=""></span>
            </div>
        </header>
        <div class="main">
            <div class="content">
                <img src="../zhuce/u165.png" alt="">
                <p>恭喜你，注册成功，赶紧登录找房源吧！</p>
                <button>立即登录</button>
            </div>
            <div class="footer">
                北京福居网网络科技有限公司|  Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有 |京ICP备13012924号-1
            </div >
        </div>
    </div>
</template>

<script>
    export default {
        name: "Registeredsuccess"
    }
</script>

<style scoped>
    .success{
        margin: 0;
        padding: 0;
    }
    header{
        margin: 0 auto;
        width: 1100px;
        height: 80px;
        clear: both;
        top: 0;
    }
    .logo{
        float:left ;
        width: 120px;
        height: 40px;
        margin: 23px;
        cursor: pointer;
    }
    .back{
        float: right;
        width: 130px;
        height: 40px;
        margin: 23px;
        font-size: 14px;
        cursor: pointer;
    }
    .back-right img{
        float: right;
        display: block;
        width: 24px;
        height: 24px;
    }
    .main{
        background: #F2F2F2;
        overflow: hidden;
        width: 100%;
    }
    .content{
        background: #fff;
        margin:40px auto ;
        width: 626px;
        height:414px;
        text-align: center;
        font-size: 14px;
        color: #666;
        overflow: hidden;
    }
    .content img{
       display: block;
        width: 124px;
        height: 124px;
       margin: 70px auto;
    }
    .content button{
        background: none;
        border: 1px solid red;
        width: 116px;
        height: 32px;
        border-radius:8px;
        margin-top: 20px;
    }
    .footer{
        margin-top:52px ;
        font-size: 14px;
        color: #666;
        text-align: center;
        margin-bottom: 40px;
    }
</style>