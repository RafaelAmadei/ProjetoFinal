
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrarOcorrencia } from './registrar-ocorrencia';

const routes: Routes = [
  {
    path: '',
    component: RegistrarOcorrencia
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarOcorrenciaRoutingModule { }
