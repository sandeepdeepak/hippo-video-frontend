import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEmailsComponent } from './video-emails.component';

describe('VideoEmailsComponent', () => {
  let component: VideoEmailsComponent;
  let fixture: ComponentFixture<VideoEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
