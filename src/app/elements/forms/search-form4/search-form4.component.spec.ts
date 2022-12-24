import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForm4Component } from './search-form4.component';

describe('SearchForm4Component', () => {
  let component: SearchForm4Component;
  let fixture: ComponentFixture<SearchForm4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForm4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
