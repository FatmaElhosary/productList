import { ProductInterface } from '../../shared/interfaces/product.interface';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const productsActions = createActionGroup({
  source: 'products',
  events: {
    'Get Products': props<{ url: string }>(),
    'Get Products success': props<{ products: ProductInterface[] }>(),
    'Get Products failure': emptyProps(),
  },
});
