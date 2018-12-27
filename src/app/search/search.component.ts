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
  public ID;
  public users:Array<Object>;
  ngOnInit() {
     this.ID=localStorage.getItem('ID');
  }

  
  SearchUser(formValues){
    if(formValues.search == "posts"){
      this.searchService.GetAllTags(this.ID,formValues.SearchString).subscribe((data:Array<Object>)=>{
        this.users=data;
    })
  }
  else{
    this.searchService.GetAllUsers(this.ID,formValues.SearchString).subscribe((data:Array<Object>)=>{
      this.users=data;
    })
  }
}
  public Follow(UsertoFollowID:string){
    
    this.apiservice.userToFollow(this.ID,UsertoFollowID).subscribe(data=>{
      window.location.reload();
      this.route.navigate['./Following']
    });
    }

}
