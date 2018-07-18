<template>
    <div class="login">
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
                    <span class="nav-left" >登录</span>
                    <a href=""class="nav-right">没有账号，立即注册</a>
                </div>
                <div class="input-one">
                    <i class="iconfont icon-z-phone"></i>
                    <input type="text" placeholder="请输入手机号码" name="mobile"></div>
                <div class="input-one">
                    <i class="iconfont icon-mima"></i>
                    <input type="text" placeholder="请输入密码"></div>
                <div class="btn">
                    <button>登录</button></div>
                <div class="zi">
                 忘记密码?
                </div>
                <div class="qw">
                <div class="qq">
                    <img src="../zhuce/u336.png" alt="">
                    <p> QQ登录</p>
                </div>
                <div class="qq">
                    <img src="../zhuce/u326.png" alt="">
                    <p> 微信登录</p>
                </div>
                <div class="qq">
                    <img src="../zhuce/u331.png" alt="">
                    <p> 微博登录</p>
                </div>
                </div>
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
    .login{
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
        text-decoration: none;
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
    .input-one .iconfont{
        font-size: 20px;
        position: absolute;
        top: 18px;
        left: 10px;
    }
    .btn button{
        border: 0px;
        background: #C30D23;
        color: #fff;
        width: 360px;
        height: 50px;
        cursor: pointer;
    }
    .zi{
        margin-top: 32px;
        width: 360px;
        text-align: center;
        font-size: 13px;
        border-bottom: 1px solid #E4E4E4;
        color: #666666;
        padding-bottom: 18px;
        margin-bottom: 16px;
    }
    .qw{
        width: 360px;
        display: flex;
        justify-content: center;
    }
    .qq img{
        width: 44px;
        height: 44px;
        display: block;
        margin: 0px 30px;
        cursor: pointer;
    }
    .qq p{
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        color: #7f828b;
        cursor: pointer;
        margin-top:4px;
        padding: 0;
    }
    .footer{
        margin-top:52px ;
        font-size: 14px;
        color: #666;
        text-align: center;
        margin-bottom: 40px;
    }







</style>