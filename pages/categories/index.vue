<template>
  <NuxtLayout name="categories" title="選擇音樂種類">
    <selector
      :loading="loading"
      :options="categories"
      @selected="(id) => navigateTo({ path: `/categories/${id}` })"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '@/store/categories/use-categories.store';

const categoriesStore = useCategoriesStore();
const { loading } = categoriesStore;

const categories = computed(() => {
  return categoriesStore.categories;
});
</script>
