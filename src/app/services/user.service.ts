import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';
import { UserInterface } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: UserInterface;

  constructor(
    public http: HttpClient
  ) {
    this.http = http;
    this.user = {
      name: null,
      age: null
    };
  }

  getUserInfo(): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${environment.baseUrl}/user`);
  }

  updateUserInfo(updateInfo: object = {}): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${environment.baseUrl}/user`, updateInfo, environment.httpOptions);
  }
}
