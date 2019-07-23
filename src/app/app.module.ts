import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './Components/email/email.component';
import { InfoComponent } from './Components/info/info.component';
import { MenuComponent } from './Components/menu/menu.component';
import { SearchComponent } from './Components/search/search.component';
import { EmailButtonComponent } from './Components/email-button/email-button.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupFormComponent } from './Components/signup-form/signup-form.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserSelecterComponent } from './Components/user-selecter/user-selecter.component';
import { EmailCreatorComponent } from './Components/email-creator/email-creator.component';

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupFormComponent,
    pathMatch:'full'
  }

];
@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    InfoComponent,
    MenuComponent,
    SearchComponent,
    EmailButtonComponent,
    LoginFormComponent,
    HomeComponent,
    SignupFormComponent,
    UserListComponent,
    UserSelecterComponent,
    EmailCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
