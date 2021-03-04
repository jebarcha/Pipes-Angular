import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';



@NgModule({
  declarations: [
    NumbersComponent, 
    NoComunesComponent, 
    BasicsComponent, 
    OrderComponent
  ],
  exports: [
    NumbersComponent, 
    NoComunesComponent, 
    BasicsComponent, 
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
