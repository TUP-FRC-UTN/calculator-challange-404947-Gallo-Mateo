import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuActionsComponent } from './calcu-actions.component';

describe('CalcuActionsComponent', () => {
  let component: CalcuActionsComponent;
  let fixture: ComponentFixture<CalcuActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcuActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcuActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
