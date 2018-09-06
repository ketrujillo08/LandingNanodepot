import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SPRIO_URL_SERVICE, TOKEN_SPIRO, API_KEY_MAILCHIMP } from '../../config/config';
import { Lead } from '../../models/lead.model';
@Injectable({
  providedIn: 'root'
})
export class SpiroService {

  constructor(
    public _http:Http
  ) { }

  async enviarFormularioLanding(formulario:Lead):Promise<Object>{
    let url = SPRIO_URL_SERVICE + '/contacto';
    let headers = new Headers({
      //'Content-Type':'application/x-www-form-urlencoded',
      'token':TOKEN_SPIRO
    });
    const spiroRes =  await this._http.post(url,formulario,{headers:headers}).toPromise();

    url = SPRIO_URL_SERVICE + '/mailchimp/list/fe0e59ec6f/members';
    headers.set('token',API_KEY_MAILCHIMP);
    const mailchimpRes = await this._http.post(url,formulario,{headers:headers}).toPromise();

    console.log(mailchimpRes);
   
    return {
      spiro:spiroRes,
      mailchimp:mailchimpRes
    }

  }
}
