import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';

// Pipes
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    NumbersComponent, 
    NoComunesComponent, 
    BasicsComponent, 
    OrderComponent,
    MayusculasPipe,
    FlyPipe,
    OrderPipe,
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
