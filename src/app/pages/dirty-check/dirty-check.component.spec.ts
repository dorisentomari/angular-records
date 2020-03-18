import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyCheckComponent } from './dirty-check.component';

describe('DirtyCheckComponent', () => {
  let component: DirtyCheckComponent;
  let fixture: ComponentFixture<DirtyCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirtyCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
