import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newregister2Component } from './newregister2.component';

describe('Newregister2Component', () => {
  let component: Newregister2Component;
  let fixture: ComponentFixture<Newregister2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newregister2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newregister2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
