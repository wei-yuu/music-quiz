import type {
  SearchRequest,
  SearchResponse,
} from '@/types/composables/search/search.type';

export const useSearch = () => {
  const { loading, error, fetch } = useKkboxApi<SearchRequest, SearchResponse>(
    '/search',
    { method: 'GET' },
  );

  return {
    loading,
    error,
    fetch,
  };
};
