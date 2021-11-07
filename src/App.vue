<template>
    <Navbar />
    <router-view />
    <Contact />
    <Footer />
</template>

<style>
.router-link-active {
  font-weight: 600;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Contact from '@/components/Contact.vue'

export default {
  components: {
    Navbar, Footer, Contact
  }
}
</script>
