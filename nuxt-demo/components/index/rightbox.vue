<template>
    <ul class="rightbox">
        <li>
            <i class="iconfont icon-rili"></i>
            <div class="righttitle">
                日程
            </div>
            <div class="leftkuang">
                我的日程
            </div>
        </li>
        <li>
            <i class="iconfont icon-shoucang1"></i>
            <div class="righttitle">关注</div>
            <div class="leftkuang">
                我的关注
            </div>
        </li>
        <li>
            <i class="iconfont icon-fangzi"></i>
            <div class="righttitle">
            卖房
        </div>
            <div class="leftkuang">
                在线卖房
            </div>
        </li>
        <li>
                <i class="iconfont icon-toolsbar"></i>
            <div class="righttitle">
                工具
            </div>
            <div class="leftkuang">
                房贷计算器
            </div>
        </li>
        <li>
            <i class="iconfont icon-z-phone"></i>
            <div class="righttitle">
            APP
        </div>
            <div class="leftkuangimg">
                <img src="../footerimg/app.png" alt="">
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "rightbox"
    }
</script>

<style>
    .rightbox {
    position: fixed;
    top: 50%;
    right: 0;
    background: #fff;
    z-index: 2;
    width: 42px;
    text-align: center;
    padding: 15px 0;
    transform: translateY(-50%);
    color: #000;
     }
    .rightbox li{
        list-style: none;
        padding: 10px 0;
        text-decoration: none;
        width: 100%;
        margin: 12px 0;
        cursor: pointer;
        position: relative;
    }
    .rightbox li .iconfont{
        font-size: 26px;
    }
    .leftkuang{
        display: none;
        z-index: 2;
        position: absolute;
        top: 50%;
        right: 50px;
        background: #5f1985;
        width: 80px;
        padding: 10px;
        border-radius: 3px;
        color: #fff;
        font-size: 14px;
        white-space: nowrap;
        transform: translateY(-50%);
        text-overflow: ellipsis;
    }
    .leftkuang::after{
    content: "";
    position: absolute;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    border: 10px  solid transparent;
    border-left: 10px solid #5f1985 ;
}
    .leftkuangimg img{
        display: none;
        z-index: 2;
        position: absolute;
        top: 80%;
        right: 42px;
        width: 200px;
        height: 200px;
        transform: translateY(-50%);
    }
    .rightbox li:hover{
    background: #5F1985;
    color: #fff;
}
    .rightbox li:hover .leftkuang{
        display: block;
    }
    .rightbox li:hover .leftkuangimg img{
      display: block;
}

</style>