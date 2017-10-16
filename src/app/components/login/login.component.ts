import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import * as $ from 'jquery';

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
        $('#loginModal').removeClass('modal fade in');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $("#loginModal").on('hidden.bs.modal', function () {
          $(this).data('bs.modal', null);
      });
        loginForm.reset();
        this.router.navigate(['/trips']);
        
      },
      (error) => { this.error = error; }
    );
  }

}
