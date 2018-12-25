import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }
  public analytics:Object;
  ngOnInit() {
    this.analyticsService.getAnalyticsData().subscribe(
      (data) => {

        this.analytics=data;

      });
  }

}
