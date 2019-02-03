import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    public toastController: ToastController) { }

  async signInWithEmailAndPassword(email, password) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);

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
