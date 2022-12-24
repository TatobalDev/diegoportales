import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleDark2Component } from './header-style-dark2.component';

describe('HeaderStyleDark2Component', () => {
  let component: HeaderStyleDark2Component;
  let fixture: ComponentFixture<HeaderStyleDark2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStyleDark2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStyleDark2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
