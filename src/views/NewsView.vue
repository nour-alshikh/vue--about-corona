<template>
    <div class="news">
        <div class="container">
            <h4 class="title text-center mb-3">RECENT FROM BLOG</h4>
            <h2 class="sub-title text-center mb-5">LATEST UPDATE</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="item mb-5 p-4 bg-white">
                        <div class="image ">
                            <img class="w-100 rounded-3" src="../assets/imgs/blog-a.jpg" alt="">
                        </div>
                        <div class="details p-4 text-center">
                            <h4 class="mb-3 fw-bold">Caring for someone at home</h4>
                            <p class="fs-5">Most people who get sick with COVID-19 will have only mild illness and shouldrecover at home.Care at home can help stop the spread of COVID-19</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item mb-5 p-4 bg-white">
                        <div class="image ">
                            <img class="w-100 rounded-3" src="../assets/imgs/blog-b.jpg" alt="">
                        </div>
                        <div class="details p-4 text-center">
                            <h4 class="mb-3 fw-bold">15 ways to keep safe and healthy</h4>
                            <p class="fs-5">Most people who get sick with COVID-19 will have only mild illness and shouldrecover at home.Care at home can help stop the spread of COVID-19</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item mb-5 p-4 bg-white">
                        <div class="image ">
                            <img class="w-100 rounded-3" src="../assets/imgs/blog-c.jpg" alt="">
                        </div>
                        <div class="details p-4 text-center">
                            <h4 class="mb-3 fw-bold">If you think you are sick</h4>
                            <p class="fs-5">if you are sick with COVID-19 or think you might have it, follow the steps below to help protect other people in your home and community</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.news{
padding: 200px 0 100px;
min-height: calc(100vh - 100px);
background-color: #f8f9fa;
}
.item{
    min-height: 565px;
    cursor: pointer;
    transition: 0.6s;
}
.item:hover{
    transform: scale(1.08,1.08);
}
.details h4,
.details p{
    color: var(--main-color);
}
</style>