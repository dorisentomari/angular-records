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
  selector: 'app-life-cycle-child1',
  templateUrl: './life-cycle-child1.component.html',
  styleUrls: ['./life-cycle-child1.component.scss']
})
export class LifeCycleChild1Component implements OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnChanges, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
    console.log('%c    1. child1  ngOnInit', 'color: white; background: black; padding: 2px;');
  }

  ngDoCheck() {
    console.log('%c    2. child1  ngDoCheck', 'color: white; background: blue; padding: 2px;');
  }

  ngAfterContentInit() {
    console.log('%c    3. child1  ngAfterContentInit', 'color: white; background: red; padding: 2px;');
  }

  ngAfterContentChecked() {
    console.log('%c    4. child1  ngAfterContentChecked', 'color: white; background: green; padding: 2px;');
  }

  ngAfterViewInit() {
    console.log('%c    5. child1  ngAfterViewInit', 'color: white; background: purple; padding: 2px;');
  }

  ngAfterViewChecked() {
    console.log('%c    6. child1  ngAfterViewChecked', 'color: white; background: #734800; padding: 2px;');
  }

  ngOnChanges() {
    console.log('%c    child1 ngOnChanges', 'color: white; background: #1600ff; padding: 2px;');
  }

  ngOnDestroy() {
    console.log('%c    child1 ngOnDestroy', 'color: white; background: #58004d; padding: 2px;');
  }

}
