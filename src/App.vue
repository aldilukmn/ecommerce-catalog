<script setup lang="ts">
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

</script>

<template class="wrapper">
 <div class="wrapper">
  <header class="header">
    <Navbar/>
  </header>

  <main class="main">
    <router-view />
  </main>

  <footer class="footer">
    <Footer/>
  </footer>
 </div>
</template>


