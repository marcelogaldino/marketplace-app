import { create } from "zustand";

export interface FilterState {
  valueMin: number | null;
  valueMax: number | null;
  selectedCategories: number[];
  searchText: string;
}

interface FilterStore {
  aplliedFilterState: FilterState;
  filterState: FilterState;

  updateFilter: (props: {
    key: keyof FilterState;
    value: string | number | number[] | null;
  }) => void;

  resetFilter: () => void;
  applyFilters: () => void;
}

const defaultFilterValues = {
  searchText: "",
  selectedCategories: [],
  valueMax: null,
  valueMin: null,
};

export const useUserFilterStore = create<FilterStore>((set) => ({
  aplliedFilterState: defaultFilterValues,
  filterState: defaultFilterValues,

  updateFilter: ({ key, value }) => {
    set((state) => ({
      filterState: { ...state.filterState, [key]: value },
    }));
  },

  resetFilter: () => {
    set({
      filterState: defaultFilterValues,
      aplliedFilterState: defaultFilterValues,
    });
  },

  applyFilters: () =>
    set((state) => ({
      aplliedFilterState: state.filterState,
    })),
}));
