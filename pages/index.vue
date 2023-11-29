<template>
  <div class="bg-white">
    <div class="flex justify-center items-center py-24">
      <h1 class="text-6xl font-semibold text-gray-800">{{ title }}</h1>
    </div>
    <div class="flex justify-center items-center text-center py-24">
      <a class="w-[50vw] text-7xl box-border">開始遊戲</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: 'Music Quiz!',
  },
});
</script>
