import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

    nameLower: string = 'chuy';
    nameUpper: string = 'CHUY';
    nameComplete: string = 'cHuY bArAjAs';

    fecha: Date = new Date(); // el dia de hoy
    
  }
