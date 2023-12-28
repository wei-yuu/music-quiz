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
    const categoryPlaylist = ref<CategoryPlaylistData['categoryPlaylist']>();
    const paging = ref<CategoryPlaylistData['paging']>();
    const summary = ref<CategoryPlaylistData['summary']>();

    // actions
    async function setCategoryPlaylist(args: CategoryPlaylistRequest) {
      const { error, fetch: getCategoryPlaylist } = useCategoryPlaylist();

      if (args.categoryID) {
        const res = await getCategoryPlaylist(
          {
            territory: args.territory || Territory.Taiwan,
            offset: args.offset,
            limit: args.limit,
          },
          `/${args.categoryID}/playlists`,
        );

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
      categoryPlaylist,
      paging,
      summary,
      setCategoryPlaylist,
    };
  },
);
