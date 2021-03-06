import { Location } from '../models/location.model';
import { Application } from '../models/application.model';

export class Trip {
    _id: string;
    name: string;
    start_datetime: Date;
    finish_datetime: Date;
    description: string;
    owner: string;
    open_registration: true;
    max_assistants: number;
    estimated_budget: number;
    applications: Array<Application>;
    location: Location = {} as Location;
}