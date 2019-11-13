import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicPresentationComponent } from './magic-presentation.component';

describe('MagicPresentationComponent', () => {
  let component: MagicPresentationComponent;
  let fixture: ComponentFixture<MagicPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
