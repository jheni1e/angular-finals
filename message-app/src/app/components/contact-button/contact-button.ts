import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [],
  templateUrl: './contact-button.html',
  styleUrl: './contact-button.css',
})
export class ContactButton {
  // Este componente será o componente que ficará visivel na lista de contatos.

  @Input() name = "Maluzinha";
}
