import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { FestivalsPage } from "./festivals.page";
import { InfoComponent } from "./info/info.component";

const routes: Routes = [
  {
    path: "",
    component: FestivalsPage
  }, {
    path: ":id",
    component: InfoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FestivalsPage, InfoComponent]
})
export class FestivalsPageModule {}
