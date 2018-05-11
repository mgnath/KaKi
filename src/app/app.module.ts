import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule, Router} from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// Local Modules
import {AngularMaterialModule} from './vendor.modules/angular.material.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { AboutComponent } from './views/about/about.component';
import { AppRoutes } from './routes';
import { HomeComponent } from './views/home/home.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'KaKi')
  ],
  exports: [ RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
