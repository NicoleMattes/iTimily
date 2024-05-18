import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm!: FormGroup;

  constructor(private router: Router, private formBuider: FormBuilder, private authService: AuthService){
    this.loginForm= this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]]
    })
  }

  onSubmit() {
    this.authService.login()
    this.router.navigate(['students-page'])
  }
}
