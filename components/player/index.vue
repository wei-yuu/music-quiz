<template>
  <div class="box-border w-[50vw] p-[12px]">
    <iframe
      :src="`https://widget.kkbox.com/v1/?id=${id}&type=${type}&terr=${territory}&lang=${lang}&autoplay=${autoplay}&loop=${loop}`"
      allow="autoplay"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import {
  type PlayerProps,
  Territory,
} from '@/types/components/player/player.type';

withDefaults(defineProps<PlayerProps>(), {
  id: '',
  type: 'song',
  territory: Territory.Taiwan,
  lang: 'EN',
  autoplay: true,
  loop: false,
});
</script>
