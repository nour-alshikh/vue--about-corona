<template>
    <nav id="navbar" class="navbar navbar-expand-lg w-100">
        <div class="container">
            <RouterLink class="navbar-brand logo fs-3 fw-bold" to="/">C<span>
                <img src="../../assets/imgs/iconnew.png"/>
            </span>VID<span class="logo-num">19</span></RouterLink>
            <button @click.prevent="showNav" class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav w-100 mb-2 mb-lg-0 d-flex align-items-lg-center align-items-start justify-content-between">
                    <li @click="hideMenu" class="nav-item mb-4 mb-lg-0">
                        <RouterLink data-num="0" @click="togColor" :class="[isSelected[0]?'new-colo':'', 'colo'] " aria-current="page" to="/">Home</RouterLink>
                    </li>
                    <li @click="hideMenu" class="nav-item mb-4 mb-lg-0">
                        <RouterLink data-num="1" @click="togColor" :class="[isSelected[1]?'new-colo':'', 'colo'] " to="/about">About Corona</RouterLink>
                    </li>
                    <li @click="hideMenu" class="nav-item mb-4 mb-lg-0 ">
                        <RouterLink data-num="2" @click="togColor" :class="[isSelected[2]?'new-colo':'', 'colo'] " to="/symptoms">Symptoms</RouterLink>
                    </li>
                    <li @click="hideMenu" class="nav-item mb-4 mb-lg-0">
                        <RouterLink data-num="3" @click="togColor" :class="[isSelected[3]?'new-colo':'', 'colo'] " to="/prevention">Prevention</RouterLink>
                    </li>
                    <li @click="hideMenu" class="nav-item mb-4 mb-lg-0">
                        <RouterLink data-num="4" @click="togColor" :class="[isSelected[4]?'new-colo':'', 'colo'] " to="/treatment">Treatment</RouterLink>
                    </li>
                    <li @click="hideMenu" class="nav-item mb-4 mb-lg-0">
                        <RouterLink data-num="5" @click="togColor" :class="[isSelected[5]?'new-colo':'', 'colo'] " to="/questions">FAQ</RouterLink>
                    </li>
                    <li  @click="hideMenu" class="nav-item mb-4 mb-lg-0">
                        <RouterLink data-num="6" @click="togColor" :class="[isSelected[6]?'new-colo':'', 'colo'] " to="/news">News</RouterLink>
                    </li>
                    <li @click="hideMenu" class="nav-item mb-4 mb-lg-0">
                        <RouterLink data-num="7" @click="togColor" :class="[isSelected[7]?'new-colo':'', 'colo','special','rounded-pill', 'text-white']" to="/do&donot">Do &amp; Don't</RouterLink>
                    </li>
                </ul>
                <div @click="hideMenu" class="icon d-lg-none">
                    <font-awesome-icon icon="fa-solid fas fa-xmark" class="up fs-6" />
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.colo{
    color: var(--alt-color);
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    transition: 0.5s;
}
.colo:hover{
    color: var(--active);
}
.new-colo{
    color: var(--active);
}
.collapse{
    margin-left: 5rem;
}
nav{
    min-height: 92px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999;
    background-color: transparent;
    transition: 0.1s;
    max-width: 100%;
}
nav .container .logo{
    color: var(--main-color)
}
nav .container .logo img{
    width: 40px;
}

.logo-num{
    color: var(--alt-color);
}

.special{
    background-color: var(--active);
    width: 150px;
    text-align: center;
    padding: 10px 20px;
}

.activee{
    color: var(--active);
}

.show{
    display: flex;
    flex-direction: column;
}

.icon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    margin:20px 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.up{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: var(--alt-color);
    border: 3px solid var(--alt-color);
    padding: 4px;
}
@media (max-width:991px) {
    .container{
        width: 100%;
    }
    .collapse{
        background-color: #2d4062b1;
        min-height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 0;
    }
    .colo{
        margin: 0;
    }
    .navbar-nav{
        text-align: left;
        background-color: white;
        padding: 40px;
        height: 100%;
        max-width: 65%;
        position: absolute;
        top: 0;
        left: 0;
        justify-content: flex-start;
    }
}
</style>

<script>
export default {
    created(){
        window.addEventListener('scroll',this.changeBackGColor)
    },
    destroyed(){
        window.removeEventListener('scroll',this.changeBackGColor)
    },  
    data() {
        return {
            isSelected:[true, false, false, false, false, false, false, false],
        }
    },
    methods: {
        changeBackGColor:function(){
            let navbar = document.getElementById('navbar');
            navbar.style.backgroundColor = 'transparent'
            if(window.scrollY > 0){
                navbar.style.backgroundColor = 'white'
            }
        },
        showNav:function(){
            let collapse = document.querySelector('.collapse')
            collapse.classList.toggle('show')
        },
        hideMenu:function(){
            let collapse = document.querySelector('.collapse')
            collapse.classList.remove('show')
        },
        togColor:function(e){
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });
            for(let i=0;i<this.isSelected.length;i++){
                this.isSelected[i]=false
            }
            let num = e.target.getAttribute('data-num')
            this.isSelected[num] = true
        }
    }
}

</script>
