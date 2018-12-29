import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../api.service"
import {HttpClient } from "@angular/common/http" 
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userImage = null;
  errorList: string[] = [];
  showValidationMessages: Boolean;
  checkName: boolean = false;
  checkEmail: boolean = false;  
  checkPassword: boolean = false;  
  checkPhoneNumber: boolean = false;  
  checkImage: boolean = false; 

imagePreview: string;
  constructor(private apiService: ApiService,private router: Router, private http:HttpClient) { }
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userImage = file;
    } else {
      this.userImage = null;
    }
  }
  ngOnInit() {
  }



  adduser(formvalue) {

//tetsing
let flag = true;
   
if (!formvalue.FirstName ||!formvalue.LastName) {
  this.checkName = true;
  flag = false;
}
if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(formvalue.Email)) {
  this.checkEmail = true;
  flag = false;
}
if (!new RegExp("[0-9]{10}").test(formvalue.PhoneNumber)) {
  this.checkPhoneNumber = true;
  flag = false;
}
if (!new RegExp("^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$").test(formvalue.Password)) {
  this.checkPassword = true;
  flag = false;
}

if (!formvalue.Image) {
  this.checkImage = true;
  flag = false;
}
console.log('formvalue'+formvalue)
if(flag){
  console.log("call is being made");
 this.apiService.RegisterUser(formvalue.FirstName,formvalue.LastName,formvalue.Email,formvalue.Password,formvalue.Country,formvalue.PhoneNumber,formvalue.Image)
      .subscribe(res => {
          console.log(res);
         
              this.router.navigate(["login"]);
         
      })
}
  }
}