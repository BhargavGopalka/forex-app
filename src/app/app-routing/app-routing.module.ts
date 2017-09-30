import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {LoginComponent} from "../login/login.component";
import {SuccessLoginComponent} from "../success-login/success-login.component";
import {NavComponent} from "../nav/nav.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navigation',
    pathMatch: 'full'
  },
  {
    path: 'navigation',
    component: NavComponent
  },
  {
    path: 'navigation/login',
    component: LoginComponent
  },
  {
    path: 'navigation/signUp',
    component: SignUpComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'login/success',
    component: SuccessLoginComponent
  },
  {
    path: 'success',
    component: SuccessLoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
