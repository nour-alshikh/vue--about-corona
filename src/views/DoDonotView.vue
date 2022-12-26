<template>
<div class="do">
    <div class="container">
        <h4 class="title text-center mb-3">DO'S &amp; DON'TS</h4>
        <h2 class="sub-title text-center mb-5">PROTECT YOURSELF</h2>
        <p class="para text-center fs-5 mb-4">The best thing you can do now is plan for how you can adapt your daily routine. Take few steps to protect yourself as clean your hands often, Avoid close contact, Cover coughs and sneezes, clean saily used surfaces etc. The best way to prevent illness is to avoid being exposed to this virus</p>
        <div class="row">
            <div class="col-md-3">
                <div class="item">
                    <div class="donot mb-4 d-flex justify-content-center align-items-center">
                        <p class="fs-5 fw-bold me-3 text-end">Avoid close contact</p>
                        <div class="image position-relative">
                            <div class="icon d-flex justify-content-center align-items-center position-absolute">
                                <font-awesome-icon icon="fa-solid fas fas fa-xmark" class="text-white" />
                            </div>
                            <img class="w-100 rounded-circle" src="../assets/imgs/donts-a.png" alt="">
                        </div>
                    </div>
                    <div class="donot mb-4 d-flex justify-content-center align-items-center">
                        <p class="fs-5 fw-bold me-3 text-end">Don't Touch Face</p>
                        <div class="image position-relative">
                            <div class="icon d-flex justify-content-center align-items-center position-absolute">
                                <font-awesome-icon icon="fa-solid fas fas fa-xmark" class="text-white" />
                            </div>
                            <img class="w-100 rounded-circle" src="../assets/imgs/donts-b.png" alt="">
                        </div>
                    </div>
                    <div class="donot mb-4 d-flex justify-content-center align-items-center">
                        <p class="fs-5 fw-bold me-3 text-end">Social Distancing</p>
                        <div class="image position-relative">
                            <div class="icon d-flex justify-content-center align-items-center position-absolute">
                                <font-awesome-icon icon="fa-solid fas fas fa-xmark" class="text-white" />
                            </div>
                            <img class="w-100 rounded-circle" src="../assets/imgs/donts-c.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="image mb-5">
                    <img class="w-100" src="../assets/imgs/protect.png" alt="">
                </div>
            </div>
            <div class="col-md-3">
                <div class="item">
                    <div class="dos mb-4 d-flex justify-content-center align-items-center">
                        <div class="image position-relative">
                            <div class="icon d-flex justify-content-center align-items-center position-absolute">
                                <font-awesome-icon icon="fa-solid fas fas fa-check" class="text-white" />
                            </div>
                            <img class="w-100 rounded-circle" src="../assets/imgs/donts-a.png" alt="">
                        </div>
                        <p class="fs-5 fw-bold ms-3 text-start">Wash Your Hands</p>
                    </div>
                    <div class="dos mb-4 d-flex justify-content-center align-items-center">
                        <div class="image position-relative">
                            <div class="icon d-flex justify-content-center align-items-center position-absolute">
                                <font-awesome-icon icon="fa-solid fas fas fa-check" class="text-white" />
                            </div>
                            <img class="w-100 rounded-circle" src="../assets/imgs/donts-b.png" alt="">
                        </div>
                        <p class="fs-5 fw-bold ms-3 text-start">Drink Much Water</p>
                    </div>
                    <div class="dos mb-4 d-flex justify-content-center align-items-center">
                        <div class="image position-relative">
                            <div class="icon d-flex justify-content-center align-items-center position-absolute">
                                <font-awesome-icon icon="fa-solid fas fas fa-check" class="text-white" />
                            </div>
                            <img class="w-100 rounded-circle" src="../assets/imgs/donts-c.png" alt="">
                        </div>
                        <p class="fs-5 fw-bold ms-3 text-start">Use Face Mask</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.do{
    padding: 200px 0 100px;
    min-height: calc(100vh - 100px);
    background-color: #f8f9fa;
}
.row{
    margin-top: 70px;
}
.donot p{
    color: var(--active);
    width: 183px;
    margin-bottom: 0;
}
.donot .image{
    min-width: 100px;
    min-height: 100px;
    border-radius: 50%;
    border: 3px solid #f64850;
}
.donot .image .icon{
    width: 25px;
    height: 25px;
    top: 10px;
    border-radius: 50%;
    background-color: #f64850;
}
.dos p{
    color: var(--active);
    width: 183px;
    margin-bottom: 0;
}
.dos .image{
    min-width: 100px;
    min-height: 100px;
    border-radius: 50%;
    border: 3px solid #009f00;
}
.dos .image .icon {
    width: 25px;
    height: 25px;
    top: 10px;
    border-radius: 50%;
    background-color: #009f00;
    right: 0;
}
@media (max-width:767px) {
    .donot .image .icon{
        top: 20px;
    }
    .dos .image .icon{
        top: 20px;
    }
}
</style>