import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  enMayusculas: boolean = false;

  orderBy: string =''

  heroes: Heroe[] = [
    { name: 'Superman', fly: true, color: Color.blue},
    { name: 'Batman', fly: false, color: Color.black},
    { name: 'Robin', fly: false, color: Color.green},
    { name: 'Daredevil', fly: false, color: Color.red},
    { name: 'Linterna Verde', fly: true, color: Color.green}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeOrderBy(value: string) {
    this.orderBy = value;
  }

}
