import type {
  CategoryPlaylistKkboxRequest,
  CategoryPlaylistKkboxResponse,
} from '@/types/composables/categories/category-playlist.type';

export const useCategoryPlaylist = () => {
  const { loading, error, fetch } = useKkboxApi<
    CategoryPlaylistKkboxRequest,
    CategoryPlaylistKkboxResponse
  >('/featured-playlist-categories/{category_id}/playlists', {
    method: 'GET',
  });

  return {
    loading,
    error,
    fetch,
  };
};
