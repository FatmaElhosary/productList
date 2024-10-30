import { RatingInterface } from './../../interfaces/rating.interface';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent implements OnInit {
  ngOnInit(): void {
   // Array(Math.floor(this.rating)).fill(0);
  }
  @Input() rating: RatingInterface={
    count:0,
    rate:0
  };
  get stars() {
    return Array(Math.floor(this.rating.rate)).fill(0);
  }
}
