import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishiAnudanComponent } from './krishi-anudan.component';

describe('KrishiAnudanComponent', () => {
  let component: KrishiAnudanComponent;
  let fixture: ComponentFixture<KrishiAnudanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrishiAnudanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KrishiAnudanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
