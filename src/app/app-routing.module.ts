import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from './home/home.component';
import { AddMasterComponent } from './add-master-data/add-master.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: AddMasterComponent},
  { path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!'}},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
