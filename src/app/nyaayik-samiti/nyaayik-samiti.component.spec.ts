import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyaayikSamitiComponent } from './nyaayik-samiti.component';

describe('NyaayikSamitiComponent', () => {
  let component: NyaayikSamitiComponent;
  let fixture: ComponentFixture<NyaayikSamitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyaayikSamitiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NyaayikSamitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
