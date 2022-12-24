import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageSidebarComponent } from './large-image-sidebar.component';

describe('LargeImageSidebarComponent', () => {
  let component: LargeImageSidebarComponent;
  let fixture: ComponentFixture<LargeImageSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeImageSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeImageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
