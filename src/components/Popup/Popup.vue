<template>
  <div class="w-screen h-screen fixed top-0 left-0 z-10 flex justify-center items-center bg-v-bg">
    <div class="w-[300px] h-[200px] p-5 flex flex-col items-center gap-5 rounded-lg bg-white">
      <button @click="handleStatus(false)" class="self-end">
        <i class="fa-solid fa-square-xmark text-2xl text-red-500"></i>
      </button>
      <p class="text-xl">{{ text }}</p>
      <Button @click="handleStatus(true)" text="Confirm" />
    </div>
  </div>
</template>

<script setup>
  import Button from '../Button/Button.vue';

  const props = defineProps({
    text: String,
  });

  const emit = defineEmits(['status']);
  const handleStatus = (status) => {
    emit('status', status);
  }
</script>
