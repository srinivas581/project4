import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newregister1Component } from './newregister1.component';

describe('Newregister1Component', () => {
  let component: Newregister1Component;
  let fixture: ComponentFixture<Newregister1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newregister1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newregister1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
