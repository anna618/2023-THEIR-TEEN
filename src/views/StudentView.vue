<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { findStudentById } from "../data/students";

const props = defineProps<{
  id: string;
}>();

const student = computed(() => findStudentById(props.id));
</script>

<template>
  <article v-if="student" class="student-view">
    <header class="student-profile">
      <img class="student-photo" :src="student.photo" :alt="`${student.name} 的照片`" />
      <div>
        <p class="eyebrow">THEIR-TEEN</p>
        <h1>{{ student.name }}</h1>
      </div>
    </header>

    <section v-if="student.reflectionText" class="reflection-text" aria-label="心得文字">
      <p>{{ student.reflectionText }}</p>
    </section>

    <section
      v-if="student.reflectionImages?.length"
      class="reflection-images"
      aria-label="心得圖片"
    >
      <img
        v-for="(image, index) in student.reflectionImages"
        :key="image"
        :src="image"
        :alt="`${student.name} 的心得圖片 ${index + 1}`"
      />
    </section>
  </article>

  <section v-else class="empty-state">
    <p class="eyebrow">找不到這位學生</p>
    <h1>這個學生頁面不存在</h1>
    <RouterLink to="/">回到首頁</RouterLink>
  </section>
</template>
