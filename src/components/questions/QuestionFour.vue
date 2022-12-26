<template>
    <div class="acc rounded-3">
        <div :class="['con', openState1 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState1 ? 'active' : '']">What is the symptoms of the COVID-19?
                    </h4>
                    <div @click="openState1 = !openState1"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState1 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState1">
                    <p class="fs-5">
                        The most common symptoms of COVID-19 are fever, tiredness, and dry cough.
                        Some patients may have aches and pains, nasal congestion, runny nose, sore
                        throat or diarrhea. These symptoms are usually mild and begin gradually. Some
                        people become infected but don't develop any symptoms and don't feel unwell.
                        Most people (about 80%) recover from the disease without needing special
                        treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously
                        ill and develops difficulty breathing. Older people, and those with underlying
                        medical problems like high blood pressure, heart problems or diabetes, are more
                        likely to develop serious illness. People with fever, cough and difficulty breathing
                        should seek medical attention.
                    </p>
                    <p class="fs-5">
                        Read about<span class="active">COVID-19 Symptoms from CDC.gov.</span>
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState2 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState2 ? 'active' : '']">Shoud I be tested for COVID-19?
                    </h4>
                    <div @click="openState2 = !openState2"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState2 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState2">
                    <p class="fs-5">
                        Not everyone needs to be tested for COVID-19. For information about testing, see<span class="active">testing for COVID-19</span>
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState3 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState3 ? 'active' : '']">Where can I get tested for COVID-19
                    </h4>
                    <div @click="openState3 = !openState3"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState3 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState3">
                    <p class="fs-5">
                        The process and locations for testing vary from place to place. Contact your state,
                        local, tribal, or territorial department for more information, or reach out to a medical
                        provider. State and local public health departments have received tests from CDC
                        while medical providers are getting tests developed by commercial manufacturers.
                        While supplies of these tests are increasing, it may still be difficult to find
                        someplace to get tested.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState4 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState4 ? 'active' : '']">Can a person test negative and later test positive for COVID-19?
                    </h4>
                    <div @click="openState4 = !openState4"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState4 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState4">
                    <p class="fs-5">
                        Using the CDC-developed diagnostic test, a negative result means that the virus that causes COVID-19 was not found in the person's sample. In the early stages of infection, it is possible the virus will not be detected.
                    </p>
                    <p class="fs-5">
                        For COVID-19, a negative test result for a sample collected while a person has
                        symptoms likely means that the COVID-19 virus is not causing their current illness.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.acc {
    border: 2px solid #dddddd;
    color: var(--main-color);
    transition: 0.5s;
    background-color: #f7fafe;
}

.icon {
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    min-width: 40px;
    min-height: 40px;
}

.con,
.ques,
.answer,
.icon,
.ques h4 {
    transition: 0.5s;
}

.ba {
    background-color: white;
}

.active {
    color: var(--active);
}

.ques h4:hover {
    color: var(--active);
}
</style>

<script>
export default {
    data() {
        return {
            openState1: true,
            openState2: false,
            openState3: false,
            openState4: false,
            openState5: false,
            openState6: false,
        }
    },
    methods: {

    }
}
</script>