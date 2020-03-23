import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleChild2Component } from './life-cycle-child2.component';

describe('LifeCycleChild2Component', () => {
  let component: LifeCycleChild2Component;
  let fixture: ComponentFixture<LifeCycleChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
