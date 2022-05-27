import { Pipe, PipeTransform } from '@angular/core';
import { alumnos } from '../interfaces/alumnos';

@Pipe({
  name: 'nombreapellido'
})
export class PipesPipe implements PipeTransform {

  transform(alumno: alumnos): unknown {
    return alumno.nombre + ' ' + alumno.apellido ;
  }

}
