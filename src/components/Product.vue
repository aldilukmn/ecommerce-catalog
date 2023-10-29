<script setup lang="ts">
import Products from "@/api/api";
import { onMounted } from "vue";
import MenProductVue from "./MenProduct.vue";
import WomenProduct from "./WomenProduct.vue";
import Unavailable from "./Unavailable.vue";


const { currentProductIndex, nextProduct, getPosts, loading } = Products();

onMounted(() => {
  getPosts();
});

const   category: Record<string, string> = {
  "men's clothing": 'men-back',
  "women's clothing": 'women-back',
  "default": 'unavailable-back'
};
</script>

<template>
  <transition name="fade">
    <h3 v-if="loading" class="loader" :class="{ 'fade-out': !loading }">Loading...</h3>
  </transition>
  <div v-if="currentProductIndex.category === `men's clothing`">
    <MenProductVue :product="currentProductIndex" :nextProduct="nextProduct" />
  </div>
  <div v-else-if="currentProductIndex.category === `women's clothing`">
    <WomenProduct :product="currentProductIndex" :nextProduct="nextProduct"/>
  </div>
  <div v-else>
    <Unavailable :nextProduct="nextProduct"/>
  </div>
  <div class="back-wrapper">
    <router-link :class="category[currentProductIndex.category] || category.default" to="/">Back</router-link>
  </div>
</template>