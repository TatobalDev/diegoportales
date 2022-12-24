import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer10Component } from './footer10.component';

describe('Footer10Component', () => {
  let component: Footer10Component;
  let fixture: ComponentFixture<Footer10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
