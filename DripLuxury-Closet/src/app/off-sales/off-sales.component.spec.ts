import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffSalesComponent } from './off-sales.component';

describe('OffSalesComponent', () => {
  let component: OffSalesComponent;
  let fixture: ComponentFixture<OffSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
