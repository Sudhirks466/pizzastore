import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  pizzaTypeList() {
    return this.http.get(`${this.apiUrl}/api/pizzaorder/pizzatypes`);
  }
}
