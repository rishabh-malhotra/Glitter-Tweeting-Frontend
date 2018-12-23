import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private http:HttpClient) { }

  getFollowers(UserID:String){
    const UsersObject = Object.assign({}, {UserID});
    return this.http.post(`${environment.apiUrl}/user/followers`,UsersObject);
  }
  
}
