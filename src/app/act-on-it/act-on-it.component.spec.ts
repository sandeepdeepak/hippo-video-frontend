import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActOnItComponent } from './act-on-it.component';

describe('ActOnItComponent', () => {
  let component: ActOnItComponent;
  let fixture: ComponentFixture<ActOnItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActOnItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActOnItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
