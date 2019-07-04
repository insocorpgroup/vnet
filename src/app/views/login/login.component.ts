import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor (private router: Router) {
  }
  goSignUp() {
    this.router.navigate(['register']);
  }

  goDashboard() {
    this.router.navigate(['dashboard']);
  }
}
