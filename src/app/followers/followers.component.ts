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

  ngOnInit() {
    var id=localStorage.getItem('ID');
    console.log('ID');
    this.followersService.getFollowers(id).subscribe((data: Array<Object>) => {
      console.log(data);
      this.users = data;
      console.log(this.users);
  });
}

}
