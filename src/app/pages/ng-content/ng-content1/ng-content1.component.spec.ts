import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContent1Component } from './ng-content1.component';

describe('NgContent1Component', () => {
  let component: NgContent1Component;
  let fixture: ComponentFixture<NgContent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
