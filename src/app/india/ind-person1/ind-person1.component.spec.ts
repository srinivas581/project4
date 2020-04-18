import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndPerson1Component } from './ind-person1.component';

describe('IndPerson1Component', () => {
  let component: IndPerson1Component;
  let fixture: ComponentFixture<IndPerson1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndPerson1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndPerson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
