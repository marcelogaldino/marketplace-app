import { FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "./components/HomeHeader";
import { SearchInput } from "./components/Searchinput";
import { ProductCard } from "./components/ProductCard";
import { FC } from "react";
import { useHomeViewModel } from "./useHome.viewModel";
import { Footer } from "./components/Footer";
import { colors } from "../../styles/colors";

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  handleEndReached,
  handleLoadMore,
  handleRefresh,
  isFetchingNextPage,
  isRefetching,
  hasNextPage,
  isLoading,
  products,
}) => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        keyExtractor={({ id }) => `product-list-item-${id}`}
        data={products}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        onEndReached={handleEndReached}
        ListFooterComponent={
          <Footer
            isLoading={hasNextPage && Boolean(isLoading || isFetchingNextPage)}
          />
        }
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerClassName="px-[16px] pb-[120px]"
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            colors={[colors["purple-base"]]}
            tintColor={colors["purple-base"]}
            onRefresh={handleRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};
