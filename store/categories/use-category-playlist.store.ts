import { useCategoryPlaylist } from '@/composables/categories/use-category-playlist';
import {
  Territory,
  type CategoryPlaylistData,
  type CategoryPlaylistRequest,
} from '@/types/store/categories/category-playlist.type';

export const useCategoryPlaylistStore = definePiniaStore(
  'categoryPlaylist',
  () => {
    // state
    const categoryID = ref<string>('');
    const categoryPlaylist = ref<CategoryPlaylistData['categoryPlaylist']>();
    const paging = ref<CategoryPlaylistData['paging']>();
    const summary = ref<CategoryPlaylistData['summary']>();
    const { loading } = useCategoryPlaylist();

    // getters
    const isDifferentCategory = computed(() => {
      return (id: string) => id !== categoryID.value;
    });

    // actions
    async function setCategoryPlaylist(args: CategoryPlaylistRequest) {
      const { error, fetch: getCategoryPlaylist } = useCategoryPlaylist();

      if (args.categoryID) {
        categoryID.value = args.categoryID;

        const res = await getCategoryPlaylist({
          category_id: args.categoryID,
          territory: args.territory || Territory.Taiwan,
          offset: args.offset,
          limit: args.limit,
        });

        if (res) {
          const { data, error: fetchError } = res;

          if (data.value) {
            categoryPlaylist.value = data.value?.data;
            paging.value = data.value?.paging;
            summary.value = data.value?.summary;
          }

          if (fetchError.value) {
            throw fetchError.value;
          }
        } else {
          throw error;
        }
      } else {
        throw new Error('categoryID is required');
      }
    }

    return {
      categoryID,
      categoryPlaylist,
      loading,
      paging,
      summary,
      isDifferentCategory,
      setCategoryPlaylist,
    };
  },
);