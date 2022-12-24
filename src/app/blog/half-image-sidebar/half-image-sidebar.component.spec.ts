import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfImageSidebarComponent } from './half-image-sidebar.component';

describe('HalfImageSidebarComponent', () => {
  let component: HalfImageSidebarComponent;
  let fixture: ComponentFixture<HalfImageSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfImageSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfImageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
