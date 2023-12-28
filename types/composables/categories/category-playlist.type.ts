import {
  type Paging,
  type Playlist,
  type Summary,
  Territory,
} from '@/types/composables/common.type';

export interface CategoryPlaylistKkboxRequest {
  territory: Territory;
  offset?: number;
  limit?: number;
}

export interface CategoryPlaylistKkboxResponse {
  greeting?: string;
  data: Playlist[];
  paging: Paging;
  summary: Summary;
}
