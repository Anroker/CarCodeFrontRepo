import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';



import { HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { Car } from 'src/app/model/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiServer = "http://localhost:8080/api/car";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiServer + '/')
    .pipe(
      catchError(this.errorHandler)
    )
  }



  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

  
}
