import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routes } from './app.route';
import { components } from './components';
import { containers } from './containers';
import { effects } from './stores/effects';
import { reducers } from './stores/reducers';
import { IntroComponent } from './components/intro/intro.component';
import { IntroContainerComponent } from './containers/intro-container/intro-container.component';

@NgModule({
  imports: [

    // Angular Imports.
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    // NgRX Store Imports.
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

    // NgRX Effects Imports.
    EffectsModule.forRoot(effects),

  ],
  declarations: [
    ...components,
    ...containers,
    AppComponent,
    IntroComponent,
    IntroContainerComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
