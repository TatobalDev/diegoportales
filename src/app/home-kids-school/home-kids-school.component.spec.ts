import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKidsSchoolComponent } from './home-kids-school.component';

describe('HomeKidsSchoolComponent', () => {
  let component: HomeKidsSchoolComponent;
  let fixture: ComponentFixture<HomeKidsSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKidsSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKidsSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
