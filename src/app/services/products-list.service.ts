import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductsListService {

  constructor() { }

  getAllProducts(): Product[] {
   return [
      {code: 'p100', nom: 'coffee', prix: 1500.0},
      {code: 'p200', nom: 'vue sur mer', prix: 500.0},
      {code: 'p300', nom: 'vue sur terre', prix: 100.0}
    ];
     }
  }
