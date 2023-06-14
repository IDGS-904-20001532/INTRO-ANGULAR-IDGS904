import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs904';

  duplicarValor(valor:number):number{
    return valor*2;
  }

  Alumno={
    matricula:12345,
    nombre:'Angel',
    fechaNacimiento: new Date(),
    pagoIns:2759.23
  };
}
