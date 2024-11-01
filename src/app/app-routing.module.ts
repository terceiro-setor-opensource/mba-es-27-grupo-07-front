import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewAccountPageComponent } from './pages/new-account-page/new-account-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'nova-conta',
    component: NewAccountPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
