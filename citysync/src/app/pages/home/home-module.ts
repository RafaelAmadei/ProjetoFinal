import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home/home';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }