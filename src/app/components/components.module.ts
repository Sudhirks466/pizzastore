import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { WebService } from '../_services/web.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  {
    path: '',
    component: HomeComponent
  },
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    WebService
  ]
})
export class ComponentsModule { }
