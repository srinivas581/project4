import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusP3Component } from './aus-p3.component';

describe('AusP3Component', () => {
  let component: AusP3Component;
  let fixture: ComponentFixture<AusP3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusP3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
