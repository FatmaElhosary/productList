import { ProductsResponseInterface } from '../../shared/interfaces/product-response.interface';
import { ProductInterface } from '../../shared/interfaces/product.interface';

export interface ProductsStateInterface {
  isLoading: boolean;
  error: string | null;
  data: ProductInterface[] | null;
}
