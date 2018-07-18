<template>
    <div class="find">
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
                <div class="content-nav">
                    <span class="nav-left" >找回密码</span>
                    <a href=""class="nav-right">返回登录</a>
                </div>
                <div class="input-one">
                    <i class="iconfont icon-z-phone"></i>
                    <input type="text" placeholder="请输入手机号码" name="mobile"></div>
                <div class="input-two">
                    <i class="iconfont icon-mima"></i>
                    <input type="text" placeholder="请输入短信验证码">
                    <button>获取验证码</button>
                </div>
                <div class="btn">
                    <button>下一步</button></div>
            </div>
            <div class="footer">
                北京福居网网络科技有限公司|  Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有 |京ICP备13012924号-1
            </div >
        </div>

    </div>

</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>
    .find{
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
        position: relative;
        margin: 22px auto;
        padding:0px 132px 58px 132px;
        width: 360px;
        background: #FFFFFF;
        clear: both;
    }
    .content-nav{
        height: 30px;
        width: 360px;
        padding-bottom: 36px;
        padding-top: 30px;
    }
    .nav-left{
        float:left;
        font-size: 28px;
        color: #666;
    }
    .content-nav a, .content-nav a:hover{
        float: right;
        color: #f90;
        padding-top: 14px;
        cursor: pointer;

    }
    .input-one{
        position: relative;
        border: 1px solid #CCCCCC;
        width: 360px;
        height: 54px;
        background: none;
        margin-bottom: 20px;
    }
    .input-one input{
        border: 0px;
        width: 330px;
        height: 52px;
        background: none;
        padding-left: 30px;
        font-size: 100%;
    }
    .input-one .iconfont,.input-two .iconfont{
        font-size: 20px;
        position: absolute;
        top: 18px;
        left: 10px;
    }
    .input-two {
        position: relative;
        border: 1px solid #CCCCCC;
        width: 238px;
        height: 54px;
        background: none;
        margin-bottom: 20px;


    }
    .input-two input{
        border: 0px;
        width: 208px;
        height: 52px;
        background: none;
        padding-left: 30px;
        font-size: 100%;
    }
    .input-two button{
        position: absolute;
        top: 0px;
        left: 248px;
        background: none;
        border: 1px solid #CCCCCC;
        width: 112px;
        height: 54px;
        margin-bottom: 20px;
        cursor: pointer;
        color: #666;
    }
    .btn button{
        border: 0px;
        background: #C30D23;
        color: #fff;
        width: 360px;
        height: 50px;
        cursor: pointer;
    }

    a,a:hover{
        font-size: 13px;
        font-weight: 700;
        color: #000;
        text-decoration: none;
    }
    .footer{
        margin-top:52px ;
        font-size: 14px;
        color: #666;
        text-align: center;
        margin-bottom: 40px;
    }







</style>