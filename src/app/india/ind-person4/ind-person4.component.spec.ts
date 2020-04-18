import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndPerson4Component } from './ind-person4.component';

describe('IndPerson4Component', () => {
  let component: IndPerson4Component;
  let fixture: ComponentFixture<IndPerson4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndPerson4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndPerson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
