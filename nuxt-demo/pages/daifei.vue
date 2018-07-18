<template>
    <div>
        <headerone></headerone>
        <div class="daifei-header-two">
            <div class="daifei-logo">
                <img src="../img/logo.png" alt="">
                <a href="" style="color: #c30d23">百科</a>
                <a href="">专题</a>
            </div>
        </div>
        <div class="daifei-content">
            <div class="daifeifang">青城率先取消二手房贷款高额代办费</div>
            <div class="daifeishuju">
                <span>发布时间：2017-07-27 11:52:4</span>
                <span style="padding-right: 20px;">作者：天</span>
                <span style="padding-right: 50px;">浏览次数：1160次</span>
            </div>
            <div class="daifei-ershou">二手房</div>
            <div class="daifeizaiyao">
                文章摘要：
            </div>
            <br>
            <br>
            <p>青城率先取消二手房贷款高额代办费</p>
            <p>贷款代办费是二手房行业存在较为普遍的一项收费，标准通常能到总额的2%-3%，以贷款总额50万元为例计算，即需要支付给二手房门店1万—1.5万元的贷款代办费，费用十分高昂。</p>
            <p>重要的是这项收费并无合理依据，而只是当前市场的不成文规则，实际客户在自行办理贷款过程中并不需要花费如此高昂的代价。福居地产是率先推行取消此项不合理收费飞良心企业，目的就是为了让每一位客户不花一份冤枉钱，用合理的钱办合理的事。</p>
            <br>
            <br>
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
    }
</script>

<style scoped>
    .daifei-header-two{
        height: 80px;
        width: 100%;
        border-bottom: 1px solid #CCCCCC;
    }
    .daifei-logo{
        width: 1100px;
        height: 80px;
        margin: 0 auto;
    }
    .daifei-logo img{
        float: left;
        display: block;
        margin: 20px 160px 20px 0px;
        width: 130px;
        height: 40px;
    }
    .daifei-logo a{
        color: #000;
        margin: 26px;
        line-height: 80px;
        text-decoration: none;
    }
    .daifei-logo a:hover{
        color: #c30d23;
    }
    .daifei-content{
        width: 1100px;
        margin: 0 auto;
    }
    .daifeifang{
        margin-top: 64px;
        text-align: left;
        font-size: 28px;
        font-weight: 300;
        color: #000;
    }

    .daifeishuju{
        color: #999999;
        font-size: 14px;
        margin: 10px 0;
        padding-top: 35px;
    }
    .daifei-ershou{
        margin: 20px 0;
        background: #D99DD8;
        width: 64px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        color: #8C318C;
    }
    .daifeizaiyao{
        margin-top: 30px;
        color: #c30d23;
        font-size: 18px;
        font-weight: 600;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        height: 90px;
        line-height: 90px;
        text-align: left;
    }
    .daifei-content p{
        color: #999999;
        font-size: 14px;
        text-align: left;
    }

</style>