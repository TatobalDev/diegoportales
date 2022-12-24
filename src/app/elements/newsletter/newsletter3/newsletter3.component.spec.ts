import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsletter3Component } from './newsletter3.component';

describe('Newsletter3Component', () => {
  let component: Newsletter3Component;
  let fixture: ComponentFixture<Newsletter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newsletter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newsletter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
