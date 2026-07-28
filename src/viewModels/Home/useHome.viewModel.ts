import { useState } from "react";
import { useProductInfinityQuery } from "../../shared/queries/product/useProductInfinityQuery";
import { useUserFilterStore } from "../../shared/store/user-filter-store";
import { useDebounce } from "../../shared/hooks/useDebounce";

export const useHomeViewModel = () => {
  const aplliedFilterState = useUserFilterStore(
    (state) => state.aplliedFilterState,
  );

  const [searchInputText, setSearchInputText] = useState("");

  const currentSearchText = useDebounce(searchInputText);

  const {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useProductInfinityQuery({
    filters: { ...aplliedFilterState, searchText: currentSearchText },
  });

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
    setSearchInputText,
    isFetchingNextPage,
    hasNextPage,
    products,
    isLoading,
    isRefetching,
    searchInputText,
  };
};
