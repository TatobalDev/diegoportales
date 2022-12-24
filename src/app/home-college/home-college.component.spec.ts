import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCollegeComponent } from './home-college.component';

describe('HomeCollegeComponent', () => {
  let component: HomeCollegeComponent;
  let fixture: ComponentFixture<HomeCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
