import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-general',
  templateUrl: './header-general.component.html',
  styleUrls: ['./header-general.component.css']
})
export class HeaderGeneralComponent implements OnInit {

  isAuthenticated: boolean;
  error: string;

  constructor(private authService: AuthService, private router: Router) { }
  
    ngOnInit() {
      this.isAuthenticated = this.authService.isAuthenticated();
    }
  
    logout() {
      this.authService.logout().subscribe(
        (ok) => { this.router.navigate(['/']); },
        (error) => { this.error = error; },
      );
  
    }
  }
  