import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor{

  constructor(
    private injector: Injector, 
    // private authService: AuthService
    ) { }
  intercept(req:any, next:any){
    let authService = sessionStorage.getItem('token');
    // console.log(authService)
    let tokenizedReq = req.clone({
      setHeaders : {
        "Authorization":  `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InN1ZGhpckBnbWFpbC5jb20iLCJleHAiOjE3MDcwNDQxNjAsImlzcyI6InVtZWVlU2VjcmV0S2V5Zm9yb3V0aGVudGlvb3Rpb25PZnBwcHlpd2F1aW9uIiwiYXVkIjoicGl6emFzdG9yZS5jb20ifQ.n47417N7Awb4_pQECp6WLVLHAvdZhvoIVVTa1HPpSus`
      }
    })
    return next.handle(tokenizedReq)
  }
}
