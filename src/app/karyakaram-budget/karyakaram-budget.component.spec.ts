import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryakaramBudgetComponent } from './karyakaram-budget.component';

describe('KaryakaramBudgetComponent', () => {
  let component: KaryakaramBudgetComponent;
  let fixture: ComponentFixture<KaryakaramBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaryakaramBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaryakaramBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
