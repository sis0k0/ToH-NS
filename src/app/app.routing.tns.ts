import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/(dashboardTab:dashboard//heroesTab:heroes)', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent, outlet: 'dashboardTab'  },
  // { path: 'dashboard/:id', component: PlayerDetailComponent, outlet: 'dashboardTab'  },

  { path: 'heroes', component: HeroesComponent, outlet: 'heroesTab' },
  // { path: 'heroes/:id', component: TeamDetailComponent, outlet: 'heroesTab' },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
