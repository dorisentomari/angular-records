import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleChild3Component } from './life-cycle-child3.component';

describe('LifeCycleChild3Component', () => {
  let component: LifeCycleChild3Component;
  let fixture: ComponentFixture<LifeCycleChild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleChild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
