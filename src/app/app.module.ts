import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

import { HeroService }          from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
