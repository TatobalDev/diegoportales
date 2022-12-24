import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnlineCourseComponent } from './home-online-course.component';

describe('HomeOnlineCourseComponent', () => {
  let component: HomeOnlineCourseComponent;
  let fixture: ComponentFixture<HomeOnlineCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOnlineCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOnlineCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
