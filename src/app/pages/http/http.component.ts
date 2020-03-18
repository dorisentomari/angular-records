import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserInterface} from '../../types';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  public user: UserInterface;

  public newName: string;

  constructor(
    private userService: UserService
  ) {

    this.user = {
      name: null,
      age: null
    };
    this.userService = userService;
  }

  ngOnInit(): void {
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(res => {
      this.user = res;
    });
  }

  updateUserInfo() {
    const updateInfo: object = {
      name: this.newName
    };
    this.userService.updateUserInfo(updateInfo).subscribe(res => {
      this.user = res;
    });
  }

}
