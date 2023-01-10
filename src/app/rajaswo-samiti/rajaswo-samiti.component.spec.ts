import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajaswoSamitiComponent } from './rajaswo-samiti.component';

describe('RajaswoSamitiComponent', () => {
  let component: RajaswoSamitiComponent;
  let fixture: ComponentFixture<RajaswoSamitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajaswoSamitiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajaswoSamitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
