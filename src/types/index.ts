export interface IBurger {
  composition: string;
  deleted: boolean;
  description: string;
  discount: number;
  discountPrice: number;
  id: string;
  image: string;
  isDailyDish: boolean;
  limit: number;
  name: string;
  order: number;
  price: number;
  weight: number;
  comments: [{ name: string; comment: string }];
  count: number;
}
