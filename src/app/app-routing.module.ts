import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './components/private/private.component';
import { PublicComponent } from './components/public/public.component';

import {AuthGuard} from '@auth0/auth0-angular'
const routes: Routes = [
  {path:'public', component: PublicComponent},
  {path: 'private', component: PrivateComponent, canActivate:[AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo:'public'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
