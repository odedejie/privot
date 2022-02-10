import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PrivotDashboardComponent } from './privot-dashboard/privot-dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {path: '', component: LandingPageComponent},
      {path: 'privot-dashboard', component: PrivotDashboardComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
