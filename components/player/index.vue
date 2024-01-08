<template>
  <iframe
    class="hidden"
    :src="`https://widget.kkbox.com/v1/?id=${id}&type=${type}&terr=${territory}&lang=${lang}&autoplay=${autoplay}&loop=${loop}`"
    allow="autoplay"
  />
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
  loop: true,
});
</script>
