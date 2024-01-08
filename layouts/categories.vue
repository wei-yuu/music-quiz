<template>
  <div class="text-center">
    <slot name="header">
      <h2 class="py-[24px] text-[36px] font-bold">{{ title || '請選擇' }}</h2>
    </slot>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
