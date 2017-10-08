import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { CountriesService } from '../../shared/services/countries.service';
import { User } from '../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  error: string;
  countries: any;

  constructor(private authService: AuthService, private router: Router, private countriesService: CountriesService) {
   }

  ngOnInit() {
    this.countriesService.getCountries()
    .subscribe(res => this.countries = res);
  }

  onSubmitRegister(registerForm): void {
    console.log('user' + this.user);
    console.log('form' + registerForm);
    this.authService.register(this.user).subscribe(
      (user) => {
        registerForm.reset();
        this.router.navigate(['/home']);
        location.reload();
      },
      (error) => { this.error = error; }
    );
  }
}