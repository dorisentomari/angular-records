import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContent2Component } from './ng-content2.component';

describe('NgContent2Component', () => {
  let component: NgContent2Component;
  let fixture: ComponentFixture<NgContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
