import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusP1Component } from './aus-p1.component';

describe('AusP1Component', () => {
  let component: AusP1Component;
  let fixture: ComponentFixture<AusP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
