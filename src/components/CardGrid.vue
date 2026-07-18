<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] },
  mode: { type: String, default: "place" }
});
const emit = defineEmits(["navigate"]);
const pathFor = (item, mode) => mode === "hotel" ? "/hotel/" + item.slug : "/place/" + item.slug;
</script>

<template>
  <section class="section-block">
    <div class="section-title" v-if="title">
      <h2>{{ title }}</h2>
    </div>
    <div class="card-grid">
      <article v-for="item in items" :key="item.slug" class="travel-card">
        <button class="image-link" type="button" @click="emit('navigate', pathFor(item, mode))">
          <img :src="item.image" :alt="item.name">
        </button>
        <div class="card-body">
          <h3>{{ item.name }}</h3>
          <span><i class="fa-solid fa-location-dot"></i> {{ item.province }}</span>
          <p>{{ item.summary }}</p>
          <button class="text-button" type="button" @click="emit('navigate', pathFor(item, mode))">មើលបន្ថែម</button>
        </div>
      </article>
    </div>
  </section>
</template>
