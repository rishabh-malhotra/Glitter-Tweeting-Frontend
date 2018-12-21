import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorList: string[] = [];
  showValidationMessages: Boolean;

  constructor( private router: Router) { }

  ngOnInit() {
  }
  signup(formValues) {
    this.apiService.RegisterUser(formValues.name, formValues.username, formValues.password, formValues.email, formValues.phoneNumber)
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
