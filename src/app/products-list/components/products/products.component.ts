import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../../shared/components/product/product.component';
import { Store } from '@ngrx/store';
import { productsActions } from '../../store/actions';
import { environment } from '../../../../environments/environment.development';
import { combineLatest } from 'rxjs';
import {
  selectError,
  selectIsLoading,
  selectproductsData,
} from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { ErrorMessageComponent } from '../../../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, CommonModule,ErrorMessageComponent,LoadingComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    products: this.store.select(selectproductsData),
  });
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.store.dispatch(
      productsActions.getProducts({ url: environment.apiUrl })
    );
  }
}
