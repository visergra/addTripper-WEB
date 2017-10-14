import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/models/trip.model';
import { User } from '../../shared/models/user.model';
import { TripService } from '../../shared/services/trip.service';
import { UserService } from '../../shared/services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
tripId: string;
trip: Trip = new Trip();
error: string;
status: string;
private user: User;

constructor(private userService: UserService, private tripService: TripService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(Params => {
      this.tripId = Params['id'];
      this.getTrip();
      this.user = JSON.parse(localStorage.getItem('user'));
      this.status = ( _.find(this.trip.applications, { "assistant": { "_id": this.user._id}})) || 'OPEN';
      console.log( _.find(this.trip.applications, { "assistant": { "_id": this.user._id}}));
     ;
    });
  }

  getTrip(): void {
    this.tripService.getTrip(this.tripId).subscribe(
      trip => {
        this.trip = trip;
        console.log(trip);
        // searchForm.reset();
      },
      (error) => { this.error = error; }
    );
  }

  register(tripId, assistant) {
    this.tripService.approve(tripId, assistant).subscribe(
      (trip) => {
       this.trip = trip;
      },
      (error) => { this.error = error; }
    );
  }

}



