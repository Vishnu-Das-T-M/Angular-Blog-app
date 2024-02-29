import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['index']);
    }
  }

  loginform = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  signIn() {
    const data = {
      email: this.loginform.value.email,
      password: this.loginform.value.password,
    };
    this.authservice.login(data).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['index']);
    });
  }

  loadReg() {
    this.router.navigate(['register']);
  }
}
