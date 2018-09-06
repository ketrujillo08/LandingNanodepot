import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingAComponent } from './landing-a/landing-a.component';
import { PagesComponent } from './pages.component';
import { Pages_Routes } from './pages.route';
import { LayoutsModule } from '../layouts/layouts.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    Pages_Routes,
    LayoutsModule,
    ComponentsModule
  ],
  declarations: [
    LandingAComponent,
    PagesComponent,
   
  ],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
