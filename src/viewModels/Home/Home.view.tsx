import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "./components/HomeHeader";
import { SearchInput } from "./components/Searchinput";

export const HomeView = () => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={[]}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        renderItem={() => <></>}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  );
};
