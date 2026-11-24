
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComoDenunciarRoutingModule } from './como-denunciar-routing-module';
import { ComoDenunciar } from './como-denunciar/como-denunciar';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [ComoDenunciar],
  imports: [
    CommonModule,
    ComoDenunciarRoutingModule,
    SharedModule
  ]
})
export class ComoDenunciarModule { }
