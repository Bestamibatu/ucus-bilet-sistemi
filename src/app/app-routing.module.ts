import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }         from './home/home.component';
import { LoginComponent }        from './login/login.component';
import { RegisterComponent }     from './register/register.component';
import { FlightDetailsComponent }from './flight-details/flight-details.component';
import { BookingComponent }      from './booking/booking.component';
import { AdminComponent }        from './admin/admin.component';

const routes: Routes = [
  { path: '',             redirectTo: 'home',         pathMatch: 'full' },
  { path: 'home',         component: HomeComponent },
  { path: 'login',        component: LoginComponent },
  { path: 'register',     component: RegisterComponent },
  { path: 'flight-details', component: FlightDetailsComponent },
  { path: 'booking',      component: BookingComponent },
  { path: 'admin',        component: AdminComponent },
  //{ path: '**',         component: PageNotFoundComponent } // opsiyonel
];

@NgModule({
  imports:  [ RouterModule.forRoot(routes) ],
  exports:  [ RouterModule ]
})
export class AppRoutingModule { }
