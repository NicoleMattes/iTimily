import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuider: FormBuilder,
    private authService: AuthService,
    private loginService: LoginService,
    private storageService: StorageService
  ){
    this.loginForm= this.formBuider.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    })
  }

  onSubmit() {
    this.login();
  }

  login() {
    const user = this.getUserByForm();
    this.loginService.login(user).subscribe({
      next: data => {
        this.authService.login();
        this.router.navigate(['home-page']);
        this.storageService.COMPLETE_USER = data;
      },
      complete: () => {
        console.log('logged');
      },
      error: e => {
        console.error(e);
      }
    })
  }

  getUserByForm() {
    return {login: this.loginForm.get('email')?.value, senha: this.loginForm.get('password')?.value};
  }
}
