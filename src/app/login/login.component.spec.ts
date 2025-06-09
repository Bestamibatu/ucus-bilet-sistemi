import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent, // Standalone component buraya direkt eklenir
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('oluşturuldu mu?', () => {
    expect(component).toBeTruthy();
  });

  it('başlangıçta email boş olmalı', () => {
    expect(component.email).toBe('');
  });

  it('başlangıçta password boş olmalı', () => {
    expect(component.password).toBe('');
  });
});
