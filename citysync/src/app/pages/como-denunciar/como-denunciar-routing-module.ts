
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComoDenunciar } from './como-denunciar/como-denunciar';

const routes: Routes = [
  {
    path: '',
    component: ComoDenunciar
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComoDenunciarRoutingModule { }
