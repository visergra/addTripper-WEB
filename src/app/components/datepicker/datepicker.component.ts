import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  date: string;
  @Output() onChange: EventEmitter<string> =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChangeDate() {
    console.log(this.date);
    this.onChange.emit(this.date);
  }

}
