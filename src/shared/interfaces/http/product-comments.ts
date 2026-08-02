export interface GetProductComments {
  productId: number;
  pagination: {
    page: number;
    perPage: number;
  };
}
