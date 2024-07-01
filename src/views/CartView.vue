<template>
  <section class="max-w-[900px] v-1000:max-w-[700px] v-780:max-w-[500px] v-450:w-[80%] mx-auto flex flex-col gap-10">
    <section class="flex flex-col gap-5">
      <Product
      v-for="(card, index) in todo.todos" :key="card.id"
      :id="card.id"
      :imgURL="card.imgURL"
      :title="card.title"
      :price="card.price"
      :amount="card.amount"
      />
    </section>
    <section v-if="!todo.empty" class="flex v-780:flex-col v-780:gap-5 justify-between">
      <div class="w-max h-10 rounded-lg overflow-hidden">
        <input ref="input" class="h-full px-4 v-450:w-[150px] focus:outline-none" type="text" placeholder="Promo code">
        <button @click="handleDiscount" class="h-full px-4 text-white bg-v-blue">Apply Discount</button>
      </div>
      <div class="flex flex-col gap-5">
        <p>Subtotal: ${{ todo.subtotal }}</p>
        <Button text="Checkout" />
      </div>
    </section>
    <section v-if="todo.empty">
      <p class="text-v-black">Your cart is empty, add a product...</p>
    </section>
  </section>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useTodosStore } from '../stores/todo';
  import Product from '../components/Product/Product.vue';
  import Button from '../components/Button/Button.vue';

  const todo = useTodosStore();
  const { cart } = storeToRefs(todo);
  const input = ref(null);

  const handleDiscount = () => {
    const content = input.value.value;
    todo.getDiscount(content);
  }

  onMounted(() => {
    todo.getData();
    todo.getSubtotal();
  });

  watch(cart, () =>{
    todo.getSubtotal();
  })
</script>
