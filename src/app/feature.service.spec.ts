import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { Http } from '@angular/http';
import { Product } from './product';
import { Observable } from 'rxjs/Rx';

import { PRODUCTS } from './mock/mock-products';
import { FeatureService } from './feature.service';


describe('FeatureService', () => {

  let mockHttp: Http;

  beforeEach(() => {

    mockHttp = { get: null } as Http;

    spyOn(mockHttp, 'get').and.returnValue(Observable.of({
      json: () => PRODUCTS
    }));

    TestBed.configureTestingModule({
      providers: [
        FeatureService,
        {
          provide: Http,
          useValue: mockHttp
        }
      ]
    });
  });

  it('should be created', inject([FeatureService], (service: FeatureService) => {
    expect(service).toBeTruthy();
  }));

  describe('getProducts', () => {

    it('should return all products using mock http', fakeAsync(inject([FeatureService], (service: FeatureService) => {
      let actual: Product[];

      service.getProducts().subscribe(result => {
        actual = result;
      });

      tick();

      expect(actual).toEqual(PRODUCTS);

    })));
  });

});
