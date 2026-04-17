import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputComponent {
  // O componente input deverá ter as seguintes bindings
  // value: uma binding que recebe o valor inicial, e será a mesma que armazena o conteúdo das atualizaçoes dos textos.
  // change: uma binding que envia ao pai o valor a cada alteração do usuário
  // placeholder: uma binding que recebe um texto que irá ficar disponível enquanto não tem valor nenhum

  @Input() value: string = '';
  @Output() change: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  onChange = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    this.change.emit(value);
  }
}
