import { Component, OnInit } from '@angular/core';

import {AuthService } from "../../services/auth.service";
import {User} from "../../services/user.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signInWithEmailAndPassword() {
    this.authService.signInWithEmailAndPassword(this.email, this.password);
  }

}
