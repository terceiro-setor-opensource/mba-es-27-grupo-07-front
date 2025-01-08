import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from '../../services/snack-bar.service';
import { validateFormGroup } from '../../utils';
import { IMyProfile } from '../../models/my-profile.model';


@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrl: './my-profile-page.component.css'
})

export class MyProfilePageComponent {

  constructor(
    private snackBarService: SnackBarService,
  ) {}

  myProfileForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormGroup({
      block: new FormControl('', [Validators.required]),
      apartment: new FormControl('', [Validators.required])
    })
  });

    handleMyProfile() {
    const isValidForm = validateFormGroup(this.myProfileForm);

    if (!isValidForm) {
      this.snackBarService.showNotificationMassage(
        'Preencha o formulário corretamente!',
        'snackbarSuccess'
      );

      return;
    }

    const myProfileData: IMyProfile = {
      name: this.myProfileForm.get('name')?.value,
      email: this.myProfileForm.get('email')?.value,
      phone: this.myProfileForm.get('phone')?.value,
      address: {
        block: this.myProfileForm.get('address.block')?.value,
        apartment: this.myProfileForm.get('address.apartment')?.value,
      }
    };

    console.log('myProfileData', myProfileData);
  }
}
