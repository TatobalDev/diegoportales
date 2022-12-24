import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDark3Component } from './header-dark3.component';

describe('HeaderDark3Component', () => {
  let component: HeaderDark3Component;
  let fixture: ComponentFixture<HeaderDark3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDark3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDark3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
