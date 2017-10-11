import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/models/trip.model';
import { TripService } from '../../shared/services/trip.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {TruncatePipe} from '../../pipes/truncate.pipe';
import {AmDifferencePipe} from '../../pipes/am-difference.pipe';

@Component({
  selector: 'app-trip-search-list',
  templateUrl: './trip-search-list.component.html',
  styleUrls: ['./trip-search-list.component.css']
})
export class TripSearchListComponent implements OnInit {
  lng: number;
  lat: number;
  startDate: number;
  trips: Array<Trip> = [];
  error: string;

  constructor(private tripService: TripService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.lng = Number(queryParams['lng']);
      this.lat = Number(queryParams['lat']);
      this.startDate = Number(queryParams['startDate']);
      this.onSubmitSearchTrip()
    });
    
  }

  onSubmitSearchTrip(): void {
    this.tripService.getTrips(this.lng, this.lat, new Date(this.startDate)).subscribe(
      trips => {
        this.trips = trips;
        console.log(trips);
        // searchForm.reset();
      },
      (error) => { this.error = error; }
    );
  }



}

