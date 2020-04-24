import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewregisterContentDialogComponent } from './newregister-content-dialog.component';

describe('NewregisterContentDialogComponent', () => {
  let component: NewregisterContentDialogComponent;
  let fixture: ComponentFixture<NewregisterContentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewregisterContentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewregisterContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
