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
  ngOnInit() {
    var id=localStorage.getItem('ID');
    console.log('ID');
    this.followersService.getFollowers(id).subscribe((data: Array<Object>) => {
      
      this.users = data;
      var i=0;
      data.forEach(element => {
        i++;
      });
      this.Count=i;
  });
}

}
