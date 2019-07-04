import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(model: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://ulpcmpv-insocorp.mybluemix.net/getuserbyid',
      JSON.stringify(model),
      { headers: headers })
      .pipe(map(data => { console.log(data); }));
      // .map((response: User) => <User>response)
      // .toPromise()
      // .then((data: User) => {
      //   return data;
      // }, (reason) => {
      //   return reason;
      // });
  }
}
