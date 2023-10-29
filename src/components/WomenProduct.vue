<script setup lang="ts">
import { defineProps } from 'vue';
defineProps(['product', 'nextProduct'])

</script>

<template>
  <div class="bg-women"></div>
  <div class="card">
    <img
      v-if="product.image"
      :src="product.image"
      alt="image"
    />
    <div class="desc">
      <h3 class="women-h3">{{ product.title }}</h3>
      <p>
        {{ product.category
        }}<span>{{ product.rating?.rate }} / 5</span>
      </p>
      <p>{{ product.description }}</p>
      <h3 class="women-h3">${{ product.price }}</h3>
      <div class="btn">
        <button class="women-btn-1">Buy now</button>
        <button class="women-btn-2" @click="nextProduct">Next product</button>
      </div>
    </div>
  </div>

</template>
