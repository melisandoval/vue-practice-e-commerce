<template>
  <section class="grid md:grid-cols-3 justify-items-center max-w-5xl my-12">
    <ProductCard v-bind:products="products" />
  </section>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import { ref } from "vue";

const products = ref([]);

async function getProducts() {
  try {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/categories/2/products?offset=0&limit=9"
    );
    const finalRes = await res.json();
    products.value = finalRes;
  } catch (error) {
    console.log(error);
  }
}

getProducts();
// products.value = data;
</script>
