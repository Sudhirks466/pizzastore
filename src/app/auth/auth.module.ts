import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from '../_services/auth/auth.service';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    GoogleSigninButtonModule
  ],
  // providers:[
    
  // ]
})
export class AuthModule { }
