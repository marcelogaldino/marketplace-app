import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/product.service";
import { BuildImageUrl } from "../../helpers/buildImageUrl";
import { FilterState } from "../../store/user-filter-store";
import { ProductRequest } from "../../interfaces/http/product";

interface productsInfinityQueryParam {
  filters: FilterState;
}

export const useProductInfinityQuery = ({
  filters,
}: productsInfinityQueryParam) => {
  const hasFilters =
    filters.selectedCategories.length > 0 ||
    filters.valueMin !== null ||
    filters.valueMax !== null ||
    filters.searchText.length > 0;

  const requestFilters: ProductRequest["filters"] = {
    categoryIds: filters.selectedCategories,
    minValue: filters.valueMin ?? undefined,
    maxValue: filters.valueMax ?? undefined,
    searchText: filters.searchText || undefined,
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
          filters: hasFilters ? requestFilters : undefined,
        });

        return response;
      } catch (error) {
        throw error;
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
    initialPageParam: 1,
    queryKey: ["products", filters],
    staleTime: 1000 * 60 * 5,
  });

  const products = data?.pages
    .flatMap((page) => page.data)
    .map((product) => ({
      ...product,
      photo: BuildImageUrl(product.photo),
    }));

  return {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  };
};
