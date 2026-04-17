import { Component } from '@angular/core';
import { ContactButton } from '../../components/contact-button/contact-button';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [ContactButton],
  templateUrl: './contacts-list.html',
  styleUrl: './contacts-list.css',
})
export class ContactsList {
  // Esta página é dedicada a reenderizar todos os contatos que aquele usuário e as seguintes funções:
  // Mostrar a lista de contatos do usuário
  // Ao clicar num contato ser redirecionado para a pagina de chat com aquele contato
  // Adicionar um novo contato (um card que sobrepõe a lista)
}
