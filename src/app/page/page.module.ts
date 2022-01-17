import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivotDashboardComponent } from './privot-dashboard/privot-dashboard.component';


@NgModule({
  declarations: [
    PageComponent,
    LandingPageComponent,
    DashboardComponent,
    PrivotDashboardComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule { }
