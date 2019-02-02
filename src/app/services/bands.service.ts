import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Band {
  name: string;
  id: string;
}

@Injectable({
  providedIn: "root"
})
export class BandsService {

  private bandCollection: AngularFirestoreCollection<Band>;
  private bands: Observable<Band[]>;

  constructor(db: AngularFirestore) {
    this.bandCollection = db.collection<Band>("Bands");

    this.bands = this.bandCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getBands() {
    return this.bands;
  };

  getBand(id) {
    return this.bandCollection.doc<Band>(id).valueChanges();
  };
}
