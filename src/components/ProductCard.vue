<template>
  <a href="">
    <div
      class="relative flex-col justify-items-center bg-white p-4 m-8 max-w-[250px]"
    >
      <img
        :src="productCard.productImage"
        alt="product image"
        class="object-cover"
      />
      <h2 class="py-4 text-lg">{{ productCard.h2 }}</h2>
      <p class="text-end">${{ productCard.price }}</p>
      <button class="w-full bg-green-500 p-4 my-4 text-white">
        Add to cart
      </button>
    </div>
  </a>
</template>

<script setup>
const productCard = {
  productImage: "https://via.placeholder.com/250x250",
  h2: "Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB",
  price: 2259,
};
</script>
