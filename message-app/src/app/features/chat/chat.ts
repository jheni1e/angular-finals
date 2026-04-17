import { Component, Input, OnInit, signal } from '@angular/core';
import { IMessage } from '../../models/Message';
import { Subscription } from 'rxjs';
import { MessagesApi } from '../../domain/messages.api';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from '../../components/chat-message/chat-message';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChatMessage],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit {
  // Nesta pagina deverá ser renderizado todas as mensagens com um contato específico. A diferenciaçao do contato deverá ser feita via URL (exemplo: app.com/chat/
  // 123123123). Tendo as seguintes funções:
  // Pegar as mensagens de um chat específico
  // mandar mensagem
  // Terá que ter um formulário com validações para nao enviar uma mensagem vazia.

  constructor(private messageApi: MessagesApi, private router: ActivatedRoute) { }

  @Input() idContato: string = '';
  protected messages = signal<IMessage[]>([]);
  private messageSubscription!: Subscription;

  ngOnInit(): void {
    this.router.paramMap.forEach(param => {
      this.idContato = param.get("id") ?? "";
    })

    this.messageApi.getMessagesByChat(this.idContato).subscribe(
      res => {
        console.log(res)
      });

    
  }
}
