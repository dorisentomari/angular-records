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
  selector: 'app-life-cycle-child3',
  templateUrl: './life-cycle-child3.component.html',
  styleUrls: ['./life-cycle-child3.component.scss']
})
export class LifeCycleChild3Component implements OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnChanges, OnDestroy {

  public username: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log('%c    1. child3  ngOnInit', 'color: white; background: black; padding: 2px;');
  }

  ngDoCheck() {
    console.log('%c    2. child3  ngDoCheck', 'color: white; background: blue; padding: 2px;');
  }

  ngAfterContentInit() {
    console.log('%c    3. child3  ngAfterContentInit', 'color: white; background: red; padding: 2px;');
  }

  ngAfterContentChecked() {
    console.log('%c    4. child3  ngAfterContentChecked', 'color: white; background: green; padding: 2px;');
  }

  ngAfterViewInit() {
    console.log('%c    5. child3  ngAfterViewInit', 'color: white; background: purple; padding: 2px;');
  }

  ngAfterViewChecked() {
    console.log('%c    6. child3  ngAfterViewChecked', 'color: white; background: #734800; padding: 2px;');
  }

  ngOnChanges() {
    console.log('%c    child3 ngOnChanges', 'color: white; background: #1600ff; padding: 2px;');
  }

  ngOnDestroy() {
    console.log('%c    child3 ngOnDestroy', 'color: white; background: #58004d; padding: 2px;');
  }


}
