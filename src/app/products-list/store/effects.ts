import { ProductsService } from './../../services/products.service';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { productsActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductsResponseInterface } from '../../shared/interfaces/product-response.interface';

export const getProductsEffect = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(productsActions.getProducts),
      switchMap(({ url }) => {
        return productsService.getProducts(url).pipe(
          map((products: any) => {
            return productsActions.getProductsSuccess({ products });
          }),
          catchError(() => {
            return of(productsActions.getProductsFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
