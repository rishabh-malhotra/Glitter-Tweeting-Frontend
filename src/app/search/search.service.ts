import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  GetAllUsers(UserID:String,SearchString:String){
    const SearchObject = Object.assign({}, {UserID,SearchString});
    return this.http.post(`${environment.apiUrl}/user/searchUser`, SearchObject);
  
  }
  GetAllTags(UserID:String,SearchString:String){
    const SearchObject = Object.assign({}, {UserID,SearchString});
    return this.http.post(`${environment.apiUrl}/user/searchHashTag`, SearchObject);
  }
}
