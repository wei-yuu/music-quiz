import { Territory } from '@/types/composables/common.type';
import type {
  Image,
  Paging,
  Playlist,
  Summary,
} from '@/types/composables/common.type';

export interface CategoriesRequest {
  territory: Territory;
  offset?: number;
  limit?: number;
}

export interface Category {
  id: string;
  title: string;
  images: Image[];
  playlists?: {
    greeting: string;
    data: Playlist[];
    paging: Paging;
    summary: Summary;
  };
}

export interface CategoriesResponse {
  data: Category[];
  paging: Paging;
  summary: Summary;
}
