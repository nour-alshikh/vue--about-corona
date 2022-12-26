<template>
    <div class="acc rounded-3">
        <div :class="['con', openState1 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState1 ? 'active' : '']">What can i do to protect myself and prevent the spread of disease?
                    </h4>
                    <div @click="openState1 = !openState1"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                        openState1 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState1">
                    <p class="fs-5 fw-bold">
                        Protection measures for everyone
                    </p>
                    <p class="fs-5">
                        Stay aware of the latest information on the COVID-19 outbreak, available on the
                        WHO website and through your national and local public health authority. Many
                        countries around the world have seen cases of COVID-19 and several have seen
                        outbreaks. Authorities in China and some other countries have succeeded in
                        slowing or stopping their outbreaks. However, the situation is unpredictable so
                        check regularly for the latest news.
                    </p>
                    <p class="fs-5">
                        You can reduce your chances of being infected or spreading COVID-19 by taking
                        some simple precautions:
                    </p>
                    <ul>
                        <li class="fs-5 mb-3">
                            Regularly and thoroughly clean your hands with an alcohol-based hand rub or
                            wash them with soap and water.
                        </li>
                        <p class="fs-5">
                            <span class="fw-bold">Why? </span>Washing your hands with soap and water or using alcohol-based hand
                            rub kills viruses that may be on your hands
                        </p>
                        <li class="fs-5 mb-3">
                            Maintain at least 1 metre (3 feet) distance between yourself and anyone who is
                            coughing or sneezing.
                        </li>
                        <p class="fs-5">
                            <span class="fw-bold">Why? </span>When someone coughs or sneezes they spray small liquid droplets from
                            their nose or mouth which may contain virus. If you are too close, you can
                            breathe in the droplets, including the COVID-19 virus if the person coughing has
                            the disease.
                        </p>
                        <li class="fs-5 mb-3">
                            Avoid touching eyes, nose and mouth.
                        </li>
                        <p class="fs-5">
                            <span class="fw-bold">Why? </span>Hands touch many surfaces and can pick up viruses. Once contaminated,
                            hands can transfer the virus to your eyes, nose or mouth. From there, the virus
                            can enter your body and can make you sick.
                        </p>
                        <li class="fs-5 mb-3">
                            Make sure you, and the people around you, follow good respiratory hygiene.
                            This means covering your mouth and nose with your bent elbow or tissue when
                            you cough or sneeze. Then dispose of the used tissue immediately.
                        </li>
                        <p class="fs-5">
                            <span class="fw-bold">Why? </span>Droplets spread virus. By following good respiratory hygiene you protect
                            the people around you from viruses such as cold, flu and COVID-19.
                        </p>
                        <li class="fs-5 mb-3">
                            Stay home if you feel unwell. If you have a fever, cough and difficulty breathing,
                            seek medical attention and call in advance. Follow the directions of your local
                            health authority.
                        </li>
                        <p class="fs-5">
                            <span class="fw-bold">Why? </span>National and local authorities will have the most up to date information on
                            the situation in your area. Calling in advance will allow your health care provider
                            to quickly direct you to the right health facility. This will also protect you and help
                            prevent spread of viruses and other infections
                        </p>
                        <li class="fs-5 mb-3">
                            Keep up to date on the latest COVID-19 hotspots (cities or local areas where
                            COVID-19 is spreading widely). If possible, avoid traveling to places - especially
                            if you are an older person or have diabetes, heart or lung disease
                        </li>
                        <p class="fs-5">
                            <span class="fw-bold">Why? </span>You have a higher chance of catching COVID-19 in one of these area
                        </p>
                    </ul>
                </div>
            </div>
        </div>
        <div :class="['con', openState2 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState2 ? 'active' : '']">What can i do to protect myself and prevent the spread of disease?
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
                        Household members, intimate partners, and caregivers in a nonhealthcare setting
                        may have close contact2 with a person with symptomatic, laboratory-confirmed
                        COVID-19 or a person under investigation. Close contacts should monitor their
                        health; they should call their healthcare provider right away if they develop
                        symptoms suggestive of COVID-19 (e.g., fever, cough, shortness of breath)
                    </p>
                    <p class="fs-5">
                        Close contacts should also follow these recommendations:
                    </p>
                    <ul>
                        <li class="fs-5 mb-3">
                            Make sure that you understand and can help the patient follow their healthcare
                            provider's instructions for medication(s) and care. You should help the patient
                            with basic needs in the home and provide support for getting groceries,
                            prescriptions, and other personal needs.
                        </li>
                        <li class="fs-5 mb-3">
                            Monitor the patient's symptoms. If the patient is getting sicker, call his or her
                            healthcare provider and tell them that the patient has laboratory-confirmed
                            COVID-19. This will help the healthcare provider's office take steps to keep other
                            people in the office or waiting room from getting infected. Ask the healthcare
                            provider to call the local or state health department for additional guidance. If the
                            patient has a medical emergency and you need to call 911, notify the dispatch
                            personnel that the patient has, or is being evaluated for COVID-19.
                        </li>
                        <li class="fs-5 mb-3">
                            Household members should stay in another room or be separated from the
                            patient as much as possible. Household members should use a separate
                            bedroom and bathroom, if available.
                        </li>
                        <li class="fs-5 mb-3">
                            Prohibit visitors who do not have an essential need to be in the home.
                        </li>
                        <li class="fs-5 mb-3">
                            Household members should care for any pets in the home. Do not handle pets
                            or other animals while sick. For more information, see<span class="avtive">COVID-19 and Animals.</span>
                        </li>
                        <li class="fs-5 mb-3">
                            Make sure that shared spaces in the home have good air flow, such as by an air
                            conditioner or an opened window, weather permitting.
                        </li>
                        <li class="fs-5 mb-3">
                            Perform hand hygiene frequently. Wash your hands often with soap and water
                            for at least 20 seconds or use an alcohol-based hand sanitizer that contains 60
                            to 95% alcohol, covering all surfaces of your hands and rubbing them together
                            until they feel dry. Soap and water should be used preferentially if hands are
                            visibly dirty.
                        </li>
                        <li class="fs-5 mb-3">
                            Avoid touching your eyes, nose, and mouth with unwashed hands.
                        </li>
                        <li class="fs-5 mb-3">
                            The patient should wear a facemask when you are around other people. If the
                            patient is not able to wear a facemask (for example, because it causes trouble
                            breathing), you, as the caregiver, should wear a mask when you are in the same room as the patient.
                        </li>
                        <li class="fs-5 mb-3">
                            Wear a disposable facemask and gloves when you touch or have contact with the patient's blood, stool or body fluids such as salvia, sputum, nasal mucus, vomit,urine
                            <ul>
                                <li class="fs-5 my-3">
                                    Throw out disposable facemasks and gloves after using them. Do not reuse.
                                </li>
                                <li class="fs-5 mb-3">
                                    When removing personal protective equipment, first remove and dispose of
                                    gloves. Then, immediately clean your hands with soap and water or alcohol-
                                    based hand sanitizer. Next, remove and dispose of facemask, and
                                    immediately clean your hands again with soap and water or alcohol-based
                                    hand sanitizer.
                                </li>
                            </ul>
                        </li>
                        <li class="fs-5 mb-3">
                            Avoid sharing household items with the patient. You should not share dishes,
                            drinking glasses, cups, eating utensils, towels, bedding, or other items. After the
                            patient uses these items, you should wash them thoroughly (see below "Wash
                            laundry thoroughly").
                        </li>
                        <li class="fs-5 mb-3">
                            Clean all "high-touch" surfaces, such as counters, tabletops, doorknobs,
                            bathroom fixtures, toilets, phones, keyboards, tablets, and bedside tables, every
                            day. Also, clean any surfaces that may have blood, stool, or body fluids on them.
                            <ul>
                                <li class="fs-5 my-3">
                                    Use a household cleaning spray or wipe, according to the label instructions.
                                    Labels contain instructions for safe and effective use of the cleaning product
                                    including precautions you should take when applying the product, such as
                                    wearing gloves and making sure you have good ventilation during use of the
                                    product.
                                </li>
                            </ul>
                        </li>
                        <li class="fs-5 mb-3">
                            Wash laundry thoroughly.
                            <ul>
                                <li class="fs-5 my-3">
                                    Immediately remove and wash clothes or bedding that have blood, stool, or
                                    body fluids on them.
                                </li>
                                <li class="fs-5 mb-3">
                                    Wear disposable gloves while handling soiled items and keep soiled items
                                    away from your body. Clean your hands (with soap and water or an alcohol-
                                    based hand sanitizer) immediately after removing your gloves.
                                </li>
                                <li class="fs-5 mb-3">
                                    Read and follow directions on labels of laundry or clothing items and
                                    detergent. In general, using a normal laundry detergent according to washing
                                    machine instructions and dry thoroughly using the warmest temperatures
                                    recommended on the clothing label
                                </li>
                            </ul>
                        </li>
                        <li class="fs-5 mb-3">
                            Place all used disposable gloves, facemasks, and other contaminated items in a
                            lined container before disposing of them with other household waste. Clean your
                            hands (with soap and water or an alcohol-based hand sanitizer) immediately
                            after handling these items. Soap and water should be used preferentially if
                            hands are visibly dirty.
                        </li>
                        <li class="fs-5 mb-3">
                            Discuss any additional questions with your state or local health department or
                            healthcare provider. Check available hours when contacting your local health
                            department.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div :class="['con', openState3 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState3 ? 'active' : '']">ًWho is at higher risk for serious illness from COVID-19?
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
                        <span class="fw-bold">Older adults and people of any age who have serious underlying medical conditions</span>may be at higher risk for more serious complications from COVID-19.These people who may be at higher risk of getting very sick from this illness, includes:
                    </p>
                    <ul>
                        <li class="fw-bold fs-5 mb-3">
                            Other adults
                        </li>
                        <li class="fs-5 mb-3">
                            <span class="fw-bold">People who have serious underlying medical conditions</span> like:
                            <ul>
                                <li class="fs-5 my-3">
                                    Heart disease
                                </li>
                                <li class="fs-5 mb-3">
                                    Diabetes
                                </li>
                                <li class="fs-5 mb-3">
                                    Lung disease
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div :class="['con', openState4 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState4 ? 'active' : '']">ًWhat should people at higher risk of serious illness with COVID-19 do?
                    </h4>
                    <div @click="openState4 = !openState4"
                        class="icon d-flex justify-content-center align-items-center">
                        <h3 class="mb-0 fs-2 fw-bold">{{
                        openState4 ? '-' : '+'
                        }}</h3>
                    </div>
                </div>
                <div class="answer py-3" v-if="openState4">
                    <p class="fs-5">If you are at higher risk of getting very sick from COVID-19, you should: stock up on
                    supplies; take everyday precautions to keep space between yourself and others;
                    when you go out in public, keep away from others who are sick; limit close contact
                    and wash your hands often; and avoid crowds, cruise travel, and non-essential
                    travel. If there is an outbreak in your community, stay home as much as possible.
                    Watch for symptoms and emergency signs. If you get sick, stay home and call your
                    doctor. More information on how to prepare, what to do if you get sick, and how
                    communities and caregivers can support those at higher risk is available on
                        <span class="active">People
                        at Risk for Serious Illness from COVID-19.</span>
                    </p>
                </div>
            </div>
        </div>
        <div :class="['con', openState5 ? 'ba' : '']">
            <div class="question border-bottom p-4">
                <div class="ques d-flex justify-content-between align-items-center">
                    <h4 :class="['mb-0','fs-5','fw-bold', openState5 ? 'active' : '']">ًShould I wear a mask to protect myself?
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
                        Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or
                        looking after someone who may have COVID-19. Disposable face mask can only
                        be used once. If you are not ill or looking after someone who is ill then you are
                        wasting a mask. There is a world-wide shortage of masks, so WHO urges people to
                        use masks wisely.
                    </p>
                    <p class="fs-5">WHO advises rational use of medical masks to avoid unnecessary wastage of
                    precious resources and mis-use of masks (<span class="active">see Advice on the use of masks</span>).
                    </p>
                    <p class="fs-5">
                        The most effective ways to protect yourself and others against COVID-19 are to
                        frequently clean your hands, cover your cough with the bend of elbow or tissue and
                        maintain a distance of at least 1 meter (3 feet) from people who are coughing or
                        sneezing. See basic protective measures against the new coronavirus for more
                        information.
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
        }
    },
    methods: {

    }
}
</script>