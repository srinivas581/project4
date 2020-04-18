import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndPerson2Component } from './ind-person2.component';

describe('IndPerson2Component', () => {
  let component: IndPerson2Component;
  let fixture: ComponentFixture<IndPerson2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndPerson2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndPerson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
