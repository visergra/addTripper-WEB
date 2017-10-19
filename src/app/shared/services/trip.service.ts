import { Trip } from './../models/trip.model';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TripService {
  private baseUrl = 'http://localhost:3000/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private trip: Trip;

  constructor(private http: Http) { }

  register(tripId: string, assistant: string): Observable<Trip> {
    return this.http.put(`${this.baseUrl}/trips/${tripId}/register`, JSON.stringify(assistant), this.options)
    .map((res: Response) => {
      return res.json();
    })
    .catch(this.handleError);
  }

  unregister(tripId: string, assistant: string): Observable<Trip> {
    return this.http.put(`${this.baseUrl}/trips/${tripId}/unregister`, JSON.stringify(assistant), this.options)
    .map((res: Response) => {
      return res.json();
    })
    .catch(this.handleError);
  }

  approve(tripId: string, assistant: string): Observable<Trip | string> {
    return this.http.put(`${this.baseUrl}/trips/${tripId}/approve`, JSON.stringify(assistant), this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  reject(tripId: string, assistant: string): Observable<Trip | string> {
    return this.http.put(`${this.baseUrl}/trips/${tripId}/reject`, JSON.stringify(assistant), this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  create(trip: Trip): Observable<Trip | string> {
    return this.http.post(`${this.baseUrl}/trips`, JSON.stringify(trip), this.options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  getTrips(lng: number, lat: number, date: Date): Observable<Array<Trip>> {
    return this.http.get(`${this.baseUrl}/trips/?lng=${lng}&lat=${lat}&startDate=${date}`, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  getTrip(tripId: string): Observable<Trip> {
    return this.http.get(`${this.baseUrl}/trips/${tripId}`, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  remove(tripId: string): Observable<string | Boolean> {
    return this.http.delete(`${this.baseUrl}/trips/${tripId}`, this.options)
    .map(res => res.status === 204)
    .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<string> {
    console.error(error);
    return Observable.throw(error.json().message);
  }

}
