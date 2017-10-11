import { Pipe, ChangeDetectorRef, PipeTransform } from '@angular/core';
import * as moment from 'moment/moment';
const momentConstructor: (value?: any) => moment.Moment = (<any>moment).default || moment;

@Pipe({
  name: 'amDifference'
})
export class AmDifferencePipe implements PipeTransform {

  transform(value: Date | moment.Moment,
    otherValue: Date | moment.Moment,
    unit?: moment.unitOfTime.Diff,
    precision?: boolean): number {

    let date = momentConstructor(value);
    let date2 = (otherValue !== null) ? momentConstructor(otherValue) : momentConstructor();

    return Math.ceil(date.diff(date2, unit, precision));
  }
}