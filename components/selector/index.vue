<template>
  <div
    :class="[
      'm-auto box-border w-[60vw] p-[12px]',
      {
        'min-h-[70vh] animate-pulse bg-gray-200': loading,
      },
    ]"
  >
    <ul class="flex w-full flex-wrap items-center justify-evenly gap-[24px]">
      <li v-for="(option, index) in options" :key="index">
        <a
          class="text-center"
          href=""
          :title="option.title"
          @click="
            (e) => {
              e.preventDefault();
              emits('selected', option.id);
            }
          "
        >
          <img
            :src="option.images[0].url"
            :alt="option.title"
            :srcset="
              option.images.reduce((accumulator, current, index) => {
                return accumulator + `${current.url} ${index + 1}x,`;
              }, '')
            "
          />
          <p class="m-auto max-w-[250px] truncate">
            {{ option.title }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Category, Playlist } from '@/types/common.type';

const emits = defineEmits<{
  (e: 'selected', value?: string): void;
}>();

defineProps<{
  loading: boolean;
  options?: Category[] | Playlist[];
}>();
</script>
