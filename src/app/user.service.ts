import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { map } from 'rxjs/operators';
import { DataRequest } from './models/DataRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(model: any) {
    console.log('Hello')
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:6002/getuserbyid',
      JSON.stringify(model),
      { headers: headers })
      .pipe(map((response: DataRequest) => <DataRequest>response))
      .toPromise()
      .then((data: DataRequest) => {
        return data;
      }, (reason) => {
        return reason;
      })
  }
}
