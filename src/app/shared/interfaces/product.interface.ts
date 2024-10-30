import { RatingInterface } from "./rating.interface";

export interface ProductInterface {
    id: number ;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingInterface|undefined;
  }
  