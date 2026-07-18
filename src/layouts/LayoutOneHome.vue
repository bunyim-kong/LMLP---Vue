<script setup>
import { computed } from "vue";
import CardGrid from "../components/CardGrid.vue";
import { categories, hotels, places, provinces } from "../data/siteData";
const emit = defineEmits(["navigate"]);
const hero = computed(() => places.slice(0, 4));
</script>

<template>
  <main>
    <section class="home-hero">
      <div class="hero-copy">
        <p>Explore Cambodia</p>
        <h1>LMLP Tourism</h1>
        <span>ស្វែងរកខេត្ត កន្លែងកម្សាន្ត សណ្ឋាគារ និងគំនិតធ្វើដំណើរដោយប្រើទិន្នន័យតែមួយ។</span>
        <div class="hero-actions">
          <button type="button" @click="emit('navigate', '/list/popular')">តំបន់ពេញនិយម</button>
          <button type="button" class="secondary" @click="emit('navigate', '/province/siem-reap')">មើលខេត្ត</button>
        </div>
      </div>
      <div class="hero-gallery">
        <img v-for="item in hero" :key="item.slug" :src="item.image" :alt="item.name">
      </div>
    </section>

    <section class="section-block compact">
      <div class="section-title"><h2>ខេត្ត/ក្រុង</h2></div>
      <div class="province-grid">
        <button v-for="province in provinces" :key="province.slug" type="button" @click="emit('navigate', '/province/' + province.slug)">
          <img :src="province.introImage" :alt="province.name">
          <span>{{ province.name }}</span>
        </button>
      </div>
    </section>

    <CardGrid title="តំបន់ពេញនិយម" :items="categories[0].items" @navigate="emit('navigate', $event)" />
    <CardGrid title="សណ្ឋាគារ" :items="hotels" mode="hotel" @navigate="emit('navigate', $event)" />
  </main>
</template>
