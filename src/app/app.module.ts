import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './Components/email/email.component';
import { InfoComponent } from './Components/info/info.component';
import { MenuComponent } from './Components/menu/menu.component';
import { SearchComponent } from './Components/search/search.component';
import { EmailButtonComponent } from './Components/email-button/email-button.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    InfoComponent,
    MenuComponent,
    SearchComponent,
    EmailButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
