import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: string;
  hideModal: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.hideModal = false;
  }

  onSubmitLogin(loginForm) {
    this.authService.login(this.user).subscribe(
      (user) => {
        this.hideModal = true;
        loginForm.reset();
        this.router.navigate(['/inbox']);
        location.reload();
      },
      (error) => { this.error = error; }
    );
  }

}
