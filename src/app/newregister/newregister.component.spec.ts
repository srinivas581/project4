import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewregisterComponent } from './newregister.component';

describe('NewregisterComponent', () => {
  let component: NewregisterComponent;
  let fixture: ComponentFixture<NewregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
