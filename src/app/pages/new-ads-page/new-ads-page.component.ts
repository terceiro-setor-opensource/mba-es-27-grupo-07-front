import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateFormGroup } from '../../utils';
import { SnackBarService } from '../../services/snack-bar.service';
import { IAds } from '../../models/ads.model';

@Component({
  selector: 'app-new-ads-page',
  templateUrl: './new-ads-page.component.html',
  styleUrl: './new-ads-page.component.css'
})
export class NewAdsPageComponent {
  selectedFile: File | null = null;

  constructor( private snackBarService: SnackBarService ) {}

  newAdsForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', []),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    status: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    user_id: new FormControl('', []),
  });

  handleNewAds() {
    const isValidForm = validateFormGroup(this.newAdsForm);

    if (!isValidForm) {
      this.snackBarService.showNotificationMassage(
        'Preencha o formulário corretamente!',
        'snackbarSuccess'
      );

      return;
    }

    const newAdsData: IAds = {
      title: this.newAdsForm.get('title')?.value,
      description: this.newAdsForm.get('description')?.value,
      price: this.newAdsForm.get('price')?.value,
      status: this.newAdsForm.get('status')?.value,
      image: this.newAdsForm.get('image')?.value,
      user_id: this.newAdsForm.get('user_id')?.value,
    };

    console.log('newAdsData', newAdsData);
  }
}
