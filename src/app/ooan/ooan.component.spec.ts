import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OoanComponent } from './ooan.component';

describe('OoanComponent', () => {
  let component: OoanComponent;
  let fixture: ComponentFixture<OoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
