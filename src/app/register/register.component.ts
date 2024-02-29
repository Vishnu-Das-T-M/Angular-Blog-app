import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  registerForm = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    password_confirmation:new FormControl('',Validators.required),
  });

  signUp() {
    const user = { name: this.registerForm.value.name, email: this.registerForm.value.email, password: this.registerForm.value.password, password_confirmation: this.registerForm.value.password_confirmation };
    this.authService.register(user).subscribe((res) => {
      this.router.navigate(['']);
    });
  }

  loadLog() {
    this.router.navigate(['']);
  }
}
