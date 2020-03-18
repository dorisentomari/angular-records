import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  public today: Date;

  public username: string;

  public price: number;

  public discount: number;

  public slogan: string;

  public team: object;

  constructor() {
    this.today = new Date();

    this.username = 'Tom Hanks';

    this.price = 199;

    this.discount = 0.1;

    this.slogan = 'GO GO GO';

    this.team = {
      name: 'WILL',
      slogan: 'RUN RUN RUN'
    };
  }

  ngOnInit(): void {
  }

}
