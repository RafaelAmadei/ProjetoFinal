
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { Header } from '../pages/home/header/header';

@NgModule({
  declarations: [
    Header
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    Header,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class SharedModule { }
