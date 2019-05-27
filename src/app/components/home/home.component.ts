import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1300))
    ])
  ]
})
export class HomeComponent implements OnInit {

  adminUser: User;
  test: string;

  constructor(private router: Router) {
    this.adminUser = new User('admin@admin.pl', 'admin');
  }

  ngOnInit() {
  }

  loginUser(emailInput, passwordInput): void {
    if (emailInput.value === this.adminUser.email && passwordInput.value === this.adminUser.password) {
      this.router.navigate(['/main']);
    } else {
      console.log('not validated');
    }
  }

}
