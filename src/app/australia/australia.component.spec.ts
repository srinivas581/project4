import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaComponent } from './australia.component';

describe('AustraliaComponent', () => {
  let component: AustraliaComponent;
  let fixture: ComponentFixture<AustraliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
