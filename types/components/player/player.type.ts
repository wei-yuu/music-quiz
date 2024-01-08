import { Territory } from '@/types/common.type';

export interface PlayerProps {
  id: string;
  type?: string;
  territory?: Territory;
  lang?: string;
  autoplay?: boolean;
  loop?: boolean;
}

export * from '@/types/common.type';
