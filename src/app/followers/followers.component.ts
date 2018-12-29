import { Component, OnInit } from '@angular/core';
import{FollowersService} from './followers.service'

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  public users:Array<Object>;
  constructor(private followersService:FollowersService) { }
  public Count:number;
  public ID:String;
  public loggedIn:boolean;
  ngOnInit() {
    this.ID=localStorage.getItem('ID');
    if(this.ID!=null){
      this.loggedIn=true;
    }
    else
    this.loggedIn=false; 
    this.followersService.getFollowers(this.ID).subscribe((data: Array<Object>) => {
      
      this.users = data;
      var i=0;
      data.forEach(element => {
        i++;
      });
      this.Count=i;
  });
}

}
