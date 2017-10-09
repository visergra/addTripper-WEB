import { Component, ViewChild, ElementRef, NgZone, OnInit, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { Location } from '../../shared/models/location.model';

@Component({
  selector: 'app-autocomplete-places',
  templateUrl: './autocomplete-places.component.html',
  styleUrls: ['./autocomplete-places.component.css']
})
export class AutocompletePlacesComponent implements OnInit {
  @ViewChild('search') public searchElement: ElementRef;
  location: Location = new Location();
  address: string;

  @Output() onChange: EventEmitter<Object> =  new EventEmitter<Object>();
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: []});
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.location.address = place.formatted_address;
            this.location.type = "Point";
            this.location.coordinates = [];
            this.location.coordinates.push(Number(place.geometry.location.lng()));
            this.location.coordinates.push(place.geometry.location.lat());
            this.onChangeLocation();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
        });
      }
    )
  }

  onChangeLocation() {
    console.log(this.location);
    this.onChange.emit(this.location);
  }

}
