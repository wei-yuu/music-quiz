import { useCategories } from '@/composables/categories/use-categories';
import {
  type CategoriesData,
  type CategoriesRequest,
  Territory,
} from '@/types/store/categories.type';

export const useCategoriesStore = definePiniaStore('categories', {
  state: (): CategoriesData => {
    return {
      categories: undefined,
      paging: undefined,
      summary: undefined,
    };
  },
  actions: {
    async setCategoriesData(args?: Partial<CategoriesRequest>) {
      const { error, fetch: getCategories } = useCategories();

      const res = await getCategories({
        territory: args?.territory || Territory.Taiwan,
        offset: args?.offset,
        limit: args?.limit,
      });

      if (res) {
        const { data, error } = res;

        if (data.value) {
          this.categories = data.value?.data;
          this.paging = data.value?.paging;
          this.summary = data.value?.summary;
        }

        if (error.value) {
          throw error.value;
        }
      } else {
        throw error;
      }
    },
  },
});
