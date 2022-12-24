import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonial4Component } from './testimonial4.component';

describe('Testimonial4Component', () => {
  let component: Testimonial4Component;
  let fixture: ComponentFixture<Testimonial4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonial4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonial4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
