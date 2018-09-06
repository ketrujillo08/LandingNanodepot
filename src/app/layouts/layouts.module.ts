import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
