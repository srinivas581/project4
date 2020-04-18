import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApPersonComponent } from './ap-person.component';

describe('ApPersonComponent', () => {
  let component: ApPersonComponent;
  let fixture: ComponentFixture<ApPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
