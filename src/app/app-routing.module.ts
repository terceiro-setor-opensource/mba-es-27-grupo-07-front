import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewAccountPageComponent } from './pages/new-account-page/new-account-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import { AdsPageComponent } from './pages/ads-page/ads-page.component';
import { MyAdsPageComponent } from './pages/my-ads-page/my-ads-page.component';

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
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'meu-perfil',
    component: MyProfilePageComponent,
  },
  {
    path: 'anuncios',
    component: AdsPageComponent,
  },
  {
    path: 'meus-anuncios',
    component: MyAdsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
