import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersProfileComponent } from './teachers-profile.component';

describe('TeachersProfileComponent', () => {
  let component: TeachersProfileComponent;
  let fixture: ComponentFixture<TeachersProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
