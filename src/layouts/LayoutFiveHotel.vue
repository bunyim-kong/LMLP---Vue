<script setup>
defineProps({ hotel: Object });
const emit = defineEmits(["navigate"]);
</script>

<template>
  <main v-if="hotel">
    <section class="hotel-layout">
      <div class="hotel-copy">
        <button class="back-link" type="button" @click="emit('navigate', '/list/hotels')">ត្រឡប់ទៅវិញ</button>
        <h1>{{ hotel.name }}</h1>
        <p><i class="fa-solid fa-location-dot"></i> {{ hotel.province }}</p>
        <p>{{ hotel.summary }}</p>
        <strong>{{ hotel.price }} / night</strong>
      </div>
      <div class="hotel-gallery">
        <img v-for="img in hotel.gallery" :key="img" :src="img" :alt="hotel.name">
      </div>
      <div class="amenity-panel">
        <h2>គ្រឿងបរិក្ខារ</h2>
        <span v-for="item in hotel.amenities" :key="item">{{ item }}</span>
      </div>
      <form class="booking-form" @submit.prevent>
        <h2>Booking</h2>
        <label>Check in <input type="date"></label>
        <label>Check out <input type="date"></label>
        <label>Guests <input type="number" min="1" value="2"></label>
        <button type="submit">កក់ឥឡូវនេះ</button>
      </form>
    </section>
  </main>
</template>
