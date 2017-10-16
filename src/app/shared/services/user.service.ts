import { Trip } from './../models/trip.model';
import { User } from './../models/user.model';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:3000/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private trip: Trip;
  private user: User;

  constructor( private http: Http ) { 
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getUserTrips(): Observable<Array<Trip>> {
    return this.http.get(`${this.baseUrl}/users/${this.user._id}/trips`, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/users/${this.user._id}`, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<string> {
    console.error(error);
    return Observable.throw(error.json().message);
  }
}
