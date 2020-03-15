import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log('%cngOnInit', 'font-size: 18px');
  }

  ngDoCheck() {
    console.log('%cngDoCheck', 'color:blue;');
  }

  ngAfterContentInit() {
    console.log('%cngAfterContentInit', 'color:green;');
  }

  ngAfterContentChecked() {
    console.log('%cngAfterContentChecked', 'color:aqua;');
  }

  ngAfterViewInit() {
    console.log('%cngAfterViewInit', 'color:black;');
  }

  ngAfterViewChecked() {
    console.log('%cngAfterViewChecked', 'color:purple;');
  }

  ngOnChanges() {
    console.log('%cngOnChanges', 'color:red;');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
