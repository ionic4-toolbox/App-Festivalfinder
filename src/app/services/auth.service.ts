import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  constructor(private afAuth: AngularFireAuth,
    public toastController: ToastController) { }

  async signInWithEmailAndPassword(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

      if (result) {
        const toast = await this.toastController.create({
          message: 'Erfolgreich eingeloggt',
          duration: 2000,
          color: "success"
        });
        toast.present();
      }
    } catch (error) {
      console.error(error)
      const toast = await this.toastController.create({
        message: 'Login fehlgeschlagen!',
        duration: 2000,
        color: "danger"
      });
      toast.present();
    }
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }
}
