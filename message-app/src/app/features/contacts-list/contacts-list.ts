import { Component, signal } from '@angular/core';
import { ContactButton } from '../../components/contact-button/contact-button';
import { ContactsApi } from '../../domain/contacts.api';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../../models/Contact';
import { Subscription } from 'rxjs';

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

  constructor(private contactApi: ContactsApi, private router: ActivatedRoute) { }

  protected contacts = signal<IContact[]>([]);
  private contactSubscription!: Subscription;

  ngOnInit(): void {
    this.contactApi.getAllContacts().subscribe(
      res => {
        console.log(res)
      });
  }
}
