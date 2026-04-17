import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [],
  templateUrl: './chat-message.html',
  styleUrl: './chat-message.css',
})
export class ChatMessage {
  // Este componente será o componente que será renderizado no chat do usuário com as mensagens do chat, ele precisa seguir um formato de que fique evidente quem
  // enviou a mensagem (se foi voce ou o contato).
  // Lembrando que o mesmo componente deverá ser utilizado para ambos os usuários do chat, entao você terá que ter alguma catacterística que diferencie-os.
  // Neste componente você terá liberdade para definir quais bindings será necessárias

  @Input()
  message: string = "mensagem teste"

  @Input()
  contact: string = "Malu";
}
