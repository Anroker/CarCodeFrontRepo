import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorProviders } from './_helpers/http.interceptor';

import { CarsComponent } from './components/cars/cars/cars.component';
import { CarEditComponent } from './components/cars/car-edit/car-edit.component';
import { CarAddComponent } from './components/cars/car-add/car-add.component';
import { CarComponent } from './components/cars/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardUserComponent,
    CarComponent,
    CarsComponent,
    CarEditComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
