import { TripService } from './../../shared/services/trip.service';
import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/models/trip.model';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications-outbox',
  templateUrl: './applications-outbox.component.html',
  styleUrls: ['./applications-outbox.component.css']
})
export class ApplicationsOutboxComponent implements OnInit {
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
      this.trips =  _.filter(trips, {applications: [{assistant: { _id: this.user._id }}]})
      },
      (error) => { this.error = error; }
    );
  }

}
