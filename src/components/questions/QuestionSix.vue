<template>
    <div class="acc rounded-3">
        <div :class="['con', openState1 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState1 ? 'active' : '']">COVID-19 virus can be transmitted in areas with hot annd humid climates?
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
                        From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS,
                        including areas with hot and humid weather. Regardless of climate, adopt
                        protective measures if you live in, or travel to an area reporting COVID-19. The
                        best way to protect yourself against COVID-19 is by frequently cleaning your
                        hands. By doing this you eliminate viruses that may be on your hands and avoid
                        infection that could occur by then touching your eyes, mouth, and nose.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState2 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState2 ? 'active' : '']">Cold weather and snow CANNOT kill the new coronavirus
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
                        There is no reason to believe that cold weather can kill the new coronavirus or
                        other diseases. The normal human body temperature remains around 36.5°C to
                        37°C, regardless of the external temperature or weather. The most effective way to
                        protect yourself against the new coronavirus is by frequently cleaning your hands
                        with alcohol-based hand rub or washing them with soap and water.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState3 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState3 ? 'active' : '']">Taking a hot bath does not prevent the new coronavirus disease
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
                        Taking a hot bath will not prevent you from catching COVID-19. Your normal body
                        temperature remains around 36.5°C to 37°C, regardless of the temperature of your
                        bath or shower. Actually, taking a hot bath with extremely hot water can be harmful,
                        as it can burn you. The best way to protect yourself against COVID-19 is by
                        frequently cleaning your hands. By doing this you eliminate viruses that may be on
                        your hands and avoid infection that could occur by then touching your eyes, mouth,
                        and nose.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState4 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState4 ? 'active' : '']">The new coronavirus CANNOT be transmitted through mosquito bites
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
                        To date there has been no information nor evidence to suggest that the new
                        coronavirus could be transmitted by mosquitoes. The new coronavirus is a
                        respiratory virus which spreads primarily through droplets generated when an
                        infected person coughs or sneezes, or through droplets of saliva or discharge from
                        the nose. To protect yourself, clean your hands frequently with an alcohol-based
                        hand rub or wash them with soap and water. Also, avoid close contact with anyone
                        who is coughing and sneezing.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState5 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState5 ? 'active' : '']">Are hand dryres effective in killing the new coronavirus?
                    </h4>
                    <div @click="openState5 = !openState5"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState5 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState5">
                    <p class="fs-5">
                        No. Hand dryers are not effective in killing the 2019-nCoV. To protect yourself
                        against the new coronavirus, you should frequently clean your hands with an
                        alcohol-based hand rub or wash them with soap and water. Once your hands are
                        cleaned, you should dry them thoroughly by using paper towels or a warm air dryer.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState5 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState5 ? 'active' : '']">Can an ultraviolet disinfection lamp kill the new coronavirus?
                    </h4>
                    <div @click="openState5 = !openState5"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState5 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState5">
                    <p class="fs-5">
                        UV lamps should not be used to sterilize hands or other areas of skin as UV radiation can cause skin irritation. 
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState6 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState6 ? 'active' : '']">How effective are thermal scanners in detecting people infected with the new coronavirus?
                    </h4>
                    <div @click="openState6 = !openState6"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState6 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState6">
                    <p class="fs-5">
                        Thermal scanners are effective in detecting people who have developed a fever
                        (i.e. have a higher than normal body temperature) because of infection with the
                        new coronavirus.
                    </p>
                    <p class="fs-5">
                        However, they cannot detect people who are infected but are not yet sick with fever.
                        This is because it takes between 2 and 10 days before people who are infected
                        become sick and develop a fever.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState7 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState7 ? 'active' : '']">Do vaccines against pneumonia protect you against the new coronavirus?
                    </h4>
                    <div @click="openState7 = !openState7"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                                openState7 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState7">
                    <p class="fs-5">
                        No. Vaccines against pneumonia, such as pneumococcal vaccine and
                        Haemophilus influenza type B (Hib) vaccine, do not provide protection against the
                        new coronavirus.
                    </p>
                    <p class="fs-5">
                        The virus is so new and different that it needs its own vaccine. Researchers are
                        trying to develop a vaccine against 2019-nCoV, and WHO is supporting their
                        efforts.
                    </p>
                    <p class="fs-5">
                        Although these vaccines are not effective against 2019-nCoV, vaccination against
                        respiratory illnesses is highly recommended to protect your health.
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