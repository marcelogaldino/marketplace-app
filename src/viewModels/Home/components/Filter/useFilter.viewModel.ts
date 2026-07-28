import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/useGetProductCategoriesQuery";
import { useBottomSheetStore } from "../../../../shared/store/bottom-sheet-store";
import { useUserFilterStore } from "../../../../shared/store/user-filter-store";

export const useFilterViewModel = () => {
  const {
    data: productsCategories,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery();

  const { updateFilter, filterState, applyFilters, resetFilter } =
    useUserFilterStore();
  const { close } = useBottomSheetStore();

  const parseValue = (text: string) => {
    const digits = text.replace(/\D/g, "");

    return digits.length > 0 ? Number(digits) : null;
  };

  const handleValueMaxChange = (text: string) => {
    updateFilter({ key: "valueMax", value: parseValue(text) });
  };

  const handleValueMinChange = (text: string) => {
    updateFilter({ key: "valueMin", value: parseValue(text) });
  };

  const handleCategoryToogle = (categoryId: number) => {
    const categoryAlreadyInArray =
      filterState.selectedCategories.includes(categoryId);

    if (categoryAlreadyInArray) {
      updateFilter({
        key: "selectedCategories",
        value: filterState.selectedCategories.filter((id) => id !== categoryId),
      });
    } else {
      updateFilter({
        key: "selectedCategories",
        value: [...filterState.selectedCategories, categoryId],
      });
    }
  };

  const handleApplyFilters = () => {
    applyFilters();
    close();
  };

  const handleResetFilter = () => {
    close();
    resetFilter();
  };

  return {
    handleCategoryToogle,
    handleValueMaxChange,
    handleValueMinChange,
    handleApplyFilters,
    handleResetFilter,
    selectedCategories: filterState.selectedCategories,
    productsCategories,
    isLoading,
  };
};
