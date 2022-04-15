import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path : 'home' , 
    component: HomeComponent
  },
  {
    path: 'list/:type',
    component: ListComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
