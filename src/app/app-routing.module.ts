import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { YourbookedComponent } from './yourbooked/yourbooked.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { SeatyoubookedComponent } from './seatyoubooked/seatyoubooked.component';


const routes: Routes = [ 
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent },
  {path:'yourbooked', component:YourbookedComponent},
  {path:'seatselection', component:SeatselectionComponent},
  {path:'seatyoubooked', component:SeatyoubookedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
