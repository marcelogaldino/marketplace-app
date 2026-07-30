import { useGetProductDetailQuery } from "../../shared/queries/product/useGetProductDetailQuery";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetail,
    isLoading,
    error,
  } = useGetProductDetailQuery(productId);
  return { productDetail, isLoading, error };
};
