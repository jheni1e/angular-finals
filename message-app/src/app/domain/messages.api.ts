import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable, Subject } from 'rxjs';
import { IMessage } from '../models/Message';

@Injectable({
  providedIn: 'root',
})
export class MessagesApi extends Api {
  private _messageSubject = new Subject<IMessage[]>();
  public messageObservable: Observable<IMessage[]> = this._messageSubject.asObservable();

  getAllMessages = (): Observable<IMessage[]> => {
    const token = sessionStorage.getItem('token');

    const headers = {
      'Authorization': `${token}`
    };
    
    return this.client.get<IMessage[]>(`${this.URL}/messages`).pipe();
  }

  getMessagesByChat = (contatoId: string): Observable<IMessage[]> => {
    const token = sessionStorage.getItem('token');

    const headers = {
      'Authorization': `${token}`
    };

    return this.client.get<IMessage[]>(`${this.URL}/messages/${contatoId}`).pipe();
  }

  sendMessage = (data: IMessage) : Observable<void> => {
    const token = sessionStorage.getItem('token');

    const headers = {
      'Authorization': `${token}`
    };
    
    return this.client.post<void>(`${this.URL}/messages`, data).pipe();
  }
}
