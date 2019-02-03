import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  genres: string[];
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDoc: AngularFirestoreDocument<User>;
  public user: Observable<User>;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
    let userId = this.afAuth.auth.currentUser ? this.afAuth.auth.currentUser.uid : null;

    if (userId) {
      this.userDoc = this.db.doc("Users/" + userId);
      this.user = this.userDoc.valueChanges();
    }
  }
}
