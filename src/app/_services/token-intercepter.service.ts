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
    let tokenizedReq = req.clone({
      setHeaders : {
        "Authorization":  `bearer ${authService}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
