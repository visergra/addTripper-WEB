import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/models/trip.model';
import { User } from '../../shared/models/user.model';
import { Application } from '../../shared/models/application.model';
import { TripService } from '../../shared/services/trip.service';
import { UserService } from '../../shared/services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent implements OnInit {
  tripId: string;
  trip: Trip = new Trip();
  application: Application = new Application;
  error: string;
  status: string;
  private user: User;

  constructor(private userService: UserService, private tripService: TripService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.activatedRoute.params.subscribe(Params => {
      this.tripId = Params['id'];
      this.getTrip();
    });
  }

  getTrip(): void {
    this.tripService.getTrip(this.tripId).subscribe(
      trip => {
        this.trip = trip;
      },
      (error) => { this.error = error; }
    );
  }

}
