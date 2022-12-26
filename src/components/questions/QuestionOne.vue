<template>
    <div class="acc rounded-3">
        <div :class="['con', openState[0]?'ba':'']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState[0]?'active':'']">What is a novel coronavirus?</h4>
                    <div  @click="changeState" class="icon d-flex justify-content-center align-items center">
                        <h3 data-num="0" class="mb-0 fs-2 fw-bold">{{
                        openState[0]?'-':'+' }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState[0]">
                    <p class="fs-5">On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019
                    novel coronavirus outbreak,first identified in Wuhan China. The new name of this disease is coronavirus disease
                    2019,abbreviated as COVID-19 'CO' stands for corona, 'VI' for virus, and 'D' for disease. Formerly, this disease was
                    referred to as '2019 novel coronavirus' or '2019-nCOV'.</p>
                    <p class="fs-5">A novel coronavirus is anew coronavirus that has not been previously identified.The Virus causing coronavirus disease
                    2019 (COVID-19), is not the same as the <span class="active">coronavirus that commonly circulate among humans</span> and cause mild illnes, like the
                    common cold.</p>
                </div>
            </div>
        </div>
        <div :class="['con', openState[1]?'ba':'']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState[1]?'active':'']">Why is the disease beingcalled coronavirus disease 2019, COVID-19?</h4>
                    <div @click="changeState" class="icon d-flex justify-content-center align-items center">
                        <h3 data-num="1" class="mb-0 fs-2 fw-bold">{{
                        openState[1]?'-':'+' }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState[1]">
                    <p class="fs-5">On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019
                    novel coronavirus outbreak,first identified in Wuhan China. The new name of this disease is coronavirus disease
                    2019,abbreviated as COVID-19 'CO' stands for corona, 'VI' for virus, and 'D' for disease. Formerly, this disease was
                    referred to as '2019 novel coronavirus' or '2019-nCOV'.</p>
                    <p class="fs-5">There are <span class="active">many types</span> of human coronavirus including some that commonly cause mild upper-respiratory tract illness.
                    COVID-19 is anew disease, caused be a novel (or new) coronavirus that has not previously been seen in humans. The name
                    of this disease was selected following the World Health Organization (WHO) best practice external icon for naming of new
                    human infection diseases</p>
                </div>
            </div>
        </div>
        <div :class="['con', openState[2]?'ba':'']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState[2]?'active':'']">How can people help stop stigma related to COVID-19?</h4>
                    <div @click="changeState" class="icon d-flex justify-content-center align-items center">
                        <h3 data-num="2" class="mb-0 fs-2 fw-bold">{{
                        openState[2]?'-':'+' }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState[2]">
                    <p class="fs-5">People can fight stigma and help, not hurt, others by providing social support Counter stigma by learning and sharing
                    facts. Communicating the facts that viruses do not target specific racial or ethnic groups and how COVID-19 actually
                    spreads can help stop stigma.</p>
                </div>
            </div>
        </div>
        <div :class="['con', openState[3]?'ba':'']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState[3]?'active':'']">Why might someone blame or avoid individuals and groups?</h4>
                    <div  @click="changeState" class="icon d-flex justify-content-center align-items center">
                        <h3 data-num="3" class="mb-0 fs-2 fw-bold">{{
                        openState[3]?'-':'+' }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState[3]">
                    <p class="fs-5">People in the U.S. may be worries or anxious about friends and relatives who are living in or visiting areas where
                    COVID-19 is spreading. Some people are worried about the disease. Fear and anxiety can lead to social stigma, for
                    example, towards Chinese or other Asian Americans or people who where in quarantine.</p>
                    <p class="fs-5">Stigma is discrimination against an identifiable group of people, a place , or a nation.Stigma is associated with a lack of knowledge about how COVID-19 spreads, a need to blame someone, fears about disease and death, and gossip that spreads
                    rumors and myths.</p>
                    <p class="fs-5">Stigma hurts everyone by creating more fear or anger towards ordinary people instead of the disease that is causing the
                    problem.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.acc{
    border: 2px solid #dddddd;
    color: var(--main-color);
    transition: 0.5s;
    background-color: #f7fafe;
}
.icon{
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
.ques h4{
    transition: 0.5s;
}
.ba{
    background-color: white;
}
.active{
    color: var(--active);
}
</style>

<script>
export default {
    data(){
        return{
            openState: [true, false, false, false]
        }
    },
    methods:{
        changeState:function(e){
            let num = e.target.getAttribute('data-num')
            if(this.openState[num]){
                return this.openState[num] = false
            }
            for(let i =0 ;i<this.openState.length;i++){
                this.openState[i] = false
            }
            this.openState[num] = true
        }
    }
}
</script>