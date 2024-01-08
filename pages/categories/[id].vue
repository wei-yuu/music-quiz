<template>
  <NuxtLayout name="categories" title="選擇遊玩的播放清單">
    <selector :loading="loading" :options="playlist" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useCategoryPlaylistStore } from '@/store/categories/use-category-playlist.store';

const categoryPlaylistStore = useCategoryPlaylistStore();
const { loading, setCategoryPlaylist, isDifferentCategory } =
  categoryPlaylistStore;

const route = useRoute();

const playlist = computed({
  get: () => {
    return categoryPlaylistStore.categoryPlaylist;
  },
  set: (value) => {
    categoryPlaylistStore.categoryPlaylist = value;
  },
});

onMounted(async () => {
  if (isDifferentCategory(route.params.id as string)) {
    playlist.value = [];

    await setCategoryPlaylist({
      categoryID: route.params.id as string,
    });
  }
});
</script>
