import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrPersonComponent } from './ctr-person.component';

describe('CtrPersonComponent', () => {
  let component: CtrPersonComponent;
  let fixture: ComponentFixture<CtrPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
