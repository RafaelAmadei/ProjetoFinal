import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing-module';
import { Perfil } from './perfil/perfil';
import { SharedModule } from '../../shared/shared-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Perfil
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PerfilModule { }