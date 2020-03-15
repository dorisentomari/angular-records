import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-shadow-dom-mode',
  templateUrl: './shadow-dom-mode.component.html',
  styleUrls: ['./shadow-dom-mode.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
