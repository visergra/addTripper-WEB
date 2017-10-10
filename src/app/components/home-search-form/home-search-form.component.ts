import { Component, NgZone, OnInit} from '@angular/core';
import { Location } from '../../shared/models/location.model';
import { Trip } from '../../shared/models/trip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search-form',
  templateUrl: './home-search-form.component.html',
  styleUrls: ['./home-search-form.component.css']
})
export class HomeSearchFormComponent implements OnInit {
  location: Location = new Location();
  startTime: Date;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  onTripDateChange(date: string) {
    this.startTime = this.toDate(date);
  }

  onTripLocationChange(location: Location) {
    this.location = location;
  }

  onSubmitSearchTrip(searchForm): void {
    this.router.navigate(['/trips/search'], { queryParams: { lng: this.location.coordinates[0], lat: this.location.coordinates[1], startDate: this.startTime.getTime()}});
  }


  toDate(date: string): any {
    let jsonDate = JSON.parse(JSON.stringify(date));
    return new Date(jsonDate['year'] + '-' + jsonDate['month'] + '-' + jsonDate['day'])
  }

}
