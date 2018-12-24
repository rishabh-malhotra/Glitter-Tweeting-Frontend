import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private http:HttpClient) { }

  getFollowers(userId:String){
    //const UsersObject = Object.assign({}, {UserID});
    return this.http.get(`${environment.apiUrl}/user/followers/${userId}`);
  }
  
}
