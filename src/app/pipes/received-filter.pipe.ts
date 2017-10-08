import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { User } from '../shared/models/user.model';

@Pipe({
  name: 'receivedFilter',
  pure: true
})
export class ReceivedFilterPipe implements PipeTransform {

  private user: User;
  
      transform(trips: Array<Trip>): Array<Trip> {
          if (!trips) {
              return [];
          }
  
          this.user = JSON.parse(localStorage.getItem('user'));
          console.log(trips);
          console.log(this.user._id);
          return trips.filter(trip => trip.owner == this.user._id);
  
      }
  }