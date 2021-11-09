<template>
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <Contact />
    <Footer />
</template>

<style>
.router-link-active {
  transition: all 0.8s ease;
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition-delay: 0.8s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 1;
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
