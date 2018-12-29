import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import {FollowersService} from '../followers/followers.service';
import{FollowingService} from '../following/following.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute,private apiservice:FollowersService,private followingservice:FollowingService) { }
  userID = localStorage.getItem('ID');
  userName=localStorage.getItem('Username');
  public ID:string;
  public loggedIn:boolean;
  public followers:number;
  public following:number;
  ngOnInit() {
    this.ID=localStorage.getItem('ID');
    this.apiservice.getFollowers(this.ID).subscribe((data: Array<Object>) => {
      console.log(data);
      var j=0;
      data.forEach(element => {
        j++;
      });
      this.followers=j;
    });
    this.followingservice.getFollowing(this.ID).subscribe((data:Array<Object>)=>{ 
      var i=0;
      data.forEach(element => {
        i++;
      });
      this.following=i;});

      this.ID=localStorage.getItem('ID');
      if(this.ID!=null){
        this.loggedIn=true;
      }
      else
      this.loggedIn=false;  
    
  }

}
