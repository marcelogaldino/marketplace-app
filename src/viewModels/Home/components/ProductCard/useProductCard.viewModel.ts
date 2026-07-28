import { ProductInterface } from "../../../../shared/interfaces/product";

interface UseProductViewModelInterface {
  product: ProductInterface;
}

export const useProductCardViewModel = ({
  product,
}: UseProductViewModelInterface) => {
  const formatProductName = (name: string) => {
    if (name.length >= 17) {
      return `${name.slice(0, 17)}...`;
    }
    return name;
  };

  const formatRating = product.averageRating.toFixed(1).replace(".", ",");

  const displayName = formatProductName(product.name);
  return { product, displayName, formatRating };
};
