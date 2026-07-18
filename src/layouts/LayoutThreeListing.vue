<script setup>
import { categories } from "../data/siteData";
import CardGrid from "../components/CardGrid.vue";
defineProps({ category: Object });
const emit = defineEmits(["navigate"]);
</script>

<template>
  <main v-if="category">
    <section class="list-head">
      <h1>{{ category.title }}</h1>
      <div class="tabs">
        <button v-for="item in categories" :key="item.slug" type="button" :class="{ active: item.slug === category.slug }" @click="emit('navigate', '/list/' + item.slug)">
          <i class="fa-solid" :class="item.icon"></i> {{ item.title }}
        </button>
      </div>
    </section>
    <CardGrid :items="category.items" :mode="category.slug === 'hotels' ? 'hotel' : 'place'" @navigate="emit('navigate', $event)" />
  </main>
</template>
