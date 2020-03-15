import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../../services/communication.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  public name: string;

  constructor(
    public communicationService: CommunicationService
  ) {
    this.name = 'PARENT JACK';
  }

  ngOnInit(): void {
  }

  public transferValue2Child2() {
    this.communicationService.eventBusService.next(this.name);
  }

}
