import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageSidebarLeftComponent } from './large-image-sidebar-left.component';

describe('LargeImageSidebarLeftComponent', () => {
  let component: LargeImageSidebarLeftComponent;
  let fixture: ComponentFixture<LargeImageSidebarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeImageSidebarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeImageSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
