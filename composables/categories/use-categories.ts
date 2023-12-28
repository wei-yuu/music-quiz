import type {
  CategoriesRequest,
  CategoriesResponse,
} from '@/types/composables/categories/categories.type';

export const useCategories = () => {
  const { loading, error, fetch } = useKkboxApi<
    CategoriesRequest,
    CategoriesResponse
  >('/featured-playlist-categories', { method: 'GET' });

  return {
    loading,
    error,
    fetch,
  };
};
