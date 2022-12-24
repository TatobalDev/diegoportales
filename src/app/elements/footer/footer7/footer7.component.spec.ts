import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer7Component } from './footer7.component';

describe('Footer7Component', () => {
  let component: Footer7Component;
  let fixture: ComponentFixture<Footer7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
