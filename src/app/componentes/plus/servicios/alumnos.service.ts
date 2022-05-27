import { Injectable } from '@angular/core';
import { alumnos } from '../interfaces/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  listaAlumnos: alumnos[] = [
    { posicion: 'Primero' , nombre: 'Sofia', apellido: 'Chavez', curso: 'Angular', inscripcion: 'Octubre'},
    { posicion: 'Segundo' , nombre: 'Daniel', apellido: 'Dominguez', curso: 'React', inscripcion: 'Junio'},
    { posicion: 'Tercero' , nombre: 'Micaela', apellido: 'Perez', curso: 'Vue', inscripcion: 'Abril'},
    { posicion: 'Cuarto' , nombre: 'Gonzalo', apellido: 'Zapata', curso: 'Git', inscripcion: 'Febrero'},
  ];

  constructor() { }

  getAlumnos(){
    return this.listaAlumnos.slice();
  }

  eliminarAlumno(index:number){
    this.listaAlumnos.splice(index, 1);
  }

  agregarAlumno(alumno: alumnos){
    this.listaAlumnos.push(alumno);
  }
  

  getAlumno(index: number){
    return this.listaAlumnos[index];
  }

  editarAlumno(alumno : alumnos, index: number){
    this.listaAlumnos[index].posicion = alumno.posicion
      this.listaAlumnos[index].nombre = alumno.nombre
      this.listaAlumnos[index].apellido = alumno.apellido
      this.listaAlumnos[index].curso = alumno.curso
      this.listaAlumnos[index].inscripcion = alumno.inscripcion
  }


  
}
