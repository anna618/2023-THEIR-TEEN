<script setup lang="ts">
import HamburgerMenu from "./components/HamburgerMenu.vue";
</script>

<template>
  <div class="app-shell">
    <HamburgerMenu />
    <main>
      <RouterView />
    </main>
  </div>
</template>
