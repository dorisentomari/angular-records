import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public eventBusService: Subject<string>;

  constructor() {
    this.eventBusService = new Subject<string>();
  }
}
