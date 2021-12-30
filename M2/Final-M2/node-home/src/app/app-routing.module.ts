import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterHomeComponent } from './components/enter-home/enter-home.component';
import { HomeComponent } from './components/home/home.component';
import { HousesAvailableComponent } from './components/houses-available/houses-available.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'results',
    component: HousesAvailableComponent
  },{
    path: 'create',
    component: EnterHomeComponent
  },{
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
