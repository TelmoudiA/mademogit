import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsListService {
  url = 'http://localhost:3000/products';
  data: Product[] ;
  constructor(private _service: HttpClient) { }
getAllProducts(): Observable<Product[]>    {
  return this._service.get<Product[]>(this.url);
}
}
