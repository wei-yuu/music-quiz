import { Territory } from '@/types/common.type';
import type { Category, Paging, Summary } from '@/types/common.type';

export interface CategoriesRequest {
  territory: Territory;
  offset?: number;
  limit?: number;
}

export interface CategoriesResponse {
  data: Category[];
  paging: Paging;
  summary: Summary;
}
