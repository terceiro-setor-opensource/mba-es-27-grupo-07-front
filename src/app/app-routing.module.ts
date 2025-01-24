import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewAccountPageComponent } from './pages/new-account-page/new-account-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import { AdsPageComponent } from './pages/ads-page/ads-page.component';
import { MyAdsPageComponent } from './pages/my-ads-page/my-ads-page.component';
import { EditMyProfilePageComponent } from './pages/edit-my-profile-page/edit-my-profile-page.component';
import { NewAdsPageComponent } from './pages/new-ads-page/new-ads-page.component';
import { EditAdsPageComponent } from './pages/edit-ads-page/edit-ads-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'nova-conta',
    component: NewAccountPageComponent,
  },
  {
    path: 'esqueci-senha',
    component: ForgotPasswordPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'meu-perfil',
    component: MyProfilePageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'editar-meu-perfil',
    component: EditMyProfilePageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'anuncios',
    component: AdsPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'meus-anuncios',
    component: MyAdsPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'criar-novo-anuncio',
    component: NewAdsPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'editar-anuncio',
    component: EditAdsPageComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
