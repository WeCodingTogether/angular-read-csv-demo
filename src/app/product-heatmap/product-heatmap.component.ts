import { Component, OnInit } from '@angular/core';
import { CsvReaderService } from '../csv-reader.service';
import { Product } from '../product';
import * as Highcharts from 'highcharts';
import Heatmap from 'highcharts/modules/heatmap.js';
Heatmap(Highcharts);
// highchartsHeatmap(Highcharts);
// require('highcharts/modules/heatmap')(Highcharts);


@Component({
  selector: 'app-product-heatmap',
  templateUrl: './product-heatmap.component.html',
  styleUrls: ['./product-heatmap.component.css']
})
export class ProductHeatmapComponent implements OnInit {
  products: Product[] = [];
  totalValueAndNum: any;
  constructor(private csvReaderService: CsvReaderService) {}

  ngOnInit(): void {
    this.csvReaderService.readCsvFile().subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    );

  }

  getTotalValueAndNumber(products: Product[]): number[] {
    let totalValue = 0;
    let totalNumber = 1;
    for(let i = 0; i < products.length; i++) {
      const product1 = products[i];
      for(let j = 0; j < products.length; j++) {
        const product2 = products[j];
        if(product1.category === product2.category && product1.group === product2.group) {
          totalValue = product1.value + product2.value;
          totalNumber++;
          products.splice(j, 1);
        }
      }
      this.totalValueAndNum.push(totalValue);
      this.totalValueAndNum.push(totalNumber);
    }
    return this.totalValueAndNum;
  }

  renderHeatmap(): void {

    Highcharts.chart('heatmap-container', {

    });
  }

}
