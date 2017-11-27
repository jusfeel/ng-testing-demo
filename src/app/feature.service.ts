import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Product } from './product';

@Injectable()
export class FeatureService {

  apiUrl: string = "http://some-url/";

  constructor(private http: Http) {}

  getProducts(): Observable<Product[]> {
    const productsUrl = `${this.apiUrl}products`;
    return this.http.get(productsUrl)
      .map(response => response.json());
  }

}
