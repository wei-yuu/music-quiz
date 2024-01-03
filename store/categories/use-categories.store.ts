import { useCategories } from '@/composables/categories/use-categories';
import {
  type CategoriesData,
  type CategoriesRequest,
  Territory,
} from '@/types/store/categories/categories.type';

export const useCategoriesStore = definePiniaStore('categories', () => {
  // state
  const categories = ref<CategoriesData['categories']>();
  const paging = ref<CategoriesData['paging']>();
  const summary = ref<CategoriesData['summary']>();
  const { loading } = useCategories();

  // actions
  async function setCategoriesData(args?: Partial<CategoriesRequest>) {
    const { error, fetch: getCategories } = useCategories();

    const res = await getCategories({
      territory: args?.territory || Territory.Taiwan,
      offset: args?.offset,
      limit: args?.limit,
    });

    if (res) {
      const { data, error: fetchError } = res;

      if (data.value) {
        categories.value = data.value?.data;
        paging.value = data.value?.paging;
        summary.value = data.value?.summary;
      }

      if (fetchError.value) {
        throw fetchError.value;
      }
    } else {
      throw error;
    }
  }

  // init
  setCategoriesData();

  return {
    categories,
    loading,
    paging,
    summary,
    setCategoriesData,
  };
});
