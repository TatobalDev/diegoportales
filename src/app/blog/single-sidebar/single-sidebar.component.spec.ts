import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSidebarComponent } from './single-sidebar.component';

describe('SingleSidebarComponent', () => {
  let component: SingleSidebarComponent;
  let fixture: ComponentFixture<SingleSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
