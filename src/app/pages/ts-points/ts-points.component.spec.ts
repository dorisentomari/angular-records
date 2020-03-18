import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsPointsComponent } from './ts-points.component';

describe('TsPointsComponent', () => {
  let component: TsPointsComponent;
  let fixture: ComponentFixture<TsPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
