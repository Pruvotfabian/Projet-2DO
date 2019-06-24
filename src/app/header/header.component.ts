import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import * as $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService, public af: AngularFireAuth) { }

  ngOnInit() {

$(document).ready(function(){
  
  $('.toggle').click(function(){
    $('.toggle').toggleClass('active');
    $('.block').toggleClass('active');
  $('.navigation').click(function(){
    $('.toggle').removeClass('active');
    $('.block').removeClass('active');
  });
  $('.navigations').click(function(){
    $('.toggle').removeClass('active');
    $('.block').removeClass('active');
  });
  $('.headnew').click(function(){
    $('.toggle').removeClass('active');
    $('.block').removeClass('active');
  });
  });

 
});


    this.af.auth.onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.SignOut();
  }


}