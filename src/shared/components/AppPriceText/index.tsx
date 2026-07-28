import { FC } from "react";
import { AppPriceTextView } from "./AppPriceTextView";
import { useAppPriceTextViewModel } from "./useAppPriceText.ViewModel";

interface AppPriceTextParams {
  classNameCurrency?: string;
  classNameValue?: string;
  value: number;
}

export const AppPriceText: FC<AppPriceTextParams> = ({
  classNameValue,
  value,
  classNameCurrency,
}) => {
  const props = useAppPriceTextViewModel(value);
  return (
    <AppPriceTextView
      {...props}
      clasNameCurrency={classNameCurrency}
      classNameValue={classNameValue}
    />
  );
};
