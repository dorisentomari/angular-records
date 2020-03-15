import {Component, OnInit, ContentChild} from '@angular/core';

import {NgContent2Component} from '../ng-content2/ng-content2.component';

@Component({
  selector: 'app-ng-content1',
  templateUrl: './ng-content1.component.html',
  styleUrls: ['./ng-content1.component.scss']
})
export class NgContent1Component implements OnInit {

  @ContentChild(NgContent2Component)
  ngContent2: NgContent2Component;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit () {
    // 可以在这里调用投影的组件的方法
    console.log('this.ngContent2');
    console.log(this.ngContent2);
    console.log(this.ngContent2.name);
    console.log(this.ngContent2.getName());
  }

}
