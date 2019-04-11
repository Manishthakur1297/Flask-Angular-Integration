import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthService {


  layout : string; 
  id : string;

  constructor(private _router: Router) { }

  clear(): void {
    localStorage.clear();
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  getId()
  {
    return localStorage.getItem('id');
  }

  setId(i)
  {
    localStorage.setItem('id', i);
  }

  getDashboard()
  {
    this._router.navigate(['/dashboard/']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  setToken(token): void {
    localStorage.setItem('token', token);
    this._router.navigate(['/dashboard/']);
  }

  logout(): void {
    this.clear();
    this._router.navigate(['/home']);
  }

}