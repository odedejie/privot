import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingPageComponent},
  {
    path: '',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
