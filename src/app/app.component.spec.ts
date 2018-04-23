import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { AppRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from './vendor.modules/angular.material.module';
import {Routes, RouterModule, Router} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AngularMaterialModule,
       RouterModule.forRoot(AppRoutes)
     ],
      declarations: [
        AppComponent,
        NavComponent,
        AboutComponent,
        HomeComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'KaKi'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('KaKi');
  }));
});
