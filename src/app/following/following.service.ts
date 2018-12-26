import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {

  constructor(private http:HttpClient) { }
  getFollowing(userId:string){
    return this.http.get(`${environment.apiUrl}/user/following/${userId}`);
  }
}
