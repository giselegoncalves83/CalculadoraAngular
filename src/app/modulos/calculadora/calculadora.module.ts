import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from 'src/app/componentes/calculadora/calculadora.component';
import { CalculadoraService } from 'src/app/servicos/calculadora.service';

@NgModule({
  declarations: [
    CalculadoraComponent
  ],

  imports: [
    CommonModule
  ],

  exports:[
    CalculadoraComponent
  ],

  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
