import { FC } from "react";
import { Text, View } from "react-native";
import { useAppPriceTextViewModel } from "./useAppPriceText.ViewModel";

export const AppPriceTextView: FC<
  ReturnType<typeof useAppPriceTextViewModel> & {
    clasNameCurrency?: string;
    classNameValue?: string;
  }
> = ({
  clasNameCurrency,
  classNameValue,
  currencySymbol,
  formatPrice,
  value,
  valueText,
}) => {
  return (
    <View className="flex-row items-baseline">
      <Text className={clasNameCurrency ?? "text-sm text-gray-900"}>
        {currencySymbol}
      </Text>
      <Text className={classNameValue ?? "text-2xl font-bold text-gray-900"}>
        {valueText}
      </Text>
    </View>
  );
};
