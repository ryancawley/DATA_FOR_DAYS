import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private registerUrl = 'http://localhost:4200/api/register';
  private loginUrl = 'http://localhost:4200/api/login';

  constructor(private http: HttpClient, private router: Router) {
    // ...
  }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    return localStorage.removeItem('token');
    this.router.navigate(['/logout']);
  }
}
