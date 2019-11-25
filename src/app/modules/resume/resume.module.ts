import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { components } from './components';
import { containers } from './containers';
import { effects } from './effects';
import { reducers } from './reducers';
import { ResumeRoutingModule } from './resume-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ResumeRoutingModule,
    StoreModule.forFeature('ResumeModule', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    ...components,
    ...containers,
  ],
})
export class ResumeModule { }
