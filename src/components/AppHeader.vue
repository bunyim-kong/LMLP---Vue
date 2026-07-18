<script setup>
import { ref } from "vue";
import { navLinks, provinces } from "../data/siteData";

const open = ref(false);
const emit = defineEmits(["navigate"]);

function go(path) {
  open.value = false;
  emit("navigate", path);
}
</script>

<template>
  <header class="site-header">
    <a class="brand" href="/" @click.prevent="go('/')">
      <img src="/assets/images/lmlp-logo.png" alt="LMLP Tourism">
    </a>

    <button class="menu-button" type="button" @click="open = !open" aria-label="Toggle navigation">
      <i class="fa-solid" :class="open ? 'fa-xmark' : 'fa-bars'"></i>
    </button>

    <nav class="site-nav" :class="{ open }">
      <a v-for="link in navLinks" :key="link.path" :href="link.path" @click.prevent="go(link.path)">{{ link.label }}</a>
      <div class="province-menu">
        <button type="button">ខេត្ត/ក្រុង <i class="fa-solid fa-chevron-down"></i></button>
        <div class="province-panel">
          <a v-for="province in provinces" :key="province.slug" :href="'/province/' + province.slug" @click.prevent="go('/province/' + province.slug)">
            {{ province.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
