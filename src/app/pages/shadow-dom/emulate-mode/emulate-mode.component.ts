import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-emulate-mode',
  templateUrl: './emulate-mode.component.html',
  styleUrls: ['./emulate-mode.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulateModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
