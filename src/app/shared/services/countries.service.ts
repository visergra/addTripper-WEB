import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountriesService {

  constructor(private http:Http) { }

  getCountries() {
    return this.http.request('../../../assets/data-countries/countries.json')
                 .map(res => res.json());
  }
}
