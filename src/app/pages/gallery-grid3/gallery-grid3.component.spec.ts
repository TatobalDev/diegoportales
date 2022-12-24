import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGrid3Component } from './gallery-grid3.component';

describe('GalleryGrid3Component', () => {
  let component: GalleryGrid3Component;
  let fixture: ComponentFixture<GalleryGrid3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryGrid3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryGrid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
