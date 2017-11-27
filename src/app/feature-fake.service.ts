import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Product } from './product';
import { PRODUCTS } from './mock/mock-products';

@Injectable()
export class FeatureFakeService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return Observable.of(PRODUCTS);
  }
}
