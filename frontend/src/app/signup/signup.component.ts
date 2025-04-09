import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpForm } from './interfaces/signupForm.interface';
import { CreateUserService } from './services/create-user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm;

  // Variables del signup
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private readonly  createUserService: CreateUserService
  ){
    this.signUpForm = this.formBuilder.group<SignUpForm>({
      email: this.formBuilder.nonNullable.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.nonNullable.control('', [Validators.required]),
      name: this.formBuilder.nonNullable.control('', [Validators.required]),
    });
  }

  onSubmit(){
    const bodySignUp = {
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      name: this.signUpForm.value.name
    };

    console.log('Sign up form submitted with values:', bodySignUp);
    this.createUserService.createUser(bodySignUp).subscribe({
      next: (response) => {
        if(!response.success) {
          console.error('Sign up failed:', response.message);
          this.errorMessage = response.message;
          return;
        }
        console.log('Sign up successful:', response);

        // Redirect to the login page after successful sign up
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Sign up failed:', error);

        if (error.status === 400 && error.error?.message) {
          if (Array.isArray(error.error.message)) {
            this.errorMessage = error.error.message.join('\n'); // une los mensajes con salto de línea
          } else {
            this.errorMessage = error.error.message;
          }
        } else {
          this.errorMessage = 'Ocurrió un error inesperado.';
        }
      }
    });

    console.log('Sign up form submitted with values:', this.signUpForm.value);
  }
}
