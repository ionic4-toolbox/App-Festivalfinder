import { Component, OnInit } from '@angular/core';

import {User, AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  user: User = {email: "", password: ""};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signInWithEmailAndPassword() {
    this.authService.signInWithEmailAndPassword(this.user);
  }

}
