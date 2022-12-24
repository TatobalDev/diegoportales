import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGrid4Component } from './gallery-grid4.component';

describe('GalleryGrid4Component', () => {
  let component: GalleryGrid4Component;
  let fixture: ComponentFixture<GalleryGrid4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryGrid4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryGrid4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
