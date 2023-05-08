import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AppointmentComponent } from './shared/appointment/appointment.component';
import { ServicesComponent } from './shared/services/services.component';
import { PanelComponent } from './admin/panel/main/panel.component';
import { LoginComponent } from './admin/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    AppointmentComponent,
    ServicesComponent,
    PanelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
