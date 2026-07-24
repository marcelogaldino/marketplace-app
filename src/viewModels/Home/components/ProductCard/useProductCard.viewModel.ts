import { ProductInterface } from "../../../../shared/interfaces/product";

interface UseProductViewModelInterface {
  product: ProductInterface;
}

export const useProductCardViewModel = ({
  product,
}: UseProductViewModelInterface) => {
  return { product };
};
