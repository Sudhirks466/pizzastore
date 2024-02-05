import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient, 
    ) { }

  loggedIn() {
    return !!sessionStorage.getItem('token')
  }

  getToken() {
    return sessionStorage.getItem('token')
  }

  loginUser(data: any) {
    var headers_object = new HttpHeaders({ 'Content-Type': 'application/json' });
    const httpOptions = { headers: headers_object };
    return this.http.post(`${this.apiUrl}/api/Auth/login`, data, httpOptions);
  }
}
