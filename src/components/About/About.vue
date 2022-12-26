<template>
    <div class="about">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-6">
                    <div class="item">
                        <h4 class="title mb-3">ABOUT THE DISEASE</h4>
                        <h2 class="sub-title mb-5">CORONAVIRUS (COVID-19)</h2>
                        <p class="para fs-4 mb-4"><span class="para fw-bold">COVID-19 is a new ilness that can affect
                                your lungs and airways. </span>It's caused by avirus called coronavirus. it was
                            discovered in December 2019 in Wuhan, Hubei, China.</p>
                        <p class="para fs-5 mb-4">Common signs of infection include repiratory symptoms, fever, cough,
                            shortness of breath and breathing difficulties. In more severe cases, infection can cause
                            pneumonia severe acute respiratory syndrome, kidney failure and even death.</p>
                        <p class="para fs-5 mb-4">Standard recommendations to prevent infection spread include regular
                            hand washing, covering mouth and nose when coughingand sneezing, thoroughly cooking meat and
                            eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as
                            coughing and sneezing.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <div class="subjects bg-white rounded-2">
                            <h4 class="px-4 pt-4 pb-3 fw-bold">What you need to know</h4>
                            <a href="#spread" class="subject text-decoration-none d-flex justify-content-between align-items-center">
                                <p class="p-4 mb-0 fs-5">How coronavirus is spread</p>
                                <font-awesome-icon icon="fa-solid fas fas fa-arrow-right"
                                    class="icon fs-5 me-5" />
                            </a>
                            <RouterLink to="/symptoms" class="subject d-flex justify-content-between align-items-center text-decoration-none">
                                <p class="p-4 mb-0 fs-5">Symptoms of coronavirus</p>
                                <font-awesome-icon icon="fa-solid fas fas fa-arrow-right"
                                    class="icon fs-5 me-5" />
                            </RouterLink>
                            <RouterLink to="/prevention" class="subject d-flex justify-content-between align-items-center text-decoration-none">
                                <p class="p-4 mb-0 fs-5">How to protect yourself</p>
                                <font-awesome-icon icon="fa-solid fas fas fa-arrow-right"
                                    class="icon fs-5 me-5" />
                            </RouterLink>
                            <RouterLink to="/treatment" class="subject d-flex justify-content-between align-items-center text-decoration-none">
                                <p class="p-4 mb-0 fs-5">Treatment for coronavirus</p>
                                <font-awesome-icon icon="fa-solid fas fas fa-arrow-right"
                                    class="icon fs-5 me-5" />
                            </RouterLink>
                            <RouterLink to="/do&donot" class="subject d-flex justify-content-between align-items-center text-decoration-none">
                                <p class="p-4 mb-0 fs-5 text-decoration-none">Myth-Busters of coronavirus</p>
                                <font-awesome-icon icon="fa-solid fas fas fa-arrow-right"
                                    class="icon fs-5 me-5" />
                            </RouterLink>
                            <RouterLink to="/questions" class="subject d-flex justify-content-between align-items-center text-decoration-none">
                                <p class="p-4 mb-0 fs-5 text-decoration-none">Questions &amp; answers</p>
                                <font-awesome-icon icon="fa-solid fas fas fa-arrow-right"
                                    class="icon fs-5 me-5" />
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about {
    padding: 250px 0 150px;
    min-height: calc(100vh - 100px);
    background-color: #f8f9fa;
}

.subjects {
    border: 1px solid rgba(0, 0, 0, 0.121);
}

.subjects h4 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.121);
    color: var(--main-color);
}

.subjects .subject{
    border-bottom: 1px solid rgba(0, 0, 0, 0.121);
}

.subjects .subject p {
    color: var(--active);

}
.icon{
    color: var(--active);
}
</style>