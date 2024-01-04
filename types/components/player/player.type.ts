import { Territory } from '@/types/composables/common.type';

export interface PlayerProps {
  id?: string;
  type?: string;
  territory?: Territory;
  lang?: string;
  autoplay?: boolean;
  loop?: boolean;
}

export * from '@/types/composables/common.type';
