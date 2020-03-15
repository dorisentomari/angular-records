import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface UserInterface {
  name: string;
  age: number;
}

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  public user: UserInterface;
  public url: string;
  public httpOptions: object;

  constructor(
    public http: HttpClient
  ) {
    this.http = http;
    this.user = {
      name: null,
      age: null
    };
    this.url = 'http://localhost:3000/api/user';
    this.httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  }

  ngOnInit(): void {
  }

  getUserInfo() {
    return this.http.get<UserInterface>(this.url).subscribe(res => {
      this.user = res;
    });
  }

  updateUserInfo() {
    this.http.post<UserInterface>(this.url, {name: 'tom'}, this.httpOptions).subscribe(res => {
      this.user = res;
    });
  }

}
