import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleDark6Component } from './header-style-dark6.component';

describe('HeaderStyleDark6Component', () => {
  let component: HeaderStyleDark6Component;
  let fixture: ComponentFixture<HeaderStyleDark6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStyleDark6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStyleDark6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
