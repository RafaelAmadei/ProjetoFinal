import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorarLocaisRoutingModule } from './explorar-locais-routing-module';
import { ExplorarLocais } from './explorar-locais/explorar-locais';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [
    ExplorarLocais
  ],
  imports: [
    CommonModule,
    ExplorarLocaisRoutingModule,
    SharedModule
  ]
})
export class ExplorarLocaisModule { }