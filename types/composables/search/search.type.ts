import { Territory } from '@/types/composables/common.type';
import type { Track, Album, Artist, Playlist, Summary, Paging } from '@/types/composables/common.type';

export interface SearchRequest {
  /**
   * Search query keywords, url encoded
   */
  q: string;

  /**
   * Comma-separated list of types to search, Default: track,album,artist,playlist
   */
  type?: string;

  /**
   * Two-letter country codes from ISO 3166-1 alpha-2, Allowed: HK, JP, MY, SG, TW
   * 
   * Since an album may has different names and cover images when it is released in different territories, we need a territory code to help you to present the album for the territory that you desire.
   * 
   * It applies on tracks, artists, and playlists, too.
   */
  territory: Territory;

  /**
   * '>=0'
   */
  offset?: number;

  /**
   * The number of items to return per page, >=1 and <= 50, Default: 15
   */
  limit?: number;

  /**
   * Show only authorized result
   */
  availability?: boolean;
};

export interface SearchResponse {
  tracks?: {
    data: Track[];
    paging: Paging;
    summary: Summary;
  };
  albums?: {
    data: Album[];
    paging: Paging;
    summary: Summary;
  };
  artists?: {
    data: Artist[];
    paging: Paging;
    summary: Summary;
  };
  playlists?: {
    data: Playlist[];
    paging: Paging;
    summary: Summary;
  };
  paging: Paging;
  summary: Summary;
};
