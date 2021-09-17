import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './components/private/private.component';
import { PublicComponent } from './components/public/public.component';

const routes: Routes = [
  {path:'public', component: PublicComponent},
  {path: 'private', component: PrivateComponent},
  {path: '', pathMatch: 'full', redirectTo:'public'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
