import {
  type Paging,
  type Playlist,
  type Summary,
  Territory,
} from '@/types/common.type';

export interface CategoryPlaylistKkboxRequest {
  category_id: string;
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
