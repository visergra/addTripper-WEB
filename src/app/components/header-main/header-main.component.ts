import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

  isAuthenticated: boolean;
  error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout().subscribe(
      (ok) => { 
        localStorage.removeItem('user');
        this.router.navigate(['/home']); },
      (error) => { this.error = error; },
    );

  }
}
