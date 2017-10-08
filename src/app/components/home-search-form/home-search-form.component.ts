import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { TripFinder } from '../../shared/models/trip-finder.model';

@Component({
  selector: 'app-home-search-form',
  templateUrl: './home-search-form.component.html',
  styleUrls: ['./home-search-form.component.css']
})
export class HomeSearchFormComponent implements OnInit {
 finder: TripFinder = new TripFinder(); 
    constructor() { }
  

  ngOnInit() {
   }
   onTripDateChange(date: Date) {
     console.log(date);
     this.finder.date = date;
  }

  onTripLocationChange(location: string){
    console.log(location);
  }
  
  
  

  onSubmitSearchTrip(searchForm): void {
 
    console.log('form' + searchForm);

  }

}
