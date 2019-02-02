import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'festivals', loadChildren: './pages/festivals/festivals.module#FestivalsPageModule' },
  { path: 'festivals/:id', loadChildren: './pages/festivals/festivals.module#FestivalsPageModule' },
  { path: 'bands', loadChildren: './pages/bands/bands.module#BandsPageModule' },
  { path: 'bands/:id', loadChildren: './pages/bands/bands.module#BandsPageModule' },
  { path: 'auth', loadChildren: './pages/auth/auth.module#AuthPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
