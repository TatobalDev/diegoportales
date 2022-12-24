import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle8Component } from './footer-style8.component';

describe('FooterStyle8Component', () => {
  let component: FooterStyle8Component;
  let fixture: ComponentFixture<FooterStyle8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStyle8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStyle8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
