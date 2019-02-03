import { Component, OnInit } from '@angular/core';

import {AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async signInWithEmailAndPassword() {
    let redirect = await this.authService.signInWithEmailAndPassword(this.email, this.password) || false;
    if(redirect) {
      this.router.navigateByUrl('/home');
    } else {
      this.email = "";
      this.password = "";
    }
  }

}
