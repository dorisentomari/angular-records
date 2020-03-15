import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  public name: string;

  private age: number;

  constructor() {
    this.name = 'public Child3 TOM';
    this.age = 18;
  }

  ngOnInit(): void {
  }

  getChildInfo() {
    console.log(this.name, this.age);
  }

}
