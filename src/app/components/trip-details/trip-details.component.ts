import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/models/trip.model';
import { User } from '../../shared/models/user.model';
import { Application } from '../../shared/models/application.model';
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
application: Application = new Application;
error: string;
status: string;
private user: User;
indexApplication: number;
classesDelete: Array<string> = ['fa', 'fa-3x', 'fa-times-circle-o', 'icon-disabled', 'light'];
classesAdd: Array<string> = ['fa', 'fa-3x', 'fa-check-circle-o', 'icon-disabled', 'light'];
userID: string = 'funciona';

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
        this.getApplicationStatus();
      },
      (error) => { this.error = error; }
    );
  }

  getApplicationStatus(){
    this.indexApplication = _.findIndex(this.trip.applications, {assistant: {_id: this.user._id }});
    if (this.indexApplication!=-1){
    this.status = (this.trip.applications[this.indexApplication].status)} else { this.status = 'NOADD'}
    this.classesDelete = ['fa', 'fa-3x', 'fa-times-circle-o', 'icon-disabled', 'light'];
    this.classesAdd = ['fa', 'fa-3x', 'fa-check-circle-o', 'icon-disabled', 'light'];
    this.classesDelete.push('del'+this.status); 
    this.classesAdd.push('add'+this.status); 
  }

  register(tripId, assistant): void {
    this.tripService.register(tripId, assistant).subscribe(
      (trip) => {
       this.trip = trip;
       this.getApplicationStatus();
      },
      (error) => { this.error = error; }
    );
  }

  unregister(tripId, assistant): void {
    this.tripService.unregister(tripId, assistant).subscribe(
      (trip) => {
       this.trip = trip;
       this.getApplicationStatus();
      },
      (error) => { this.error = error; }
    );
  }

}



