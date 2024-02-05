import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  submitted = false;
  private accessToken = '';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private el: ElementRef,
    private loginService: AuthService,
    private httpClient: HttpClient
  ) { }

  /* --------------------- start --------------------- */
  ngOnInit(): void {
    /* the below emailregex variable is defined for the email patter validation*/

    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    /* ------------------ login reactive form validation start -------------------------------*/
    this.loginForm = this.fb.group({
      emailId: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(32), Validators.pattern(emailregex)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    })
    /* ------------------ login reactive form validation end -------------------------------*/
  }
  /* --------------------- end --------------------- */

  get f1() { return this.loginForm.controls; }

  /* ---------------------------- the login form submit function start ------------------------------*/
  submitLogin() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.scrollToFirstInvalidControl();
    }
    else {

      let credentials = {
        "email": this.loginForm.value.emailId,
        "password": this.loginForm.value.password
      }
      this.loginService.loginUser(credentials).subscribe((response: any) => {
        this.submitted = false;
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        } else {
          sessionStorage.removeItem('token');
        }
      }, (error: any) => {
        sessionStorage.removeItem('token');
        alert(error.error.error);
      })
    }
  }
  /* ---------------------------- the login form submit function end ------------------------------*/

  private scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector(
      "form .ng-invalid"
    );
    firstInvalidControl.focus(); //without smooth behavior
  }

  /*
 removeWhiteSpace method created for allowed a particular form field characters
 which type of characters are in the particular form field 
 if not allowed charaters then no type in this field 
*/
  removeWhiteSpace(event: any, fieldName: any): boolean {
    const string = event.target.value
    switch (fieldName) {
      case "emailId":
      case "password":
        if ((string.length == 0) && (event.keyCode == 32)) {
          return false
        }
        if ((string.length != 0) && (string[string.length - 1] == " ") && (event.keyCode == 32)) {
          return false
        }
        if ((string.length != 0) && (string[0] == " ") && (event.keyCode == 32)) {
          return false
        }

        /* ---------------------- remove white space start -----------------------------------*/

        switch (fieldName) {
          case "emailId":
            this.loginForm.patchValue({
              emailId: string.replace(/\s+/g, '')
            })
            break;
          case "password":
            this.loginForm.patchValue({
              password: string.replace(/\s+/g, '')
            })
            break
          /* ---------------------- remove white space start -----------------------------------*/

        }
        break;
    }

    return true
  }
}
