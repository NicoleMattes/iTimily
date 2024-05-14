import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModule } from './login.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm!: FormGroup;

  constructor(private router: Router, private formBuider: FormBuilder){
    this.loginForm= this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]]
    })
  }

  onSubmit() {}
}
