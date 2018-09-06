import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Page500Component } from './page500/page500.component';
import { APP_ROUTES } from './app.route';
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './service/service.module';


@NgModule({
  declarations: [
    AppComponent,
    Page500Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
