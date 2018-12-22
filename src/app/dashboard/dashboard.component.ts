import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute) { }
  userID = localStorage.getItem('ID');
  userName=localStorage.getItem('Username');
  ngOnInit() {
  }

}
