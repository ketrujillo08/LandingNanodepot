import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9_FgUBjl6Dv1ahUpfPODaN-M8ccoQo7o'
    })
  ],
  declarations: [
    MapaComponent,
    FormularioComponent
  ],
  exports:[
    MapaComponent,
    FormularioComponent
  ]
})
export class ComponentsModule { }
