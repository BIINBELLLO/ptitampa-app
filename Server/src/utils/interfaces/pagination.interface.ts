export interface PaginationResult<T> {
  data: T[];
  count: number;
  totalPages: number;
  currentPage: number;
}
