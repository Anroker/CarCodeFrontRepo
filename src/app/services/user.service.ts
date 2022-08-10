import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    // return this.http.get(API_URL + 'user', { responseType: 'text' });
    return this.http.get('http://localhost:8080/api/car/user', { responseType: 'text' });
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:8080/api/car/');
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
