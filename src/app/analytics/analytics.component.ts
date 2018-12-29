import { Component, OnInit } from '@angular/core';
import {AnalyticsService} from './analytics.service'

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private analyticsService:AnalyticsService) { }
  public analytics:Object;
  public ID:String;
  public loggedIn:boolean;
  ngOnInit() {
    this.ID=localStorage.getItem('ID');
    if(this.ID!=null){
      this.loggedIn=true;
    }
    else
    this.loggedIn=false; 
    this.analyticsService.getAnalyticsData().subscribe(
      (data) => {

        this.analytics=data;

      });
  }

}
