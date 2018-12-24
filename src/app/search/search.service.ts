import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  GetAllUsers(Username:String){
    const SearchObject = Object.assign({}, {Username});
    return this.http.post(`${environment.apiUrl}/user/searchUser`, SearchObject);
  
  }
}
