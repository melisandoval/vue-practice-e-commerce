<script setup></script>

<template>
  <body class="bg-slate-50">
    <header class="w-full bg-[#27272a] text-white relative">
      <nav class="py-8 z-0">
        <span class="material-symbols-outlined md:invisible absolute z-10 px-8">
          menu
        </span>
        <ul class="invisible md:visible w-full inline-flex justify-center">
          <li><a class="px-8" href="#">AllProducts</a></li>
          <li><a class="px-8" href="#">Smartphones</a></li>
          <li><a class="px-8" href="#">Notebooks</a></li>
        </ul>
      </nav>
      <button
        class="absolute flex align-center bg-sky-500 rounded-md z-10 top-0 right-0 my-6 mx-8 py-2 px-8"
      >
        <span class="px-2">Cart</span>
        <span class="material-symbols-outlined"> shopping_cart </span>
        <img src="" alt="" />
      </button>
    </header>

    <main>
      <section class="flex justify-center">
        <!-- single card -->
        <a href="">
          <div
            class="relative flex-col justify-items-center bg-white p-4 m-8 max-w-[250px]"
          >
            <img src="https://via.placeholder.com/250x250" alt="" />
            <h2 class="py-4 text-lg">
              Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB
            </h2>
            <p class="text-end">$ 2259, 00</p>
            <button class="w-full bg-green-500 p-4 my-4 text-white">
              Add to cart
            </button>
          </div>
        </a>
        <!-- end of single card -->
      </section>
    </main>
  </body>
</template>

<style scoped></style>
