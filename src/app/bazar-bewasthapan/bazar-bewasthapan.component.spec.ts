import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazarBewasthapanComponent } from './bazar-bewasthapan.component';

describe('BazarBewasthapanComponent', () => {
  let component: BazarBewasthapanComponent;
  let fixture: ComponentFixture<BazarBewasthapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BazarBewasthapanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BazarBewasthapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
