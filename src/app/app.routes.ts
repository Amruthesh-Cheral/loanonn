import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './shared/layout/full/full.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { AdminComponent } from './modules/admin/admin.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LoginComponent } from './modules/login/login.component';
import { ServiceComponent } from './modules/service/service.component';
import { SigninComponent } from './modules/signin/signin.component';
import { AdminLoginComponent } from './modules/admin-login/admin-login.component';
import { LoanAppComponent } from './modules/loan-app/loan-app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loan-app',
    component: FullComponent,
    children: [{ path: '', component: LoanAppComponent }],
  },
  {
    path: 'admin',
    component: FullComponent,
    children: [{ path: '', component: AdminComponent }],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }