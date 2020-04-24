import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDialogContentComponent } from './model-dialog-content.component';

describe('ModelDialogContentComponent', () => {
  let component: ModelDialogContentComponent;
  let fixture: ComponentFixture<ModelDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
