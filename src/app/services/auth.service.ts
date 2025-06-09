import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';  // Default import kullanılıyor

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5121/api/customer'; // .NET API address

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Check if the token is valid
  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const decodedToken: any = jwt_decode(token);  // Default import kullanarak decode
      const currentTime = Math.floor(Date.now() / 1000);  // Current time in seconds
      return decodedToken.exp > currentTime;
    } catch (error) {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}
