<template>
    <div id="spread" class="spread text-center">
        <div class="container">
            <h4 class="title mb-3">HOWCORONAVIRUS IS SPREAD</h4>
            <h2 class="sub-title mb-5">TRANSMISSION OF COVID-19</h2>
            <p class="para fs-5 mb-4 w-50 m-auto">Because it's a new illness, we do not know exactly how coronavirus spreads from person to person. Similar viruses are
                spead in cough droplets</p>
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="item bg-white pb-3">
                            <div class="image">
                                <img class="w-100" src="../../assets/imgs/spread-a.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="p-3 mt-4">Person-to-person spread as close contact with infected</h3>
                                <p class="px-3">The coronavirus is thought to pread mainly from person to person.This can happen between people who are
                                    in close contact with one another</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="item bg-white pb-3">
                            <div class="image">
                                <img class="w-100" src="../../assets/imgs/spread-b.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="p-3 mt-4">Touching or contact with infected surfaces or objects</h3>
                                <p class="px-3">A person can get COVID-19 by touching a surface or object that has the virus on it and then touching
                                    their own mouth, nose or possibly their eyes</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="item bg-white pb-3">
                            <div class="image">
                                <img src="../../assets/imgs/spread-c.png" alt="" class="w-100">
                            </div>
                            <div class="text">
                                <h3 class="p-3 mt-4">Droplets that from infected person coughs or sneezes</h3>
                                <p class="px-3">The coronavirus is thought to pread mainly from person to person.This can happen between people who are
                                    in close contact with one another</p>
                            </div>
                        </div>
                    </div>
                </div>
                <RouterLink to="/questions" class="button text-decoration-none d-flex justify-content-center align-items-center rounded-pill mx-auto px-5 fs-5 fw-bold py-3">
                    <font-awesome-icon icon="fa-solid fas fas fa-question" class="icon me-2 border-1 rounded-pill border-white text-white" />
                    <p class="text-white m-0">Have question about spreading?</p>
                </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.spread{
    padding: 150px 0;
    background-color: #f8f9fa;
}
.spread .container .row .col-md-4 .item .image{
    border-bottom: 10px solid #2a80ea70;
}
.spread .container .row .col-md-4 .item h3{
    color: var(--active);
    font-size: 22px;
    font-weight: 700;
}
.spread .container .button{
    background-color: var(--active);
    width: fit-content;
    margin: 50px auto;
}
.icon{
    border: 2px solid white;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    padding: 2px;
}
</style>