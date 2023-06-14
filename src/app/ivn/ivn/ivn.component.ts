import { Component } from '@angular/core';

@Component({
  selector: 'app-ivn',
  template: `
  <h1>Alumnos IVN</h1>

<div>
    <b>
      Matricula: 
    </b>{{AlumnoIVN.matricula}}
  </div>
  <div>
    <b>
      Nombre: 
    </b>{{AlumnoIVN.nombre}}
  </div>
  <div>
    <b>
      Fecha: 
    </b>{{AlumnoIVN.fechaNacimiento }}
  </div>
  <div>
    <b>
      Pago: 
    </b>{{AlumnoIVN.pagoIns }}
  </div>`,
})
export class IvnComponent {
  AlumnoIVN={
    matricula:12345,
    nombre:'Angel',
    fechaNacimiento: new Date(),
    pagoIns:2759.23
  };
}
