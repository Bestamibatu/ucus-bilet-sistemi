import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Normal componentler
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent }     from './home/home.component';

// Standalone componentler
import { LoginComponent } from './login/login.component'; // standalone ise imports'a!

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent // Burası eksikti, hatanın sebebi bu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginComponent // standalone componentler burada
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
