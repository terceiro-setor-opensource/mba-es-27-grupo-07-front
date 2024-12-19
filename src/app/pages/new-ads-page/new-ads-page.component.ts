import { Component } from '@angular/core';

@Component({
  selector: 'app-new-ads-page',
  templateUrl: './new-ads-page.component.html',
  styleUrl: './new-ads-page.component.css'
})
export class NewAdsPageComponent {
  selectedFile: File | null = null;
  status: string; // Propriedade para armazenar o valor selecionado

  constructor() {
    this.status = ''; // Inicializa a propriedade
  }

  // Método opcional para lidar com mudanças, se necessário
  onStatusChange(event: any) {
    this.status = event.value; // Atualiza o valor selecionado
  }

  onFileSelected(file: File) {
    console.log('Imagem selecionada:', file);
    // Aqui você pode fazer o que quiser com o arquivo, como enviá-lo para um servidor
  }
}
