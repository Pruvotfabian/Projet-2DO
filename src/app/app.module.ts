import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin/signin.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { UserComponent } from './user/user.component';

import { AuthService } from './service/auth.service';
import { TodoService } from './service/todo.service';
import { AuthGuardianService } from './service/auth-guardian.service';
import { MentionComponent } from './mention/mention.component';
import { AproposComponent } from './apropos/apropos.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TodoListComponent,
    TodoCreateComponent,
    HeaderComponent,
    HomeComponent,
    AccueilComponent,
    FooterComponent,
    PasswordForgetComponent,
    EmailVerifyComponent,
    Erreur404Component,
    UserComponent,
    MentionComponent,
    AproposComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    TodoService,
    AuthGuardianService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
