import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import * as firebase from 'firebase';
import * as $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService) { }

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
  });
 
});


    firebase.auth().onAuthStateChanged(
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
;

}