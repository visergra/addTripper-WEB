import { UserService } from './shared/services/user.service';
import { TripService } from './shared/services/trip.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPickerModule } from 'angular2-countrypicker';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

import { AppComponent } from './app.component';

import './rxjs.operators';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { AutocompletePlacesComponent } from './components/autocomplete-places/autocomplete-places.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { HomeSearchFormComponent } from './components/home-search-form/home-search-form.component';
import { BodyMainComponent } from './components/body-main/body-main.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './shared/services/auth.service';
import { CountriesService } from './shared/services/countries.service';
import { HeaderGeneralComponent } from './components/header-general/header-general.component';
import { InboxPageComponent } from './components/inbox-page/inbox-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ApplicationsInboxComponent } from './components/applications-inbox/applications-inbox.component';
import { ApplicationsOutboxComponent } from './components/applications-outbox/applications-outbox.component';
import { OutboxPageComponent } from './components/outbox-page/outbox-page.component';
import { ReceivedFilterPipe } from './pipes/received-filter.pipe';
import { TripCreatePageComponent } from './components/trip-create-page/trip-create-page.component';
import { TripFormCreateComponent } from './components/trip-form-create/trip-form-create.component';
import { TripSearchListComponent } from './components/trip-search-list/trip-search-list.component';
import { TripSearchListPageComponent } from './components/trip-search-list-page/trip-search-list-page.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AmDifferencePipe } from './pipes/am-difference.pipe';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { TripDetailsPageComponent } from './components/trip-details-page/trip-details-page.component';
import { MyTripsPageComponent } from './components/my-trips-page/my-trips-page.component';
import { MyTripComponent } from './components/my-trip/my-trip.component';
import { TripEditComponent } from './components/trip-edit/trip-edit.component';
import { TripEditPageComponent } from './components/trip-edit-page/trip-edit-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inbox', component: InboxPageComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'outbox', component: OutboxPageComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'trips/new', component: TripCreatePageComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'trips/search', component: TripSearchListPageComponent },
  {
    path: 'trips/:id',
    children: [
      { path: '', component: TripDetailsPageComponent },
      { path: 'edit', component: TripEditPageComponent }
    ], canActivate: [IsAuthenticatedGuard]
  },
  { path: 'trips', component: MyTripsPageComponent, canActivate: [IsAuthenticatedGuard] },
  {
    path: 'users/:id',
    children: [
      { path: '', component: UserDetailPageComponent },
      { path: 'edit', component: UserDetailPageComponent }
    ], canActivate: [IsAuthenticatedGuard]
  },
  { path: 'trips', component: MyTripsPageComponent, canActivate: [IsAuthenticatedGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    AutocompletePlacesComponent,
    DatepickerComponent,
    HomeSearchFormComponent,
    BodyMainComponent,
    FooterMainComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderGeneralComponent,
    InboxPageComponent,
    NavBarComponent,
    ApplicationsInboxComponent,
    ApplicationsOutboxComponent,
    OutboxPageComponent,
    ReceivedFilterPipe,
    TripCreatePageComponent,
    TripFormCreateComponent,
    TripSearchListComponent,
    TripSearchListPageComponent,
    TruncatePipe,
    AmDifferencePipe,
    TripDetailsComponent,
    TripDetailsPageComponent,
    MyTripsPageComponent,
    MyTripComponent,
    TripEditComponent,
    TripEditPageComponent,
    UserDetailComponent,
    UserDetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CountryPickerModule.forRoot({
      baseUrl: ('../assets/data-countries/')
    }),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByZbe-eAAo1z0ZeRQkK8iVtFrJK_uzcCo',
      libraries: ['places']
    })
  ],
  providers: [
    AuthService,
    CountriesService,
    IsAuthenticatedGuard,
    TripService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
