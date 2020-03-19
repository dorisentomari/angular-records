import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  public ngClass: string;

  public ngStyle: object;

  public ngIf: boolean;

  public ngSwitch: string;

  public ngNonBindable: string;

  public userList: Array<any>;

  public color: string;

  constructor() {
    this.ngClass = 'orange';
    this.ngStyle = {
      color: 'orange'
    };
    this.ngIf = true;

    this.ngSwitch = 'B';

    this.userList = [
      {
        id: 1,
        name: 'jack'
      },
      {
        id: 2,
        name: 'tom'
      }
    ];

    this.ngNonBindable = 'hello, 这个是 ngNonBindable 变量';

  }

  ngOnInit(): void {
  }

  updateNgClassBlue() {
    this.ngClass = 'blue';
  }

  updateNgClassRed() {
    this.ngClass = 'red';
  }

  updateNgStyleBlue() {
    this.ngStyle = {
      color: 'blue'
    };
  }

  updateNgStyleRed() {
    this.ngStyle = {
      color: 'red'
    };
  }

  updateNgIf() {
    this.ngIf = !this.ngIf;
  }

  getNgForItem(item) {
    console.log(item);
  }

}
