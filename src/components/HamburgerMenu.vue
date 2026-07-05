<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { students } from "../data/students";

const route = useRoute();
const isOpen = ref(false);

const currentTitle = computed(() => {
  if (route.name === "student") {
    return students.find((student) => student.id === route.params.id)?.name ?? "THEIR-TEEN";
  }

  if (route.name === "playlist") {
    return "歌單";
  }

  return "THEIR-TEEN";
});

function closeMenu() {
  isOpen.value = false;
}

watch(
  () => route.fullPath,
  () => closeMenu(),
);
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand-link" to="/" aria-label="回到首頁">
      {{ currentTitle }}
    </RouterLink>

    <button
      class="menu-button"
      type="button"
      :aria-expanded="isOpen"
      aria-controls="student-menu"
      aria-label="開啟學生選單"
      @click="isOpen = !isOpen"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </header>

  <Transition name="fade">
    <button
      v-if="isOpen"
      class="menu-backdrop"
      type="button"
      aria-label="關閉學生選單"
      @click="closeMenu"
    ></button>
  </Transition>

  <Transition name="slide">
    <nav v-if="isOpen" id="student-menu" class="student-menu" aria-label="學生導覽">
      <div class="menu-heading">
        <p>學生列表</p>
        <button type="button" aria-label="關閉學生選單" @click="closeMenu">×</button>
      </div>

      <RouterLink class="menu-home-link" to="/">
        <span>首頁海報</span>
      </RouterLink>

      <RouterLink class="menu-home-link" :to="{ name: 'playlist' }">
        <span>歌單</span>
      </RouterLink>

      <RouterLink
        v-for="student in students"
        :key="student.id"
        class="student-menu-link"
        :to="{ name: 'student', params: { id: student.id } }"
      >
        <img :src="student.photo" :alt="`${student.name} 的照片縮圖`" />
        <span>{{ student.name }}</span>
      </RouterLink>
    </nav>
  </Transition>
</template>
