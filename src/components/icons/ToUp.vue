<template>
    <div v-if="up" @click.prevent="toUp" id="test" class="to-up ">
            <div class="icon d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="fa-solid fas fa-arrow-up" class="up fw-bold fs-3" />
                
            </div>
        </div>
</template>

<style scoped>
.to-up{
background-color: var(--active);
width: 50px;
height: 50px;
border-radius: 50%;
bottom:0;
right: 0;
margin: 30px;
position: fixed;
cursor: pointer;
}

.to-up .icon{
    background-color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.up{
color: var(--active);
}
</style>

<script>
export default {
    created() {
        window.addEventListener('scroll', this.showButton);
    },
    destroyed() {
        window.removeEventListener('scroll', this.showButton);
    },
    data(){
        return{
            up:false,
        }
    },
    methods:{
        showButton:function(){
            if(window.scrollY > 200){
                this.up = true
            }
            if(window.scrollY == 0){
                this.up = false
            }
        },
        toUp:function(){
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });
        },
    }
}
</script>