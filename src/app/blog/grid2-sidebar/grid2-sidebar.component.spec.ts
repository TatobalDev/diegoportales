import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid2SidebarComponent } from './grid2-sidebar.component';

describe('Grid2SidebarComponent', () => {
  let component: Grid2SidebarComponent;
  let fixture: ComponentFixture<Grid2SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid2SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid2SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
