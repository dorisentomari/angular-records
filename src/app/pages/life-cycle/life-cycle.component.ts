import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnChanges,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnChanges, OnDestroy {

  public username: string;

  public parentUsername: string;

  public parentUserAge: number;

  constructor() {
  }

  ngOnInit(): void {
    console.log('%c1. parent  ngOnInit', 'color: white; background: black; padding: 2px;');
  }

  ngDoCheck() {
    console.log('%c2. parent  ngDoCheck', 'color: white; background: blue; padding: 2px;');
  }

  ngAfterContentInit() {
    console.log('%c3. parent  ngAfterContentInit', 'color: white; background: red; padding: 2px;');
  }

  ngAfterContentChecked() {
    console.log('%c4. parent  ngAfterContentChecked', 'color: white; background: green; padding: 2px;');
  }

  ngAfterViewInit() {
    console.log('%c5. parent  ngAfterViewInit', 'color: white; background: purple; padding: 2px;');
  }

  ngAfterViewChecked() {
    console.log('%c6. parent  ngAfterViewChecked', 'color: white; background: #734800; padding: 2px;');
  }

  ngOnChanges() {
    console.log('%cparent ngOnChanges', 'color: white; background: #1600ff; padding: 2px;');
  }

  ngOnDestroy() {
    console.log('%cparent ngOnDestroy', 'color: white; background: #58004d; padding: 2px;');
  }

}
