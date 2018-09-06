import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WINDOW_PROVIDERS } from './window/window.service';
import { UrlVarsService } from './url-vars/url-vars.service';
import { SpiroService } from './spiro/spiro.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    UrlVarsService,
    SpiroService
  ]
})
export class ServiceModule { }
