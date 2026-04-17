import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  // O componente de botão deve receber uma binding de input com o nome de 'title' e de um output com nome de 'onClick' onde o title deverá ser o unico texto
  // aparecendo no botão e o onClick deverá ativar o evento para o componente pai.

  @Input() title: string = '';
  @Input() action!: () => void;

  onClick = () => {
    if (this.action) {
      this.action();
    }
  }
}
