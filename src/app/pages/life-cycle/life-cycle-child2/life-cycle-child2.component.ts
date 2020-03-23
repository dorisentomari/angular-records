import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-child2',
  templateUrl: './life-cycle-child2.component.html',
  styleUrls: ['./life-cycle-child2.component.scss']
})
export class LifeCycleChild2Component implements OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnChanges, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
    console.log('%c    1. child2  ngOnInit', 'color: white; background: black; padding: 2px;');
  }

  ngDoCheck() {
    console.log('%c    2. child2  ngDoCheck', 'color: white; background: blue; padding: 2px;');
  }

  ngAfterContentInit() {
    console.log('%c    3. child2  ngAfterContentInit', 'color: white; background: red; padding: 2px;');
  }

  ngAfterContentChecked() {
    console.log('%c    4. child2  ngAfterContentChecked', 'color: white; background: green; padding: 2px;');
  }

  ngAfterViewInit() {
    console.log('%c    5. child2  ngAfterViewInit', 'color: white; background: purple; padding: 2px;');
  }

  ngAfterViewChecked() {
    console.log('%c    6. child2  ngAfterViewChecked', 'color: white; background: #734800; padding: 2px;');
  }

  ngOnChanges() {
    console.log('%c    child2 ngOnChanges', 'color: white; background: #1600ff; padding: 2px;');
  }

  ngOnDestroy() {
    console.log('%c    child2 ngOnDestroy', 'color: white; background: #58004d; padding: 2px;');
  }


}
