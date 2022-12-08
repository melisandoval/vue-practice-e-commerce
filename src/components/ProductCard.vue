<template>
  <a href="#" v-for="product in products" :product="product" :key="product.id">
    <div
      class="relative flex-col justify-items-center bg-white p-4 m-4 min-w-[270px] max-w-[350px]"
    >
      <img
        :src="product.images[0] || product.category.image"
        alt="product image"
        class="object-cover"
      />
      <h2 class="py-4 text-lg">{{ product.title }}</h2>
      <p class="text-end">${{ product.price }}</p>
      <button class="w-full bg-green-500 p-4 my-4 text-white">
        Add to cart
      </button>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({ products: Object });
</script>
