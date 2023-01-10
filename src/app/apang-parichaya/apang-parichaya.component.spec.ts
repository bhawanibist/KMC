import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApangParichayaComponent } from './apang-parichaya.component';

describe('ApangParichayaComponent', () => {
  let component: ApangParichayaComponent;
  let fixture: ComponentFixture<ApangParichayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApangParichayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApangParichayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
