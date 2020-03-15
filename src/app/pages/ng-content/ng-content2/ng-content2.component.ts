import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-content2',
  templateUrl: './ng-content2.component.html',
  styleUrls: ['./ng-content2.component.scss']
})
export class NgContent2Component implements OnInit {

  public name: string;

  constructor() {
    this.name = 'ng content 2 name is jacky';
  }

  ngOnInit(): void {
  }

  getName() {
    return this.name;
  }

}
