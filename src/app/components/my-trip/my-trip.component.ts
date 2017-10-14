import { TripService } from './../../shared/services/trip.service';
import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/models/trip.model';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-trip',
  templateUrl: './my-trip.component.html',
  styleUrls: ['./my-trip.component.css']
})
export class MyTripComponent implements OnInit {
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
  
}
