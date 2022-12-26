<template>
    <div class="acc rounded-3">
        <div :class="['con', openState1 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState1 ? 'active' : '']">What is the source of the virus?</h4>
                    <div @click="openState1 = !openState1"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState1 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState1">
                    <p class="fs-5">
                        Coronaviruses are a large family of viruses. Some cause illness in people and others, such as canine and feline
                        coronaviruses, only infect animals.Rarely, animal coronaviruses tha infect animals have emerged to infect people and
                        can spread between people. This is suspected to have occured for the virus that causes COVID-19. Middle East Respiratory
                        Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS) are two other examples of coronaviruses that originated
                        from animals and then spread to people. More information about the source and spread of COVID_19 is available on the
                        <span class="active">Situation Summary : Source and Spread of the Virus.</span>
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState2 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState2 ? 'active' : '']">How does the virus spread?</h4>
                    <div @click="openState2 = !openState2"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState2 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState2">
                    <p class="fs-5">
                        This virus was first detected in Wuhan City, Hubei Province, China. The first infections were linked to a live animal
                        market, but the virus is now spreading from person-to-person. It's important to note that person-to-person spread ca
                        happen on a continuum. Some viruses are highly contagious (like measles), while other viruses are less so.
                    </p>
                    <p class="fs-5">
                        The virus that cause COVID_19 seems to be spreading easily and sustainably in the community("community spread") in <span class="active">some
                        affected geographic areas.</span> Community spread means people have been infected with the virus in an area, including some who
                        are not sure how or where they became infected.
                    </p>
                    <p class="fs-5">
                        Learn what is known about the <span class="active">spread of newly emerged coronaviruses.</span>
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState3 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState3 ? 'active' : '']">Can someone who has had COVID-19 spread the illness to others?</h4>
                    <div @click="openState3 = !openState3"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState3 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState3">
                    <p class="fs-5">
                        The virus that causes COVID-19 is <span class="active">spreading from person-to-person.</span> Someone who is actively sick with COVID-19 can spread the illness to others. That is why CDC recommends that these patients be isolated either in the hospital or at home (sepending on how sick they are) until they are better and no longer pose a risk of infecting others.
                    </p>
                    <p class="fs-5">
                        How long someone is actively sick can vary so the decision on when to release someone from isolation is made on a
                        case-by-case basis in consultation with doctors, infection prevention and control experts, and public health officials
                        and involves considering specifics of each situation including disease severity, illness signs and symptoms, and results
                        of laboratory testing for the patient.
                    </p>
                    <p class="fs-5">
                        Current <span class="active">CDC guidance for when it is OK to release someone from isolation</span> is made on a case by case basis and includes
                        meeting all of the following requirements:
                    </p>
                    <p class="fs-5">
                        The patient is free from fever without the use of fever-reduction medications.
                    </p>
                    <p class="fs-5">
                        The patient is no longer showing symptoms, including cough.
                    </p>
                    <p class="fs-5">
                        The Patient has tested negative on at least two consecutive respiratory specimens collected at least 24 hours apart.
                    </p>
                    <p class="fs-5">
                        Someone who has been released from isolation is not considered to pose arisk of infection to others.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState4 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState4 ? 'active' : '']">Will warm weather stop the outbreak of COVID-19?</h4>
                    <div @click="openState4 = !openState4"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState4 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState4">
                    <p class="fs-5">
                    It is not yet known whether weather and temperature impact the spread of COVID-
                    19. Some other viruses, like the common cold and flu, spread more during cold
                    weather months but that does not mean it is impossible to become sick with these
                    viruses during other months. At this time, it is not known whether the spread of
                    COVID-19 will decrease when weather becomes warmer. There is much more to
                    learn about the transmissibility, severity, and other features associated with COVID-
                    19 and investigations are ongoing.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState5 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState5 ? 'active' : '']">Can the virus that causes COVID-19 be spread through food including refigerated or frozen food?</h4>
                    <div @click="openState5 = !openState5"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState5 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState5">
                    <p class="fs-5">
                        Coronaviruses are generally thought to be spread from person-to-person through
                        respiratory droplets. Currently there is no evidence to support transmission of
                        COVID-19 associated with food. Before preparing or eating food it is important to
                        always wash your hands with soap and water for 20 seconds for general food
                        safety. Throughout the day wash your hands after blowing your nose, coughing or
                        sneezing, or going to the bathroom.
                    </p>
                    <p class="fs-5">
                        It may be possible that a person can get COVID-19 by touching a surface or object
                        that has the virus on it and then touching their own mouth, nose, or possibly their
                        eyes, but this is not thought to be the main way the virus spreads.
                    </p>
                    <p class="fs-5">
                        In general, because of poor survivability of these coronaviruses on surfaces, there
                        is likely very low risk of spread from food products or packaging that are shipped
                        over a period of days or weeks at ambient, refrigerated, or frozen temperatures.
                    </p>
                    <p class="fs-5">
                        Learn what is known about the <span class="active">spread of COVID-19.</span>
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState6 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState6 ? 'active' : '']">What i community spread?</h4>
                    <div @click="openState6 = !openState6"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState6 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState6">
                    <p class="fs-5">
                        Community spread means people have been infected with the virus in an area, including some who are not sure how or where
                        they became infected.
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

.ques h4:hover{
    color: var(--active);
}
</style>

<script>
export default {
    data() {
        return {
            openState1:true,
            openState2:false,
            openState3:false,
            openState4:false,
            openState5:false,
            openState6:false,
        }
    },
    methods: {

    }
}
</script>