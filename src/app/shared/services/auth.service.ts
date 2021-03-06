import { User } from './../models/user.model';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  private baseUrl = 'http://localhost:3000/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private user: User;

  constructor(private http: Http) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated(): boolean {
    return this.user ? true : false;
  }

  login(user: User): Observable<User | string> {
    const data: Object = {
      username: user.username,
      password: user.password
    };
    return this.http.post(`${this.baseUrl}/login`, JSON.stringify(data), this.options)
      .map((res: Response) => {
        this.authenticate(res.json());
        return this.user;
      })
      .catch(this.handleError);
  }

  register(user: User): Observable<User | string> {
    const data: Object = {
      username: user.username,
      password: user.password,
      name: user.name,
      firstname: user.firstname,
      nickname: user.nickname,
      country: user.country,
      about_you: user.about_you,
      profile_pic: user.profile_pic  
    };
    return this.http.post(`${this.baseUrl}/register`, JSON.stringify(data), this.options)
      .map((res: Response) => {
        this.authenticate(res.json());
        return this.user;
      })
      .catch(this.handleError);
  }

  logout(): Observable<boolean | string> {
    return this.http.post(`${this.baseUrl}/logout`, null, this.options)
      .map((res: Response) => {
        this.user = null;
        localStorage.removeItem('user');
        return res.status === 204;
      })
      .catch(this.handleError);
  }

  private authenticate(user: User): User {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    return this.user;
  }

  private handleError(error: Response | any): Observable<string> {
    console.error(error);
    return Observable.throw(error.json().message);
  }

}