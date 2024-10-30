import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { StarRatingModule } from 'angular-star-rating';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,StarRatingComponent, StarRatingModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product: ProductInterface = {
    id: 1,
    title: '',
    price: 10,
    description: 'string',
    category: 'string',
    image: 'string',
    rating: undefined,
  };
}
