import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '.././environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  RegisterUser(FirstName: string, LastName: string, Email: string, Password: string, Country: string,PhoneNumber:string,Image:string) {
    
    
    //testing
    
    
    
    
    const userRegistrationObject = Object.assign({}, {FirstName, LastName, Email, Password, Country,PhoneNumber,Image});
    return this.http.post(`${environment.apiUrl}/User`, userRegistrationObject);
  }
  LoginUser( Email: string, Password: string) {
    const userRegistrationObject = Object.assign({}, { Email, Password});
    return this.http.post(`${environment.apiUrl}/login`, userRegistrationObject);
  }

  userToFollow(UserID:string,UserToFollowID:string){
    const userRegistrationObject = Object.assign({}, { UserID,UserToFollowID});
    return this.http.post(`${environment.apiUrl}/user/follow`, userRegistrationObject);
  }

  userToUnfollow(UserID:string,UserToFollowID:string){
    const userRegistrationObject = Object.assign({}, { UserID,UserToFollowID});
    return this.http.post(`${environment.apiUrl}/user/unfollow`, userRegistrationObject);
  }

  LikeTweet(LoggedInUserID:String,TweetID:String){
    const LikeObject = Object.assign({}, { LoggedInUserID,TweetID});
    return this.http.post(`${environment.apiUrl}/user/like`, LikeObject);

  }
  DislikeTweet(UserID:String,TweetID:String){
    return this.http.delete(`${environment.apiUrl}/user/dislike/${UserID}/${TweetID}`);
  }
}
