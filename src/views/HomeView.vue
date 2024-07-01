<template>
  <section class="max-w-[1000px] v-1000:max-w-[700px] v-780:max-w-[500px] v-450:max-w-[300px] mx-auto grid grid-cols-4 v-780:grid-cols-2 gap-8">
    <Card
      v-for="(card, index) in product.data"
      :key="card.id"
      :id="card.id"
      :imgURL="card.imgURL"
      :title="card.title"
      :price="card.price"
    />
  </section>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useProductStore } from '../stores/product';
  import Card from '../components/Card/Card.vue';

  const product = useProductStore();

  onMounted(() => {
    product.getData();
  });
</script>
