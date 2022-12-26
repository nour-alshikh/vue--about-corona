<template>
<div class="questions">
    <div class="container">
        <h4 class="title text-center mb-3">FREQUENTLY ASKED QUESTIONS</h4>
        <h2 class="sub-title text-center mb-5">COMMON QUESTIONS AND ANSWERS</h2>
        <div class="row">
            <div class="col-md-4">
                <div v-for="question in questions" @click="activeTap = question.id"
                    :class="['item', 'd-flex', 'justify-content-between', 'align-items-center', 'p-3', 'rounded-3', 'mb-3', activeTap == question.id ? 'active' : '']">
                    <h5 class="question mb-0">{{ question.question }}</h5>
                    <font-awesome-icon icon="fa-solid fas fa-caret-right" class="icon" />
                </div>
            </div>
            <div class="col-md-8">
                <QuestionOne v-if="activeTap == 1" />
                <QuestionTwo v-if="activeTap == 2" />
                <QuestionThree v-if="activeTap == 3" />
                <QuestionFour v-if="activeTap == 4" />
                <QuestionFive v-if="activeTap == 5" />
                <QuestionSix v-if="activeTap == 6" />
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.questions{
    padding: 200px 0 100px;
    min-height: calc(100vh - 100px);
    background-color: #fff;
}
.item {
    border: 2px solid #dddddd;
    color: var(--main-color);
    cursor: pointer;
    transition: 0.5s;
}

.active {
    color: var(--active);
    border-color: var(--active);
}
</style>
<script>
import questions from '../Data/questions'
import QuestionOne from '../components/questions/QuestionOne.vue'
import QuestionTwo from '../components/questions/QuestionTwo.vue'
import QuestionThree from '../components/questions/QuestionThree.vue'
import QuestionFour from '../components/questions/QuestionFour.vue'
import QuestionFive from '../components/questions/QuestionFive.vue'
import QuestionSix from '../components/questions/QuestionSix.vue'
export default {
    components:{
        QuestionOne,
        QuestionTwo,
        QuestionThree,
        QuestionFour,
        QuestionFive,
        QuestionSix
    },
    data() {
        return {
            questions: questions,
            activeTap: 1
        }
    },
    methods: {

    }
}
</script>