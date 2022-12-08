<template>
  <body class="bg-slate-50 grid justify-items-center">
    <Header />
    <main>
      <GridOfProductCards />
    </main>
  </body>
</template>

<script setup>
import Header from "../components/Header.vue";
import GridOfProductCards from "../components/GridOfProductCards.vue";
</script>
