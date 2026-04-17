import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../models/User';
import { AuthApi } from '../../domain/auth.api';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.css',
})
export class Subscribe {
  // Para o usuário se inscrever no programa ele deverá inserir os seguintes campos e todos terá que ter as suas repectivas validações
  // Nome
  // Email
  // Nascimento
  // Telefone
  // Senha
  // A senha do usuário tem que ter as seguintes validaçoes:
  // minimo 8 caracteres
  // pelo menos uma letra maiúscula
  // pelo menos um número

  @Output()
  dataChange: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private authApi: AuthApi) { }

  subscribeForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    name: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  })

  get Email() {
    return this.subscribeForm.get("email")
  }

  get Password() {
    return this.subscribeForm.get("password")
  }

  get Name() {
    return this.subscribeForm.get("name")
  }

  get Birthdate() {
    return this.subscribeForm.get("birthdate")
  }

  get Phone() {
    return this.subscribeForm.get("phone")
  }

  subscribe() {
    if (!this.subscribeForm.valid) {
      alert('Some fields are invalid.');
      return;
    }

    const data: IUser = {
      name: this.Name?.value,
      email: this.Email?.value,
      birthdate: this.Birthdate?.value,
      phone: this.Phone?.value,
      senha: this.Password?.value
    }

    this.authApi.subscribe(data).subscribe({
      next: () => {
        alert('Registered successfully!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Register failed.', err);
        alert('Registered failed: ' + (err.error?.message || 'Unknown error'));
      }
    });
  }
}
