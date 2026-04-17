import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../../models/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // O login deverá ter um formulário que permite o usuário fazer login via email e senha e é importante que seja validado os campos tanto de email quanto o de senha. o
  // token de retorno deverá ser armazenado por sessão.

  @Output()
  dataChange: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get Email() {
    return this.loginForm.get("email")
  }

  get Password() {
    return this.loginForm.get("password")
  }

  login() {
    if (!this.loginForm.valid) {
      alert('Alguns campos estão inválidos.');
      return;
    }

    const data: ILogin = {
      email: this.Email?.value,
      password: this.Password?.value
    }

    // this.authApi.login(data).subscribe(
    //   res => {
    //     sessionStorage.setItem('token', res);
    //     sessionStorage.setItem('username', data.username);
    //     this.router.navigate(['/']);
    //   });
  }
}
