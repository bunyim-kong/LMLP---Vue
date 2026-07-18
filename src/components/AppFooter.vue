<script setup>
import { navLinks } from "../data/siteData";
const emit = defineEmits(["navigate"]);
</script>

<template>
  <footer class="site-footer">
    <div>
      <img src="/assets/images/lmlp-logo.png" alt="LMLP Tourism">
      <p><b>TOURISMLMLP</b> រៀបចំព័ត៌មានទេសចរណ៍ កន្លែងកម្សាន្ត សណ្ឋាគារ និងគន្លឹះធ្វើដំណើរនៅកម្ពុជា។</p>
    </div>
    <div>
      <h3>Navigation</h3>
      <a v-for="link in navLinks" :key="link.path" :href="link.path" @click.prevent="emit('navigate', link.path)">{{ link.label }}</a>
    </div>
    <div>
      <h3>Contact</h3>
      <p>Phnom Penh, Cambodia</p>
      <p>info@lmlp-tourism.local</p>
    </div>
  </footer>
</template>
