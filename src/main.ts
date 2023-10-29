import './assets/style/page.css'
import { createApp } from 'vue'
import App from './App.vue'
import MainProduct from './components/MainProduct.vue'
import MenProduct from './components/MenProduct.vue'
import WomenProduct from './components/WomenProduct.vue'
import Product from './components/Product.vue'
import PageNotFound from './components/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', components: { default: MainProduct }},
    { path: '/men', components: { default: MenProduct }},
    { path: '/women', components: { default: WomenProduct }},
    { path: '/products', components: { default: Product } },
    { path: '/:pathMatch(.*)*', components: { default: PageNotFound } }
  ];
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');
