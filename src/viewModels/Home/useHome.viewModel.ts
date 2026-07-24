import { useProductInfinityQuery } from "../../shared/queries/product/useProductInfinityQuery";

export const useHomeViewModel = () => {
  const {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useProductInfinityQuery();

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  const handleRefresh = async () => {
    await refetch();
  };

  const handleEndReached = () => {
    handleLoadMore();
  };

  return {
    handleLoadMore,
    handleRefresh,
    handleEndReached,
    isFetchingNextPage,
    hasNextPage,
    products,
    isLoading,
    isRefetching,
  };
};
