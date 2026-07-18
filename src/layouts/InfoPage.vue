<script setup>
defineProps({ page: Object });
</script>

<template>
  <main v-if="page">
    <section class="info-page">
      <h1>{{ page.title }}</h1>
      <p>{{ page.body }}</p>
    </section>
  </main>
</template>
