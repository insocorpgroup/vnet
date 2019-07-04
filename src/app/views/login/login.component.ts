import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor (private router: Router, 
    private user: UserService) {
    this.goSignUp();
  }
  goSignUp() {
    this.user.getUser({ 'cedula': '123', 'password': '123' });
    this.router.navigate(['register']);
  }

  goDashboard() {
    this.router.navigate(['dashboard']);
  }
}
