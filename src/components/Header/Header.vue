<template>
  <header class="py-5 px-20 v-450:px-10 fixed top-0 w-full flex justify-between text-white bg-black">
    <section class="flex items-center gap-4">
      <i class="fa-solid fa-globe text-2xl"></i>
      <h1>Shopping cart</h1>
    </section>
    <nav>
      <ul class="list-none w-[250px] v-1000:w-auto flex items-center gap-5">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/cart" class="flex items-center gap-2">
            <i class="fa-solid fa-cart-shopping"></i>
            <p class="text-sm">{{ todo.cartValue }}</p>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import { useTodosStore } from '../../stores/todo';

  const todo = useTodosStore();
</script>
