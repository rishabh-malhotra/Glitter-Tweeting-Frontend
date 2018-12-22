import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  constructor(private http:HttpClient) {}

    composeTweet(UserID:String,Message:String) {
      const newTweetObject = Object.assign({}, {UserID,Message});
      return this.http.post(`${environment.apiUrl}/user/newTweet`, newTweetObject);
    }

    yourTweets(){
      return this.http.get(`${environment.apiUrl}/user/playground`);
    }
   
}
