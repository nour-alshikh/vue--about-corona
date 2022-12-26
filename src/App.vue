<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Main/Navbar.vue'
import Footer from './components/Main/Footer.vue'
import ToUp from './components/icons/ToUp.vue'
</script>

<template>
    <Navbar />
    <RouterView />
    <ToUp />
    <Footer />
</template>

<style scoped>

</style>
