import type {
  CategoryPlaylistKkboxRequest,
  CategoryPlaylistKkboxResponse,
} from '@/types/composables/categories/category-playlist.type';

export type CategoryPlaylistData = Partial<
  Record<'categoryPlaylist', CategoryPlaylistKkboxResponse['data']> &
    Omit<CategoryPlaylistKkboxResponse, 'data'>
>;

export type CategoryPlaylistRequest = Partial<
  Omit<CategoryPlaylistKkboxRequest, 'category_id'>
> & {
  categoryID: string;
};

// export type CategoryPlaylistResponse = CategoryPlaylistKkboxResponse;

export * from '@/types/common.type';