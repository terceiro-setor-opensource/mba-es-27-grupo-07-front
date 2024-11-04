import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() inputValue: string = ''; // Inicializa com uma string vazia
  @Input() inputType: string = 'text'; // Tipo padrão é 'text'
  @Input() label: string = ''; // Nova propriedade para o rótulo
  @Output() inputValueChange = new EventEmitter<string>(); // Emissor de evento

  // Método para emitir o valor quando o input mudar
  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value;
    this.inputValueChange.emit(this.inputValue); // Emite o novo valor
  }
}
