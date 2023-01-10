import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaryPadComponent } from './sanitary-pad.component';

describe('SanitaryPadComponent', () => {
  let component: SanitaryPadComponent;
  let fixture: ComponentFixture<SanitaryPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanitaryPadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanitaryPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
