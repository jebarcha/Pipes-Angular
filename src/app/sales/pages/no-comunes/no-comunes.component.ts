import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  name: string = 'Jose';
  gender: string = 'male';

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria','Juan','Pedro','Luis','Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente() {
    if (this.gender === 'male') {
      this.name = 'Sagrario';
      this.gender = 'female';
    } else {
      this.name = 'Jesus';
      this.gender = 'male';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  
  // KeyValue Pipe
  persona = {
    nombre: 'Jesus',
    edad: 40,
    direccion: 'Liverpool, UK'
  }


  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: true
    }
  ]


  // Async Pipe
  myObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Data from Promise');
    },3000);
  });

}