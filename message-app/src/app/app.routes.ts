import { Routes } from '@angular/router';
import { Subscribe } from './features/subscribe/subscribe';
import { Login } from './features/login/login';
import { AuthPage } from './features/auth-page/auth-page';
import { Chat } from './features/chat/chat';
import { ContactsList } from './features/contacts-list/contacts-list';
import { authGuard } from './domain/auth-guard';

export const routes: Routes = [
    { path: 'register', component: Subscribe },
    { path: 'login', component: Login },
    { path: 'chat', component: Chat },
    { path: 'contacts', component: ContactsList },
    { path: '', component: AuthPage, canMatch: [authGuard] }
];
