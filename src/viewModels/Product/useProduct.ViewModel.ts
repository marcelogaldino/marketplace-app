import { useGetProductDetailQuery } from "../../shared/queries/product/useGetProductDetailQuery";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetailQuery(productId);
  return { productDetails, isLoading, error };
};
