import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from './playground.service'
import { Router } from '@angular/router'
import { _document } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit {
  errorList: string[] = [];
  showValidationMessages: Boolean;
  public selected: Array<Object>;



  constructor(private playgroundService: PlaygroundService, private router: Router) { }

  ngOnInit() {
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close");

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    span.onclick = function () {
      modal.style.display = "none";
    }
    var id = localStorage.getItem('ID').toString();

    this.playgroundService.getAllTweets(id).subscribe((data: Array<Object>) => {
      console.log(data);
      this.selected = data;
      console.log(this.selected);
      //this.saveTweets(data);
    });

  }




  // saveTweets(Tweets){

  //   console.log(this.selected);
  // }

  newTweet(formValues) {
    var id = localStorage.getItem('ID').toString();
    this.playgroundService.composeTweet(id, formValues.Message)
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

  // deleteTweet(tweetID){
  //   var id=localStorage.getItem('ID').toString(); 
  //   this.playgroundService.deleteTweet(id,tweetID);
  // }

  
  editTweet(formValues) {

    console.log(formValues);
    var id = localStorage.getItem('ID').toString();
    var tweetID=this.UpdatedMessageID;
    console.log(formValues.UpdatedMessage);
    console.log(tweetID);
      console.log(id);
    this.playgroundService.editTweet(id, formValues.UpdatedMessage, tweetID).subscribe((status: Object) => {
      
      this.router.navigate(['/dashboard']);
    });
  }
  
  
  public UpdatedMessageID;


  openPopup(tweet) {
    var modal = document.getElementById('myModal2');
    // Get the button that opens the modal
    console.log(modal);

    var span = document.getElementById("close2");

    var UpdatedMessageID= document.getElementById("UpdatedMessageID") as HTMLInputElement;
     UpdatedMessageID.value=tweet.MessageId;
    
    this.UpdatedMessageID=tweet.MessageId;
    
    var UpdatedMessage=document.getElementById("UpdatedMessage") as HTMLInputElement;
    UpdatedMessage.value=tweet.Message;
    //console.log(tweet.Message);
    // When the user clicks the button, open the modal 

    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    span.onclick = function () {

      modal.style.display = "none";
    }
  }
}


