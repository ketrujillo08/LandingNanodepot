import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UrlVarsService } from '../../service/url-vars/url-vars.service';
import { Lead } from '../../models/lead.model';
import { SpiroService } from '../../service/spiro/spiro.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  formulario:FormGroup;
  lead:Lead = new Lead("",""," ","");
  submitted:boolean=false;
  constructor(
    public _urlVersService:UrlVarsService,
    public _spiroService:SpiroService
  ) { }

  ngOnInit() {
    this.initFormulario();
    this.formulario.controls['anuncio'].setValue(this._urlVersService.anuncio);
    this.formulario.controls['leadsource'].setValue(this._urlVersService.leadsource);
  }

  initFormulario(){
    this.formulario = new FormGroup({
      nombre:new FormControl(null,Validators.required),
      apellido:new FormControl(null,Validators.required),
      phone:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      anuncio:new FormControl(),
      leadsource:new FormControl(),
      description:new FormControl()
    });
  }

  submitForm(){
    if (this.formulario.valid) {
      this.lead.nombre=this.formulario.value.nombre;
      this.lead.apellido=this.formulario.value.apellido;
      this.lead.phone=this.formulario.value.phone;
      this.lead.email=this.formulario.value.email;
      this.lead.anuncio=this.formulario.value.anuncio;
      this.lead.leadsource=this.formulario.value.leadsource;
      this.lead.description=this.formulario.value.description;
      let res = this._spiroService.enviarFormularioLanding(this.lead);
      console.log(res);
    }
  }

}
