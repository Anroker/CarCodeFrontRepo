import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { CarComponent } from './components/cars/car/car.component';
import { CarsComponent } from './components/cars/cars/cars.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/authentication/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "cars", component: CarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
