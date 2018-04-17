import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  data: Product[];
  constructor() {

    this.data = [
    {code: 'p100', nom: 'coffee', prix: 1500.0},
    {code: 'p200', nom: 'vue sur mer', prix: 500.0},
    {code: 'p300', nom: 'vue sur terre', prix: 100.0}];

   }

  ngOnInit() {
  }

}
