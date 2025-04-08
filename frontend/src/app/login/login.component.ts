import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginForm } from './interfaces/loginForm.interface';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoginResponse } from './interfaces/loginResponse.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm;
  loginResponse!: LoginResponse;

  // Variables del login
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private readonly authService: AuthService
  ){
    this.loginForm = this.formBuilder.group<LoginForm>({
      email: this.formBuilder.nonNullable.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.nonNullable.control('', [Validators.required]),
    });
  }

  onSubmit() {
    const bodyLogin = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    console.log('Login form submitted with values:', bodyLogin);
    this.authService.logIn(bodyLogin).subscribe({
      next: (response) => {
        if(!response.success) {
          console.error('Login failed:', response.message);
          this.errorMessage = response.message;
          return;
        }

        console.log('Login successful:', response);
        this.loginResponse = response;

        // Redirect to the home page after successful login
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }
}
