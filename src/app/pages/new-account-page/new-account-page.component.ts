import { Component } from '@angular/core';
import { SnackBarService } from '../../services/snack-bar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateFormGroup } from '../../utils';
import { INewAccount } from '../../models/new-account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrl: './new-account-page.component.css'
})
export class NewAccountPageComponent {

  constructor(
    private snackBarService: SnackBarService,
    private router: Router
  ) { }

  newAccountForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}'),
    ]),
    address: new FormGroup({
      block: new FormControl('', [Validators.required]),
      apartment: new FormControl('', [Validators.required])
    })
  });

  isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  handleNewAccount() {
    const isValidForm = validateFormGroup(this.newAccountForm);

    if (!isValidForm) {
      this.snackBarService.showNotificationMassage(
        'Preencha o formulário corretamente!',
        'snackbarSuccess'
      );
      return;
    }

    const newAccountData: INewAccount = {
      name: this.newAccountForm.get('name')?.value,
      email: this.newAccountForm.get('email')?.value,
      phone: this.newAccountForm.get('phone')?.value,
      password: this.newAccountForm.get('password')?.value,
      address: {
        block: this.newAccountForm.get('address.block')?.value,
        apartment: this.newAccountForm.get('address.apartment')?.value,
      },
    };

    console.log('newAccountData', newAccountData); // chamar funcao de autenticacao API

    this.snackBarService.showNotificationMassage(
      'Sucesso. Usuário cadastrado!',
      'snackbarSuccess'
    );

    this.router.navigate(['/login']);
  }
}