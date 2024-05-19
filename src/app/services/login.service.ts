import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { CompleteUserModel } from '../models/complete-user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public login(user: LoginModel): Observable<CompleteUserModel> {
    return this.http.post<CompleteUserModel>(`${this.URL}/professor/login`, user);
  }
}
