<template>
    <div class="symptoms">
        <div class="container">
            <h4 class="text-center title mb-3">WHAT ARE THE SYMPTOMS OF COVID-19</h4>
            <h2 class="text-center sub-title mb-5">SYMPTOMS OF CORONAVIRUS</h2>
            <p class="text-center para fs-5 mb-4 w-75 m-auto">The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose,sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symproms may appear 2-14 days after exposure.</p>
            <div class="row syms">
                <div class="col-md-4">
                    <div class="item bg-white p-4">
                        <div class="image position-relative ">
                            <img class="rounded-circle w-25"  src="../assets/imgs/symptom-a.png" alt="">
                        </div>
                        <div class="desc">
                            <h3 class="symp fs-5 fw-bold">Fever</h3>
                            <p class="details fs-5"><span class="fw-bold">High Fever - </span>this means you feel hot to touch on your chest or back (you do not need
                                to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item bg-white p-4">
                        <div class="image position-relative">
                            <img class="rounded-circle w-25" src="../assets/imgs/symptom-b.png" alt="">
                        </div>
                        <div class="desc">
                            <h3 class="symp fs-5 fw-bold">Cough</h3>
                            <p class="details fs-5"><span class="fw-bold">Continuous cough - </span>this means coughing a lot for more than an hour, or 3 or more
                                coughing episodes in 24 hours(if you usually have a cough, it may be worse than usual)</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item bg-white p-4">
                        <div class="image position-relative">
                            <img class="rounded-circle w-25" src="../assets/imgs/symptom-c.png" alt="">
                        </div>
                        <div class="desc">
                            <h3 class="symp fs-5 fw-bold">Shortness of breath </h3>
                            <p class="details fs-5"><span class="fw-bold">Difficulty breathing - </span>Around 1 out of every 6 people who gets COVID-19 becomes seriously
                                    ill and develop difficulty breathing or shortness of breath</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row warn bg-white p-5 justify-content-between align-items-center">
                <div class="col-md-7 mb-5">
                    <div class="item">
                        <div class="row">
                            <i></i>
                            <div class="desc fs-5 fst-italic"><span class="fw-bold fst-normal">Stay at home and call your doctor: </span>If you think you have been exposed to COVID-19 and develop a fever and any symptoms, such as cough or difficulty breathing, call your healthcare provider as soon as possible for medical advice.</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                            <RouterLink to="/questions" class="button text-decoration-none rounded-pill row">
                                <i></i>
                                <p class="text-white mb-0 p-4 mx-auto py-3 fs-5 fw-bold">Have question? Find answer</p>
                            </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.symptoms {
    padding: 250px 0 150px;
    min-height: calc(100vh - 100px);
    background-color: #f8f9fa;
}
.symptoms .container .syms{
    margin: 100px 0;
}
.symptoms .container .syms .col-md-4{
    margin-bottom: 60px;
}
.symptoms .container .syms .col-md-4 .item{
    min-height: 500px;

}
.symptoms .container .syms .col-md-4 .item .image img{
    position: absolute;
    top: -70px;
    right: 0;
}

.symptoms .container .syms .col-md-4 .item .desc .symp{
    color: var(--active);
}

.symptoms .container .warn .col-md-7 .item .desc span{
    color: var(--active);
}
.symptoms .container .warn .col-md-4 .item .button {
    background-color: var(--active);
    width: fit-content;
}

</style>