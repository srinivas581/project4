import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndPerson3Component } from './ind-person3.component';

describe('IndPerson3Component', () => {
  let component: IndPerson3Component;
  let fixture: ComponentFixture<IndPerson3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndPerson3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndPerson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
