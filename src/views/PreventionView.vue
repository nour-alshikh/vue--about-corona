<template>
        <div class="prevention">
            <div class="container">
                <h4 class="text-center title mb-3">HOW TO PROTECT YOURSELF?</h4>
                <h2 class="text-center sub-title mb-5">PREVENTION &amp; ADVICE</h2>
                <p class="text-center para fs-5 mb-4 w-75 m-auto">There is currently no vaccine to prevent coronavirus disease
                    2019 (COVID-19).<span class="fw-bold">The best way to prevent illness is to avoid being exposed to the
                        virus</span>Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website
                    and through your national and local public health authority</p>
                    <PrevAdvice />
                    <PrevButtons />
                    <PrevSteps />
                    <PrevHandWash />
            </div>
        </div>
</template>

<style scoped>
.prevention {
    padding: 250px 0 150px;
    min-height: calc(100vh - 100px);
    background-color: #f8f9fa;
}
</style>

<script>
import PrevAdvice from '../components/Prev/PrevAdvice.vue'
import PrevButtons from '../components/Prev/PrevButtons.vue'
import PrevSteps from '../components/Prev/PrevSteps.vue'
import PrevHandWash from '../components/Prev/PrevHandWash.vue'
export default {
    components:{
        PrevAdvice,
        PrevButtons,
        PrevSteps,
        PrevHandWash,
    }
}
</script>