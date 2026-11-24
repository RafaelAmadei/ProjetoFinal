import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExplorarLocais } from './explorar-locais/explorar-locais';

const routes: Routes = [
  {
    path: '',
    component: ExplorarLocais
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorarLocaisRoutingModule { }