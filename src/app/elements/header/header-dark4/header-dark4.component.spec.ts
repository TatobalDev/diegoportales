import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDark4Component } from './header-dark4.component';

describe('HeaderDark4Component', () => {
  let component: HeaderDark4Component;
  let fixture: ComponentFixture<HeaderDark4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDark4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDark4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
