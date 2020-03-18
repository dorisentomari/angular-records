import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-dirty-check',
  templateUrl: './dirty-check.component.html',
  styleUrls: ['./dirty-check.component.scss']
})
export class DirtyCheckComponent implements OnInit {

  public pTitle: string;

  constructor(
    private ngZone: NgZone
  ) {
    this.pTitle = 'Hello Angular';
    console.log(ngZone);
  }

  ngOnInit(): void {
  }

  public get title() {
    console.log('title 脏值检测');
    return this.pTitle;
  }

  ngAfterViewCheck() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.pTitle = 'Hello Angular ByeBye';
      });
    });
  }

}
