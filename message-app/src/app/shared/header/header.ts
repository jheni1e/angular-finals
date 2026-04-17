import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // O header é um componente que ficará disponivel em toda a aplicação (menos no login) e deverá conter o título da aplicação
  // OPCIONAL: no header poder ter um menu com a lista dos contatos atual
}
