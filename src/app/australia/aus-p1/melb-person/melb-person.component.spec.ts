import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelbPersonComponent } from './melb-person.component';

describe('MelbPersonComponent', () => {
  let component: MelbPersonComponent;
  let fixture: ComponentFixture<MelbPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelbPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelbPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
