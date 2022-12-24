import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid3SidebarLeftComponent } from './grid3-sidebar-left.component';

describe('Grid3SidebarLeftComponent', () => {
  let component: Grid3SidebarLeftComponent;
  let fixture: ComponentFixture<Grid3SidebarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid3SidebarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid3SidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
