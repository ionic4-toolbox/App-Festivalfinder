import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BandsPage } from './bands.page';
import { InfoComponent } from "./info/info.component";

const routes: Routes = [
  {
    path: "",
    component: BandsPage
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
  declarations: [BandsPage, InfoComponent]
})
export class BandsPageModule {}
