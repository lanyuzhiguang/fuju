<template>
    <div>
        <headerone></headerone>
        <div class="sixsafety-header-two">
            <div class="sixsafety-logo">
                <img src="../img/logo.png" alt="">
                <a href="" style="color: #c30d23">百科</a>
                <a href="">专题</a>
            </div>
        </div>
        <div class="sixsafety-content">
            <div class="sixsafetyfang">六大安全保障</div>
            <div class="sixsafetyshuju">
                <span>发布时间：2017-07-27 11:52:4</span>
                <span style="padding-right: 20px;">作者：天</span>
                <span style="  padding-right: 50px;">浏览次数：1160次</span>
            </div>
            <div class="zaiyao">
                文章摘要：
            </div>
            <br>
            <br>
            <p>随着福居地产的不断壮大，有越来越多的有志之士加入。2016年硕果累累，福居地产将把专业代办，忠于委托的服务理念、全新的精英文化更好的运用到实际工作中来，不断提升我们的服务品质，更有福居地产“六大安全保障”为顾客的房屋买卖保驾护航！</p>
            <p>6大安全服务保障</p>
            <p>1、签前查封，损失先行垫付</p>
            <p>签约前已被依法查封，福居地产也未对该查封信息进行核实和披露，损失先行垫付。</p>
            <p>2、签前查封，损失先行垫付</p>
            <p>签约前已被依法查封，福居地产也未对该查封信息进行核实和披露，损失先行垫付。</p>
            <p>3、签前查封，损失先行垫付</p>
            <p>签约前已被依法查封，福居地产也未对该查封信息进行核实和披露，损失先行垫付。</p>
            <p>4、签前查封，损失先行垫付</p>
            <p>签约前已被依法查封，福居地产也未对该查封信息进行核实和披露，损失先行垫付。</p>
            <p>5、签前查封，损失先行垫付</p>
            <p>签约前已被依法查封，福居地产也未对该查封信息进行核实和披露，损失先行垫付。</p>
            <p>6、签前查封，损失先行垫付</p>
            <p>签约前已被依法查封，福居地产也未对该查封信息进行核实和披露，损失先行垫付。</p>
            <br>
            <br>
            <div class="siximg">
                <img src="../img/liu.jpg" alt="">
            </div>
            <div class="siximg">
                <img src="../img/liutwo.jpg" alt="">
            </div>
            <div class="siximg">
                <img src="../img/liuthree.jpg" alt="">
            </div>

        </div>
        <quanfooter></quanfooter>
    </div>
</template>

<script>
    import headerone from '~/components/index/headerquan'
    import quanfooter from '~/components/index/indexfooter'
    export default {
        name: "sixsafety",
        components: {
            quanfooter,
            headerone,
        },
    }
</script>

<style scoped>
    .sixsafety-header-two{
        height: 80px;
        width: 100%;
        border-bottom: 1px solid #CCCCCC;
    }
    .sixsafety-logo{
        width: 1100px;
        height: 80px;
        margin: 0 auto;
    }
    .sixsafety-logo img{
        float: left;
        display: block;
        margin: 20px 160px 20px 0px;
        width: 130px;
        height: 40px;
    }
    .sixsafety-logo a{
        color: #000;
        margin: 26px;
        line-height: 80px;
        text-decoration: none;
    }
    .sixsafety-logo a:hover{
        color: #c30d23;
    }
    .sixsafety-content{
        width: 1100px;
        margin: 0 auto;
    }
    .sixsafetyfang{
        margin-top: 64px;
        text-align: left;
        font-size: 28px;
        font-weight: 300;
        color: #000;
    }
    .sixsafetyshuju{
        color: #999999;
        font-size: 14px;
        margin: 45px 0;
    }
    .zaiyao{
        margin-top: 15px;
        color: #c30d23;
        font-size: 18px;
        font-weight: 600;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        height: 90px;
        line-height: 90px;
        text-align: left;
    }
    .sixsafety-content p{
        color: #999999;
        font-size: 14px;
        text-align: left;
    }
    .siximg{
        width: 530px;
        height: 400px;
        margin: 10px auto;
    }

</style>