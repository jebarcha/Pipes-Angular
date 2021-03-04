import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NoComunesComponent } from './sales/pages/no-comunes/no-comunes.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  { path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
