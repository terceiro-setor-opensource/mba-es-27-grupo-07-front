import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login: string = ''; // Inicializa com uma string vazia
  password: string = ''; // Inicializa com uma string vazia

  // Método para lidar com o envio do formulário (opcional)
  onSubmit() {
    console.log('Email:', this.login);
    console.log('Password:', this.password);
    // Adicione sua lógica de autenticação aqui
  }
}
