import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public loggedIn;
public Username;
  constructor() { 
    
  }

  ngOnInit() {
    this.loggedIn=localStorage.getItem('ID');
    this.Username=localStorage.getItem('Username');
  }

  logout(){
    console.log(this.loggedIn);
    localStorage.removeItem('ID');
    localStorage.removeItem('Username');
    this.loggedIn=localStorage.getItem('ID');
    this.Username=localStorage.getItem('Username');
  }
}
