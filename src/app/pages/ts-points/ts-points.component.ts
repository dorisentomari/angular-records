import {Component, OnInit} from '@angular/core';

import {EmojiDecorator, ConfirmDecorator} from './ts-decorator';

@Component({
  selector: 'app-ts-points',
  templateUrl: './ts-points.component.html',
  styleUrls: ['./ts-points.component.scss']
})
export class TsPointsComponent implements OnInit {

  @EmojiDecorator() public username: string;

  constructor() {
    this.username = 'jack';
  }

  ngOnInit(): void {
  }

  @ConfirmDecorator('您确认要执行吗？')
  userLogin() {
    console.log('user login');
  }

}
