import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusP2Component } from './aus-p2.component';

describe('AusP2Component', () => {
  let component: AusP2Component;
  let fixture: ComponentFixture<AusP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
