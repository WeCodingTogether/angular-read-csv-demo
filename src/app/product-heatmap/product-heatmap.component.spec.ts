import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeatmapComponent } from './product-heatmap.component';

describe('ProductHeatmapComponent', () => {
  let component: ProductHeatmapComponent;
  let fixture: ComponentFixture<ProductHeatmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductHeatmapComponent]
    });
    fixture = TestBed.createComponent(ProductHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
