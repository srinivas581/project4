import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusP4Component } from './aus-p4.component';

describe('AusP4Component', () => {
  let component: AusP4Component;
  let fixture: ComponentFixture<AusP4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusP4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
