import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleChild1Component } from './life-cycle-child1.component';

describe('LifeCycleChild1Component', () => {
  let component: LifeCycleChild1Component;
  let fixture: ComponentFixture<LifeCycleChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
