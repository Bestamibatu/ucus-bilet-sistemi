import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface LoginResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.isLoading = true;

    this.http.post<LoginResponse>('http://localhost:5121/api/Customer/login', loginData).subscribe({
      next: (response) => {
        const token = response.token;
        if (token) {
          localStorage.setItem('token', token);
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Geçersiz token!';
        }
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Giriş başarısız. Bilgilerinizi kontrol edin.';
        this.isLoading = false;
      }
    });
  }
}
