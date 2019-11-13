import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageLeadsComponent } from './engage-leads.component';

describe('EngageLeadsComponent', () => {
  let component: EngageLeadsComponent;
  let fixture: ComponentFixture<EngageLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngageLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
