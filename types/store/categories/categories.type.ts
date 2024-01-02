import type { CategoriesResponse } from '@/types/composables/categories/categories.type';

export type CategoriesData = Partial<
  Record<'categories', CategoriesResponse['data']> &
    Omit<CategoriesResponse, 'data'>
>;

export * from '@/types/common.type';
export * from '@/types/composables/categories/categories.type';
