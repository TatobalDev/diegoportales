import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle11Component } from './footer-style11.component';

describe('FooterStyle11Component', () => {
  let component: FooterStyle11Component;
  let fixture: ComponentFixture<FooterStyle11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStyle11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStyle11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
