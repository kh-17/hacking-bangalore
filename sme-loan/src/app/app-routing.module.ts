import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoanFormComponent } from './components/loan-form/loan-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: UserSignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UserLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'loan-form',
    component: LoanFormComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
