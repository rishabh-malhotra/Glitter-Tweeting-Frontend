import { Component, OnInit } from '@angular/core';
import {PlaygroundService} from './playground.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit {
  errorList: string[] = [];
  showValidationMessages: Boolean;
  public selected: Array<Object>;
  constructor(private playgroundService:PlaygroundService,private router:Router) { }

  ngOnInit() {
    var modal = document.getElementById('myModal');
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementById("close");
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  span.onclick = function() {
    modal.style.display = "none";
  }

  this.playgroundService.yourTweets().subscribe((data)=>{
    this.saveTweets(data);
  });

  }

  saveTweets(Tweets){
    this.selected=Tweets;
  }

  newTweet(formValues) {
    var id=localStorage.getItem('ID').toString();
    this.playgroundService.composeTweet( id,formValues.Message)
  .subscribe(
    (data) => {
       this.router.navigate(['/dashboard']);
    },
    (error) => {
      this.errorList = [];
      const errorMessage = error['error']['message'];
      this.errorList.push(`${errorMessage}`);
    }
  );
  }

}
