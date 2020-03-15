import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContent3Component } from './ng-content3.component';

describe('NgContent3Component', () => {
  let component: NgContent3Component;
  let fixture: ComponentFixture<NgContent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
