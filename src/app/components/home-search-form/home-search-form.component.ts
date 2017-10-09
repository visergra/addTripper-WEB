import { Component, NgZone, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '../../shared/models/location.model';
import { Trip } from '../../shared/models/trip.model';
import { TripService } from '../../shared/services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search-form',
  templateUrl: './home-search-form.component.html',
  styleUrls: ['./home-search-form.component.css']
})
export class HomeSearchFormComponent implements OnInit {
  trips: Array<Trip> = [];
  location: Location = new Location();
  error: string;
  startTime: Date;

  @Output() onSearch: EventEmitter<Object> =  new EventEmitter<Object>();

  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
  }

  onTripDateChange(date: string) {
    this.startTime = this.toDate(date);
  }

  onTripLocationChange(location: Location) {
    this.location = location;
  }

  onSubmitSearchTrip(searchForm): void {
    this.tripService.getTrips(this.location,this.startTime).subscribe(
      trips => {
      this.trips = trips;
      console.log(trips);
      searchForm.reset();
      this.router.navigate(['/trips/search']);
      },
      (error) => { this.error = error; }
    );
  }

  toDate(date: string): any {
    let jsonDate = JSON.parse(JSON.stringify(date));
    return new Date(jsonDate['year'] + '-' + jsonDate['month'] + '-' + jsonDate['day'])
  }

}
