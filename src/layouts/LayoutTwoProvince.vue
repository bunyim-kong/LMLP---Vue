<script setup>
import CardGrid from "../components/CardGrid.vue";
import { hotels, places } from "../data/siteData";
defineProps({ province: Object });
const emit = defineEmits(["navigate"]);
</script>

<template>
  <main v-if="province">
    <section class="page-hero province-hero">
      <img v-for="img in province.hero" :key="img" :src="img" :alt="province.name">
      <div>
        <p>ខេត្ត/ក្រុង</p>
        <h1>{{ province.name }}</h1>
      </div>
    </section>

    <section class="split-section">
      <img :src="province.introImage" :alt="province.name">
      <div>
        <h2>ព័ត៍មានអំពី{{ province.name }}</h2>
        <p>{{ province.summary }}</p>
        <p>Layout នេះអាចប្រើសម្រាប់គ្រប់ខេត្ត។ អ្នកគ្រាន់តែបន្ថែមឈ្មោះ រូបភាព និងអត្ថបទក្នុង data file មួយ។</p>
      </div>
    </section>

    <CardGrid title="កន្លែងដែលគួរទស្សនា" :items="places.slice(0, 6)" @navigate="emit('navigate', $event)" />
    <CardGrid title="សណ្ឋាគារណែនាំ" :items="hotels" mode="hotel" @navigate="emit('navigate', $event)" />
  </main>
</template>
