<template>
<div class="home" @scroll="showButton">
    <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="row justify-content-between">
            <div class="col-lg-6">
                <div class="item">
                    <div class="title d-flex justify-content-center align-items-center flex-column flex-sm-row mb-5">
                        <h1>CORONA</h1>
                        <div class="title-rest">
                            <h2>COVID-19</h2>
                            <h2>VIRUS</h2>
                        </div>
                    </div>
                    <p class="pe-4 ps-4 mb-4">The coronavirus (COVID-19) was first reported in Wuhan, Hunei,China in December 2019 , the outbreak was later recognized as apandemic by the World Health Organization (WHO) on 11 March 2020.</p>
                    <div class="buttons d-flex justify-content-center align-items-center flex-column flex-md-row">
                        <RouterLink class="button rounded-pill px-5 py-3 text-decoration-none text-white d-flex justify-content-between align-items-center" to="/prevention">
                            <h3 class="page fs-5 mb-0">How To Protect</h3>
                            <font-awesome-icon icon="fa-solid fas fas fa-shield-halved" class="ms-3" />
                        </RouterLink>
                        <RouterLink class="button text-decoration-none px-5 py-3 d-flex justify-content-between align-items-center" to="/about">
                            <h3 class="page fs-5 mb-0">About COVID-19</h3>
                            <font-awesome-icon icon="fa-solid fas fa-arrow-right" class="up ms-2" />
                        </RouterLink>
                    </div>
                    <div class="stats d-flex justify-content-between align-content-center mb-5 flex-column flex-lg-row text-center">
                        <div class="stat mb-3">
                            <div class="name text-black-50 fw-bold fs-6">WORLDWIDE CASES</div>
                            <div class="num fs-3 fw-bold">8,949,671</div>
                        </div>
                        <div class="stat mb-3">
                            <div class="name text-black-50 fw-bold fs-6">DEATHS</div>
                            <div class="num fs-3 fw-bold">467,432</div>
                        </div>
                        <div class="stat mb-3">
                            <div class="name text-black-50 fw-bold fs-6">RECOVERD</div>
                            <div class="num fs-3 fw-bold">4,556,091</div>
                        </div>
                    </div>
                    <p class="text-black-50 fst-italic">*Last updated: Jun 21, 2020, 09:24 AM America/Chicago</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="item p-4">
                    <img class="w-100" src="../assets/imgs/header-a.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
.home{
        background-color: #f7f9fe;
        background-image: url('../assets/imgs/shape-a.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        min-height: 100vh;
        position: relative;
    }

.home .container .row{
    margin-top: 90px;
    padding-top: 100px;
}
.home .container .row .col-lg-6 .item .title h1{
    font-size: 86px;
    font-weight: 700;
    color: var(--alt-color);
}
.home .container .row .col-lg-6 .item .title .title-rest h2:first-child{
    color: var(--red);
    font-weight: 700;
}
.home .container .row .col-lg-6 .item .title .title-rest h2:last-child{
color: var(--alt-color);
    font-weight: 700;
    font-size: 50px;
}

.home .container .row .col-lg-6 .item p{
color: var(--main-color);
    word-spacing: 3.5px;
    line-height: 30.2px;
    font-size: 18px;
}
.home .container .row .col-lg-6 .item .buttons{
    margin: 90px 0;
}
.home .container .row .col-lg-6 .item .buttons .button:first-child {
    background-color: var(--active);
}
.home .container .row .col-lg-6 .item .stat .num{
    color: var(--alt-color);
}
@media (max-width:767px) {
    .home .container .row .col-lg-6 .item .title{
        text-align: center;
    }
    .home .container .row .col-lg-6 .item .title h1 {
            font-size: 50px;
        }
}
</style>

<script>
export default{

    name: 'App',
    data(){
        return{
        }
    },
    methods:{
        
    }
}
</script>