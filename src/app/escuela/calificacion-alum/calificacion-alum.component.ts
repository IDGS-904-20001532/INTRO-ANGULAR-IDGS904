import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})
export class CalificacionAlumComponent {
  @Input() califica!:number;
  starWidth!:number;

  @Output() calificaClick: EventEmitter<string>= new EventEmitter();

  ngOnChanges(){
      this.starWidth=this.califica*76/100;
  }

  onClick(){
    this.calificaClick.emit(`${this.califica}`)
  }

}
