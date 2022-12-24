import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcesDetailsComponent } from './cources-details.component';

describe('CourcesDetailsComponent', () => {
  let component: CourcesDetailsComponent;
  let fixture: ComponentFixture<CourcesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourcesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourcesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
