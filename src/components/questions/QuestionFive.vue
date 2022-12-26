<template>
    <div class="acc rounded-3">
        <div :class="['con', openState1 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState1 ? 'active' : '']">What should I do if there is an outbreak in my community?
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
                        During an outbreak, stay calm and put your preparedness plan to work. Follow the steps below:
                    </p>
                    <p class="fs-5 fw-bold active">
                        Protect yourself and others
                    </p>
                    <ul>
                        <li class="fs-5 mb-3">
                            Stay home if you are sick. Keep away from people who are sick. Limit close contact with others as much as possible (about 6 feet).
                        </li>
                    </ul>
                    <p class="fs-5 fw-bold">
                        Put your household plan into action
                    </p>
                    <ul>
                        <li class="fs-5 mb-3">
                            <span class="fw-bold">Stay informed about the local COVID-19 situation.</span> Be aware of temporary
                            school dismissals in your area, as this may affect your household's daily routine.
                        </li>
                        <li class="fs-5 mb-3">
                            <span class="fw-bold">practicing everyday preventive actions.</span> Cover coughs and sneezes
                            with a tissue and wash your hands often with soap and water for at least 20
                            seconds. If soap and water are not available, use a hand sanitizer that contains
                            60% alcohol. Clean frequently touched surfaces and objects daily using a
                            regular household detergent and water.
                        </li>
                        <li class="fs-5 mb-3">
                            <span class="fw-bold">Notify your workplace as soon as possible if your regular work schedule
                            changes.</span>Ask to work from home or take leave if you or someone in your
                            household gets sick with
                            <span class="active text-decoration-underline">COVID-19 symptoms</span>, or if your child's school is
                            dismissed temporarily.
                            <span class="active text-decoration-underline">Learn how businesses and employers can plan for and
                            respond to COVID-19.</span>
                        </li>
                        <li class="fs-5 mb-3">
                            <span class="fw-bold">Stay in touch with others by phone or email.</span> If you have a chronic medical
                            condition and live alone, ask family, friends, and health care providers to check
                            on you during an outbreak. Stay in touch with family and friends, especially
                            those at increased risk of developing severe illness, such as older adults and
                            people with severe chronic medical conditions.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div :class="['con', openState2 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState2 ? 'active' : '']">How do I prepare my children in case of COVID-19 outbreak in our community?
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
                        Outbreaks can be stressful for adults and children. Talk with your children about the
                        outbreak, try to stay calm, and reassure them that they are safe. If appropriate,
                        explain to them that most illness from COVID-19 seems to be mild.
                    </p>
                    <p class="fs-5 active">
                        Children respond differently to stressful situations than adults
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState3 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState3 ? 'active' : '']">What steps shoul parents take to protect children during a community outbreak?
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
                        This is a new virus and we are still learning about it, but so far, there does not seem
                        to be a lot of illness in children. Most illness, including serious illness, is happening
                        in adults of working age and older adults. If there cases of COVID-19 that impact
                        your child's school, the school may dismiss students. Keep track of school
                        dismissals in your community. Read or watch local media sources that report
                        school dismissals. If schools are dismissed temporarily, use alternative childcare
                        arrangements, if needed.
                    </p>
                    <p class="fs-5">
                        If your child/children become sick with COVID-19, notify their childcare facility or
                        school. Talk with teachers about classroom assignments and activities they can do
                        from home to keep up with their schoolwork.
                    </p>
                    <p class="fs-5">
                        Discourage children and teens from gathering in other public places while school is
                        dismissed to help slow the spread of COVID-19 in the community.
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState4 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState4 ? 'active' : '']">Will schools be dismissed if there is an outbreak in my community?
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
                        Depending on the situation, public health officials may recommend community
                        actions to reduce exposures to COVID-19, such as school dismissals. Read or
                        watch local media sources that report school dismissals or and watch for
                        communication from your child's school. If schools are dismissed temporarily,
                        discourage students and staff from gathering or socializing anywhere, like at a
                        friend's house, a favorite restaurant, or the local shopping mall.
                    </p>
                    
                </div>
            </div>
        </div>
        <div :class="['con', openState5 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState5 ? 'active' : '']">Can the virus that causes COVID-19 be spread through food, including refigerated or frozen food?
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
                    <h4 :class="['mb-0', 'fs-5', 'fw-bold', openState6 ? 'active' : '']">Should I go to work if there is an outbreak in my community?
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
                        Follow the advice of your local health officials. Stay home if you can. Talk to your
                        employer to discuss working from home, taking leave if you or someone in your
                        household gets sick with <span class="active">COVID-19 symptoms</span>, or if your child's school is dismissed
                        temporarily. Employers should be aware that more employees may need to stay at
                        home to care for sick children or other sick family members than is usual in case of
                        a community outbreak.
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