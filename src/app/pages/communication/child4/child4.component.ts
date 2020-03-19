import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss']
})
export class Child4Component implements OnInit {


  @Output() getUserNameOutput: EventEmitter<string> = new EventEmitter();
  public username: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  getUserName() {
    this.getUserNameOutput.emit(this.username);
  }


}
