import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesElement1Component } from './services-element1.component';

describe('ServicesElement1Component', () => {
  let component: ServicesElement1Component;
  let fixture: ComponentFixture<ServicesElement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesElement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesElement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
