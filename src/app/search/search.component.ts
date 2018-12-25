import { Component, OnInit ,Output} from '@angular/core';
import {SearchService} from './search.service'
import{ApiService} from '../api.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 @Output() public parentMessage="abc";
  constructor(private searchService:SearchService,private apiservice:ApiService,private route:Router) { }

  public users:Array<Object>;
  ngOnInit() {
    console.log("From search Component:"+this.parentMessage)
  }

  
  SearchUser(formValues){
    
    this.searchService.GetAllUsers(formValues.SearchString).subscribe((data:Array<Object>)=>{
      console.log(formValues.SearchString);
      console.log(data);
      this.users=data;
    })
  }

  public Follow(UsertoFollowID:string){
    var ID=localStorage.getItem('ID');
    this.apiservice.userToFollow(ID,UsertoFollowID).subscribe(data=>{
      window.location.reload();
      this.route.navigate['./Following']
    });
    }

}
