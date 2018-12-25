import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  public following:Array<Object>;
  public Count:number;
  constructor() { }

  ngOnInit() {
    var userId=localStorage.getItem('ID');
    this.followingService.getFollowing(userId).subscribe((data:Array<Object>)=>{

      this.following=data;
      var i=0;
      data.forEach(element => {
        i++;
      });
      this.Count=i;

    });
  }
  public unFollow(usertounfollowID){
    var ID=localStorage.getItem('ID');
    this.apiservice.userToUnfollow(ID,usertounfollowID).subscribe(data=>{
      window.location.reload();
      this.route.navigate['./Following']
    });
    }

}
