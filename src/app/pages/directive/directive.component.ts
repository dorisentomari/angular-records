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

  public userList: Array<any>;

  constructor() {
    this.ngClass = 'orange';
    this.ngStyle = {
      color: 'orange'
    };
    this.ngIf = true;

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
