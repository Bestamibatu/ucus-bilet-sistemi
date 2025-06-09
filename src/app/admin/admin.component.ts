import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // AuthService'i import ediyoruz
import { Router } from '@angular/router'; // Yönlendirme için Router'ı import ediyoruz

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username: string = '';  // Admin'in kullanıcı adı
  password: string = '';  // Admin'in şifresi
  errorMessage: string = '';  // Hata mesajı

  constructor(private authService: AuthService, private router: Router) { }

  // Admin giriş fonksiyonu
  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe(
      (response: any) => {
        // Token'ı localStorage'a kaydediyoruz
        this.authService.saveToken(response.token);
        // Giriş başarılıysa, admin paneline yönlendiriyoruz
        this.router.navigate(['/admin/dashboard']);
      },
      (error) => {
        // Hata durumunda hata mesajını gösteriyoruz
        this.errorMessage = 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.';
      }
    );
  }
}
