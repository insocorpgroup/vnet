import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})



export class LoginComponent {

  ValueUser: any;


  constructor(private router: Router,
    private user: UserService) {
    // this.goSignUp();
  }
  goSignUp() {


    console.log('getUserImplement')
    console.log(this.ValueUser)
    this.user.getUser({ 'id': this.ValueUser })
      .then(data => {
        if (data.state == 1) {

        } else {
          this.router.navigate(['register']);
        }
      });


  }

  goLog() {


    console.log('getUserImplement')
    console.log(this.ValueUser)
    if (this.ValueUser == undefined || this.ValueUser == '') {
      console.log('Try in the other side')
    } else {
      this.user.getUser({ 'id': this.ValueUser })
        .then(data => {
          if (data.state == 1) {
            this.router.navigate(['dashboard']);
          } else {

          }
        });

    }


  }

  goDashboard() {
    this.router.navigate(['dashboard']);
  }
}
