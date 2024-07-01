<template>
  <button class="py-2 px-5 rounded-md text-white bg-v-blue">{{ text }}</button>
</template>

<script setup>
  const props = defineProps({
    text: String
  });
</script>
