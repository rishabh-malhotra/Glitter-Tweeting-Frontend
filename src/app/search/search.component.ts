import { Component, OnInit ,Output} from '@angular/core';
import {SearchService} from './search.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 @Output() public parentMessage="abc";
  constructor(private searchService:SearchService) { }

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

}
