import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentForm1Component } from './comment-form1.component';

describe('CommentForm1Component', () => {
  let component: CommentForm1Component;
  let fixture: ComponentFixture<CommentForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
