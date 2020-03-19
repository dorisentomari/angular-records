import {HttpHeaders} from '@angular/common/http';

export const environment = {
  production: true,
  baseUrl: 'http://localhost:3000/api',
  token: 'xxxxxxyyyyyyy',
  httpOptions: {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
};
