import { memo } from "react";
import { HomeHeader } from "../HomeHeader";
import { SearchInput } from "../Searchinput";

export const RenderHeader = memo(
  ({
    searchInputText,
    setSearchInputText,
  }: {
    setSearchInputText: (text: string) => void;
    searchInputText: string;
  }) => (
    <>
      <HomeHeader />
      <SearchInput
        setSearchInputText={setSearchInputText}
        inputValue={searchInputText}
      />
    </>
  ),
);
