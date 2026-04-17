import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { InputComponent } from '../../shared/input/input';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [Header, InputComponent],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {
  // Nesta página iremos trabalhar com a autenticação do usuário onde teremos uma sub-página (child) para login e uma para se inscrever na aplicação.

  text = "";
}
