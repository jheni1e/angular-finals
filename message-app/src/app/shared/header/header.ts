import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // O header é um componente que ficará disponivel em toda a aplicação (menos no login) e deverá conter o título da aplicação
  // OPCIONAL: no header poder ter um menu com a lista dos contatos atual

  constructor(private router: Router) {}

  goToContacts = () => {
    this.router.navigate(['/contacts']);
  }
}
