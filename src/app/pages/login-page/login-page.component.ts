import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../models/login.model';
import { validateFormGroup } from '../../utils';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}'),
    ]),
  });

  isPasswordVisible: boolean = false;

  constructor(
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  handleLogin() {
    const isValidForm = validateFormGroup(this.loginForm);

    if (!isValidForm) {
      this.snackBarService.showNotificationMassage(
        'Preencha o formulário corretamente!',
        'snackbarSuccess'
      );

      return;
    }

    const loginData: ILogin = {
      login: this.loginForm.get('login')?.value,
      password: this.loginForm.get('password')?.value,
    };

    console.log('loginData', loginData); // chamar funcao de autenticacao API

    this.snackBarService.showNotificationMassage(
      'Sucesso. Usuário autenticado!',
      'snackbarSuccess'
    );

    this.router.navigate(['/home']);
  }
}
