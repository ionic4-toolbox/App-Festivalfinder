import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Festival {
  name: string;
  id: string;
  startDate: Date;
  endDate: Date;
}

@Injectable({
  providedIn: "root"
})
export class FestivalsService {

  private festivalCollection: AngularFirestoreCollection<Festival>;
  private festivals: Observable<Festival[]>;

  constructor(db: AngularFirestore) {
    this.festivalCollection = db.collection<Festival>("Festivals");

    this.festivals = this.festivalCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getFestivals() {
    return this.festivals;
  }

  getFestival(id) {
    return this.festivalCollection.doc<Festival>(id).valueChanges();
  } 
}
