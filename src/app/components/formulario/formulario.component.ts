import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UrlVarsService } from '../../service/url-vars/url-vars.service';
import { SpiroService } from '../../service/spiro/spiro.service';
import { Lead } from '../../models/lead.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {
  formulario : FormGroup;
  lead:Lead = new Lead("","","","");
  submitted:boolean = false;

  constructor(
    public _urlVarsService : UrlVarsService,
    public _spiroService: SpiroService
  ) { }

  ngOnInit() {
    this.initFormulario();
    this.formulario.get('anuncio').setValue(this._urlVarsService.anuncio);
    this.formulario.get('leadsource').setValue(this._urlVarsService.leadsource);
  }

  initFormulario(){
    this.formulario = new FormGroup({
      nombre:new FormControl(null,Validators.required),
      apellido:new FormControl(null,Validators.required),
      phone:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      anuncio:new FormControl(),
      leadsource:new FormControl(),
      submit:new FormControl()
    });
  }

  async submitForm(){
    
    //this.formulario.controls['submit'].disable({emitEvent:false});

    if(this.formulario.valid){
      this.submitted = true;
      //this.formulario.controls['submit'].disable({emitEvent:false});
      this.lead.nombre=this.formulario.value.nombre;
      this.lead.apellido=this.formulario.value.apellido;
      this.lead.phone=this.formulario.value.phone;
      this.lead.email=this.formulario.value.email;
      this.lead.anuncio=this.formulario.value.anuncio;
      this.lead.leadsource=this.formulario.value.leadsource;

      let res = await this._spiroService.enviarFormularioLanding(this.lead);

    }
    
  }

}
