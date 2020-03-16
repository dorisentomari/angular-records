import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Team} from './team';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  public slogans: Array<string>;

  public team: Team;

  constructor() {
    this.slogans = [
      'GO GO GO',
      'RUN RUN RUN',
      'HO HO HO'
    ];

    this.team = new Team(24, 'WILL', this.slogans[0]);

  }

  getTeamData() {
    console.log(this.team);
  }

  setTeamData() {
    this.team = new Team(24, 'MOMO', this.slogans[2]);
  }

  ngOnInit(): void {
  }

}
