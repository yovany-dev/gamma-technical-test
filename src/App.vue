<template>
  <Header />
  <main class="mt-24 mb-16">
    <RouterView />
  </main>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import Header from './components/Header/Header.vue';
</script>
