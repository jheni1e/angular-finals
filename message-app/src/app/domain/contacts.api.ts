import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable, Subject } from 'rxjs';
import { IContact } from '../models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsApi extends Api {
  private _contactsSubject = new Subject<IContact[]>();
  public contactsObservable: Observable<IContact[]> = this._contactsSubject.asObservable();

  getAllContacts = (): Observable<IContact[]> => {
    const token = sessionStorage.getItem('token');

    const headers = {
      'Authorization': `${token}`
    };
    
    return this.client.get<IContact[]>(`${this.URL}/contacts`).pipe();
  }

  addContact = (data: IContact) : Observable<void> => {
    const token = sessionStorage.getItem('token');

    const headers = {
      'Authorization': `${token}`
    };
    
    return this.client.post<void>(`${this.URL}/contacts`, data).pipe();
  }
}