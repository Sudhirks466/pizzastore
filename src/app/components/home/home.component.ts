import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/_services/web.service';
import { Pizzalist } from './pizzalist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  pizzaList = [] as Array<Pizzalist>

  constructor(
    private webServices: WebService
  ){}

  ngOnInit(){
    this.webServices.pizzaTypeList().subscribe((response: any)=>{
      console.log(response)
      this.pizzaList = response;
    }, (error: any)=>{
      console.log(error)
    })
  }

}
