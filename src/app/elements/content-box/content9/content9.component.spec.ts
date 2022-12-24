import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content9Component } from './content9.component';

describe('Content9Component', () => {
  let component: Content9Component;
  let fixture: ComponentFixture<Content9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
