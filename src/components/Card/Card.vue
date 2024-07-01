<template>
  <Popup
    v-show="visible"
    text="Added to cart"
    @status="handleConfirm"
  />
  <article class="flex flex-col items-center gap-2 pb-5 rounded-lg overflow-hidden bg-white">
    <img class="" :src="imgURL" :alt="title">
    <div class="flex flex-col items-center">
      <h3 class="font-bold">{{ title }}</h3>
      <span class="text-v-black">${{ price }}</span>
    </div>
    <Button @click="onClick" text="Add to cart" />
  </article>
</template>

<script setup>
  import { ref } from 'vue';
  import { useTodosStore } from '../../stores/todo';
  import Popup from '../Popup/Popup.vue';
  import Button from '../Button/Button.vue';

  const props = defineProps({
    id: Number,
    imgURL: String,
    title: String,
    price: Number,
  });

  const todo = useTodosStore();
  const visible = ref(false);

  const onClick = () => {
    visible.value = true;
  }

  const handleConfirm = (status) => {
    visible.value = false;
    if (status) {
      todo.addTodo({
        ...props,
        amount: 1,
      });
      todo.increaseCart();
    }
  }
</script>
