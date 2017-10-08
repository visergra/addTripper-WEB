import { TripService } from './../../shared/services/trip.service';
import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/models/trip.model';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications-inbox',
  templateUrl: './applications-inbox.component.html',
  styleUrls: ['./applications-inbox.component.css']
})
export class ApplicationsInboxComponent implements OnInit {
  trips: Array<Trip> = [];
  error: string;
  private user: User;

  constructor(private userService: UserService, private tripService: TripService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.fetchTrips();
  }

  fetchTrips() {
    this.userService.getUserTrips().subscribe(
      trips => {
      this.trips =  _.filter(trips, {owner: {_id: this.user._id }})
      },
      (error) => { this.error = error; }
    );
  }

  approve(tripId, assistant) {
    this.tripService.approve(tripId, assistant).subscribe(
      (trip) => {
       // this.fetchTrips();
        location.reload();
      },
      (error) => { this.error = error; }
    );
  }

}
