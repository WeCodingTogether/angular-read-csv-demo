import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {

  products: Product[] = [];

  constructor(private http: HttpClient) {}

  readCsvFile(): Observable<Product[]> {
    return this.http.get('assets/products.csv', { responseType: 'text' })
      .pipe(
        map((csvData => {
          const csvRows = csvData.split('\n');
          for (let i = 1; i < csvRows.length - 1; i++) {
            const csvValues = csvRows[i].split(',');
            const product = new Product();
            product.partNo = csvValues[0];
            product.partName = csvValues[1];
            product.category = csvValues[2];
            product.group = csvValues[3];
            product.value = +csvValues[4]; // convert string to number: +
            this.products.push(product);
          }
          return this.products;
        }))
      );

  }

}
