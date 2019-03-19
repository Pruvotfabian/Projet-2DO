import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin/signin.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { UserComponent } from './user/user.component';

import { AuthGuardianService } from "./service/auth-guardian.service";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'password-forget', component: PasswordForgetComponent},
  { path: 'verification-email', component: EmailVerifyComponent},
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuardianService] },
  { path: 'new-todo', component: TodoCreateComponent, canActivate: [AuthGuardianService] },
  { path: 'sign-in', component: SigninComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuardianService]},
  { path: 'sign-up', component: SignupComponent},
  { path: '**', component: Erreur404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
