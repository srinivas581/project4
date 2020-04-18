import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TptPersonComponent } from './tpt-person.component';

describe('TptPersonComponent', () => {
  let component: TptPersonComponent;
  let fixture: ComponentFixture<TptPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TptPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TptPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
