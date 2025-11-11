import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(payload: IUserLogin) {
    return this.http.post<any>(
      'http://alpha-xten.com:8080/api/v1/test_login/',
      payload
    );
  }
}
