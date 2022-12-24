import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoachingComponent } from './home-coaching.component';

describe('HomeCoachingComponent', () => {
  let component: HomeCoachingComponent;
  let fixture: ComponentFixture<HomeCoachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCoachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
