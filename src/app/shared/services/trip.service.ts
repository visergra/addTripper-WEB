import { Trip } from './../models/trip.model';
import { Location } from './../models/location.model';
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

  approve(tripId: string, assistant: string): Observable<Trip | string> {
    return this.http.put(`${this.baseUrl}/trips/${tripId}/approve`, JSON.stringify(assistant), this.options)
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

  getTrips(location: Location, date: Date): Observable<Array<Trip>> {
    return this.http.get(`${this.baseUrl}/trips/?lng=${location.coordinates[0]}&lat=${location.coordinates[1]}&startDate=${date}`, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<string> {
    console.error(error);
    return Observable.throw(error.json().message);
  }

}
