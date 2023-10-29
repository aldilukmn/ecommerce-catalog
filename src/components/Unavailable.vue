<script setup lang="ts">
import { defineProps } from "vue";
defineProps(["nextProduct"]);
</script>

<template>
  <div class="bg-unavailable"></div>
  <div class="unavailable-card">
    <img src="../../public/img/sad-face.png" alt="" />
    <div class="unavailable-body">
        <p>This product is unavailable to show</p>
        <button class="unavailable-btn" @click="nextProduct">Next product</button>
    </div>
  </div>
</template>
