import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-navbar',
  templateUrl: './search-navbar.component.html',
  styleUrls: ['./search-navbar.component.css']
})
export class SearchNavbarComponent implements OnInit {

  constructor() { }
  @Input() childMessage:string;
  ngOnInit() {
    console.log(this.childMessage);
  }

}
