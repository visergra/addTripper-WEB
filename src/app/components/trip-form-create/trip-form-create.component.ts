import { Router } from '@angular/router';
import { Trip } from '../../shared/models/trip.model';
import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { Location } from '../../shared/models/location.model';
import { User } from '../../shared/models/user.model';
import { TripService } from '../../shared/services/trip.service';

@Component({
  selector: 'app-trip-form-create',
  templateUrl: './trip-form-create.component.html',
  styleUrls: ['./trip-form-create.component.css']
})
export class TripFormCreateComponent implements OnInit {
  trip: Trip = new Trip();
  location: Location = new Location();
  error: string;
  private user: User;
  startTime: string;
  finishTime: string;

  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onTripStartDateChange(date: string) {
     this.trip.start_datetime = this.toDate(date);
  }

  onTripFinishDateChange(date: string) {
    this.trip.finish_datetime = this.toDate(date);
  }

  onTripLocationChange(location: Location) {
    this.location = location;
    this.location.type = "Point";
  }

  onSubmitTrip(tripForm) {
    let jsonStartTime = JSON.parse(JSON.stringify(this.startTime));
    let jsonFinishTime = JSON.parse(JSON.stringify(this.finishTime));
    this.trip.location = this.location;
    this.trip.owner = this.user._id;
    this.trip.start_datetime.setUTCHours(jsonStartTime.hour, jsonStartTime.minute );
    this.trip.finish_datetime.setUTCHours(jsonFinishTime.hour, jsonFinishTime.minute );
    this.tripService.create(this.trip).subscribe(
      (trip) => {
        tripForm.reset();
        this.router.navigate(['/trips']);
      },
      (error) => { this.error = error; }
    );
  }

  toDate(date: string): any {
    let jsonDate = JSON.parse(JSON.stringify(date));
    return new Date(jsonDate['year'] + '-' + jsonDate['month'] + '-' + jsonDate['day'])
  }

}
