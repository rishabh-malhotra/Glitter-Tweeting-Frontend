import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../api.service"
import {HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  errorList: string[] = [];
  showValidationMessages: Boolean;
  

    
 

  constructor(private apiService: ApiService,private router: Router, private http:HttpClient) { }

  ngOnInit() {
  }



  signup(formValues) {
    console.log(formValues.Country);
    this.apiService.RegisterUser(formValues.FirstName, formValues.LastName,  formValues.Email, formValues.Password,formValues.Country,formValues.PhoneNumber,formValues.Image)
      .subscribe(
        (data) => {

          this.router.navigate(['/login']);
        },
        (error) => {
          this.errorList = [];
          const errorMessage = error['error']['message'];
          this.errorList.push(`${errorMessage}`);
        }
      );
  }
}