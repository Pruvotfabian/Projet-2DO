import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.css']
})
export class PasswordForgetComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
