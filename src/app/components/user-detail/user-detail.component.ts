import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
userId: string;
user: User = new User();
error: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(Params => {
      this.userId = Params['id'];
      this.getUser();
    });
  }

  getUser(): void {
    this.userService.getUser(this.userId).subscribe(
      user => {
        this.user = user;
      },
      (error) => { this.error = error; }
    );
  }
}
