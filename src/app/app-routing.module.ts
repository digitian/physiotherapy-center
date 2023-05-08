import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin/admin.guard';
import { LoginComponent } from './admin/login/login.component';
import { PanelComponent } from './admin/panel/main/panel.component';
import { AboutComponent } from './shared/about/about.component';
import { AppointmentComponent } from './shared/appointment/appointment.component';
import { ContactComponent } from './shared/contact/contact.component';
import { HomeComponent } from './shared/home/home.component';
import { ServicesComponent } from './shared/services/services.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: PanelComponent, canActivate: [AdminGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
