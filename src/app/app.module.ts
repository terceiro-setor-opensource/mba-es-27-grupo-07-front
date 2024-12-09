import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { NewAccountPageComponent } from './pages/new-account-page/new-account-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdsPageComponent } from './pages/ads-page/ads-page.component';
import { MyAdsPageComponent } from './pages/my-ads-page/my-ads-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LoginPageComponent,
    NewAccountPageComponent,
    HeaderComponent,
    HomePageComponent,
    MyProfilePageComponent,
    MenuComponent,
    AdsPageComponent,
    MyAdsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
