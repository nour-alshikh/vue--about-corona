<template>
    <footer>
        <div class="container ">
            <div class="logo text-white fs-3 fw-bold my-4" to="/">C<span>
                        <img src="../../assets/imgs/iconnew.png" />
                    </span>VID<span class="logo-num">19</span>
            </div>
            <p class="fs-5 my-4">This website is for health information and advice about coronavirus (COVID-19), how to prevent and protect yourself from disease.</p>
            <p class="fs-5 my-4">Learn about the government response to coronavirus on GOV.Uk</p>
            <div class="row p-3 justify-content-between flex-column flex-sm-row text-center">
                <div class="link1 col-md-3 mx-2 py-3 text-center">
                    <h5 class="text-white mb-0">Find Us on Facebook</h5>
                </div>
                <div class="link2 col-md-3 mx-2 py-3 text-center">
                    <h5 class="text-white mb-0">Find Us on Twitter</h5>
                </div>
                <div class="link3 col-md-3 mx-2 py-3 text-center">
                    <h5 class="text-white mb-0">Find Us on Instgram</h5>
                </div>
            </div>
            <div class="row mt-5 p-3 justify-content-between">
                <div class="col-md-3">
                    <div class="item text-center">
                        <h5 class="mb-3 text-white fw-bold">QUICK LINK</h5>
                        <RouterLink class="nav-link text-white-50 mb-3" to="/about">About Corona</RouterLink>
                        <RouterLink class="nav-link text-white-50 mb-3" to="/symptoms">Symptoms</RouterLink>
                        <RouterLink class="nav-link text-white-50 mb-3" to="/prevention">Prevention</RouterLink>
                        <RouterLink class="nav-link text-white-50 mb-3" to="/treatment">Protect Yourself</RouterLink>
                        <RouterLink class="nav-link text-white-50 mb-3" to="/questions">FAQs</RouterLink>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item text-center">
                        <h5 class="mb-3 text-white fw-bold">HELPFUL LINK</h5>
                        <a class="nav-link text-white-50 mb-3" href='#'>Healthcare Profesionals</a>
                        <a class="nav-link text-white-50 mb-3" href='#'>Healthcare Facilities</a>
                        <a class="nav-link text-white-50 mb-3" href='#'>Older Adults &amp; Medical Conditions</a>
                        <a class="nav-link text-white-50 mb-3" href='#'>Repare your Family</a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item text-center">
                        <h5 class="mb-3 text-white fw-bold">IMPORTANT LINK</h5>
                        <a class="nav-link text-white-50 mb-3" target="blank" href='https://www.who.int/'>WHO website</a>
                        <a class="nav-link text-white-50 mb-3" target="blank" href='https://www.cdc.gov/'>CDC Website</a>
                        <a class="nav-link text-white-50 mb-3" target="blank" href='https://www.nhs.uk/'>NHS Website</a>
                        <a class="nav-link text-white-50 mb-3" target="blank" href='https://www.health.harvard.edu/'>Harvard Health</a>
                    </div>
                </div>
            </div>
            <div class="foot d-flex flex-column flex-lg-row justify-content-between align-items-center mb-3">
                
                <p class=""><span>
                    <font-awesome-icon icon="fa-solid fas fas fa-copyright" class="me-3 icon" />
                </span>2021 COVID_19.Template Made by <span class='fw-bold text-white'>Amany Abdelfattah </span><span>Thanks To- Mina Karam Ghoprial</span></p>
                <p>Privacy Policy</p>
            </div>
            <div class="info">
                <p>Disclaimer: We hope you find the information on this website useful. This website is for general information and raise awareness of (2019-nCOV) only.All the information based on WHO,NHS and CDC website.Information on our website is meant for awareness, if you have any doubt please verify from respective site.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer{
    padding: 100px 0;
    min-height: 100vh;
    background-color: #151c2e;
    background-image: url('../../assets/imgs/shape-a.png');
}
footer .container .logo img {
    width: 40px;
}
.logo-num{
    color: var(--alt-color);
}
footer .container p{
    color: #b5c8dd;
}
.link1{
    background-color: #3b5999;
    min-width: 30%;
    margin-bottom: 20px;
    cursor: pointer;
}
.link2{
    background-color: #55acee;
    min-width: 30%;
    margin-bottom: 20px;
    cursor: pointer;
}
.link3{
    min-width: 30%;
    margin-bottom: 20px;
    background-color: #e4405f;
    cursor: pointer;
}
.info{
    padding: 0 0 80px;
}
.icon{
    color: #b5c8dd;
}
@media (min-width:991px) {
    p,
    .row{
        width: 75%;
    }
}
@media (max-width:991px) {

    p,
    .row {
        width: 100%;
    }
}
</style>

<script>
export default {
    data(){

    }
}
</script>