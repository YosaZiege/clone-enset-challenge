import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { SponsorshipComponent } from './page/sponsorship/sponsorship.component';
import { HomeComponent } from './page/home/home.component';
import { SoonComponent } from './page/soon/soon.component';
import { OrganizersComponent } from './page/organizers/organizers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sponsor', component: SponsorshipComponent },
  { path: 'soon', component: SoonComponent },
  { path: 'organizers', component: OrganizersComponent },
  { path: '**', component: NotFoundComponent }
];
