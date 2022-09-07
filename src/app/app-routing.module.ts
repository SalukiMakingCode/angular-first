import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Demo1Component} from "./demos/demo1/demo1.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path : "demo1", component : Demo1Component },
  { path: 'home', component : HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component : AboutComponent},
  { path: 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
