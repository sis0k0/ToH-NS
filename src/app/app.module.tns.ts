import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app.routing.tns';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule,
    
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
  ],
  providers: [
    HeroService,
    MessageService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
