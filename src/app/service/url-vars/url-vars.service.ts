import { Injectable } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlVarsService {
  public leadsource:string = "";
  public anuncio:string = "";
  constructor(
    public _activetedRoute:ActivatedRoute,
  ) {
    _activetedRoute.queryParams.subscribe(params=>{
      this.leadsource = params['leadsource'];
      this.anuncio = params['anuncio'];
    });
   }
}
