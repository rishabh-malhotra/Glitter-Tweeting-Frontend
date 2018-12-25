import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http:HttpClient) {}
    getAnalyticsData(){
      return this.http.get(`${environment.apiUrl}/analytics`);
    }
   }

