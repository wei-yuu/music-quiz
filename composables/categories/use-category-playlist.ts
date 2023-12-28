import type {
  CategoryPlaylistKkboxRequest,
  CategoryPlaylistKkboxResponse,
} from '@/types/composables/categories/category-playlist.type';

export const useCategoryPlaylist = () => {
  const { loading, error, fetch } = useKkboxApi<
    CategoryPlaylistKkboxRequest,
    CategoryPlaylistKkboxResponse
  >('/featured-playlist-categories', {
    method: 'GET',
  });

  return {
    loading,
    error,
    fetch,
  };
};
