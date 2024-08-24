import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuViewComponent } from './calcu-view.component';

describe('CalcuViewComponent', () => {
  let component: CalcuViewComponent;
  let fixture: ComponentFixture<CalcuViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcuViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
