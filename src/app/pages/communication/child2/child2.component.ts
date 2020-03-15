import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../../../services/communication.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  public name: string;

  constructor(
    public communicationService: CommunicationService
  ) {
    this.name = '';
  }

  ngOnInit(): void {
    this.communicationService.eventBusService.subscribe(value => {
      this.name = value;
    });
  }

  updateName() {
    this.name = 'Child2 JACK';
  }

}
