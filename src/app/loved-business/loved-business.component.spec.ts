import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovedBusinessComponent } from './loved-business.component';

describe('LovedBusinessComponent', () => {
  let component: LovedBusinessComponent;
  let fixture: ComponentFixture<LovedBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovedBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovedBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
