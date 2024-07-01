<template>
  <Popup
    v-show="visible"
    text="Delete this product?"
    @status="handleConfirm"
  />
  <article class="p-5 flex v-450:flex-col justify-between v-450:items-center rounded-lg bg-white">
    <section class="flex v-450:flex-col items-center">
      <img class="w-[100px]" :src="imgURL" alt="Cart Product">
      <h2 class="font-bold text-lg">{{ title }}</h2>
    </section>
    <section class="flex v-450:flex-col items-center gap-10">
      <div class="flex items-center gap-3">
        <Button @click="handleAdd" text="+" />
        <span class="text-lg">{{ amount }}</span>
        <Button @click="handleRemove" text="-" />
      </div>
      <div class="h-full flex flex-col justify-between">
        <button @click="onClick">
          <i class="fa-solid fa-square-xmark text-2xl text-red-500"></i>
        </button>
        <span class="text-v-black">${{ price }}</span>
      </div>
    </section>
  </article>
</template>

<script setup>
  import { ref } from 'vue';
  import { useTodosStore } from '../../stores/todo';
  import Button from '../Button/Button.vue';
  import Popup from '../Popup/Popup.vue';

  const props = defineProps({
    id: Number,
    imgURL: String,
    title: String,
    price: Number,
    amount: Number,
  });

  const todo = useTodosStore();
  const visible = ref(false);

  const onClick = () => {
    visible.value = true;
  }

  const handleConfirm = (status) => {
    visible.value = false;
    if (status) {
      todo.removeTodo(props.id);
      todo.updateCart(todo.cart - props.amount);
    }
  }

  const handleAdd = () => {
    todo.increaseCart();
    todo.updatedTodo(props.id, {
      ...props,
      amount: props.amount+1,
    })
  }

  const handleRemove = () => {
    if (props.amount >= 2) {
      todo.decreaseCart();
      todo.updatedTodo(props.id, {
        ...props,
        amount: props.amount-1,
      })
    }
  }
</script>
