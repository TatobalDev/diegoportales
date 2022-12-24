import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments1Component } from './comments1.component';

describe('Comments1Component', () => {
  let component: Comments1Component;
  let fixture: ComponentFixture<Comments1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comments1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comments1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
