import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    const customer = {
      customerName: this.name,
      customerSurname: this.surname,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:5121/api/Customer/register', customer).subscribe({
      next: () => {
        alert('Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.');
        this.router.navigate(['/login']);
      },
      error: err => {
        alert('Kayıt başarısız: ' + (err.error || 'Bilinmeyen hata'));
      }
    });
  }
}
