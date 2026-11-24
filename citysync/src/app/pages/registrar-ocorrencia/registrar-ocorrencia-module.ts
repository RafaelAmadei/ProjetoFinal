
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistrarOcorrenciaRoutingModule } from './registrar-ocorrencia-routing-module';
import { RegistrarOcorrencia } from './registrar-ocorrencia';

import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [
    RegistrarOcorrencia
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegistrarOcorrenciaRoutingModule,
    SharedModule
  ]
})
export class RegistrarOcorrenciaModule { }
