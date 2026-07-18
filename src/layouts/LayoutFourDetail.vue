<script setup>
defineProps({ place: Object });
const emit = defineEmits(["navigate"]);
</script>

<template>
  <main v-if="place">
    <section class="detail-layout">
      <div>
        <button class="back-link" type="button" @click="emit('navigate', '/list/popular')">ត្រឡប់ទៅវិញ</button>
        <h1>{{ place.name }}</h1>
        <p><i class="fa-solid fa-location-dot"></i> {{ place.province }}</p>
      </div>
      <div class="detail-gallery">
        <img v-for="img in place.gallery" :key="img" :src="img" :alt="place.name">
      </div>
      <article class="detail-copy">
        <h2>អំពីទីតាំងនេះ</h2>
        <p>{{ place.summary }}</p>
        <ul>
          <li>រូបភាព និងអត្ថបទត្រូវបានអានពី data object។</li>
          <li>Layout នេះអាចប្រើសម្រាប់ប្រាសាទ ឆ្នេរ សួនកម្សាន្ត និងភោជនីយដ្ឋាន។</li>
          <li>បើត្រូវការបន្ថែមទំព័រ អ្នកបន្ថែម item ថ្មីក្នុង places data ប៉ុណ្ណោះ។</li>
        </ul>
      </article>
    </section>
  </main>
</template>
