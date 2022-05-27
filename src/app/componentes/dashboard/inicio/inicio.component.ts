import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { alumnos } from '../../plus/interfaces/alumnos';
import { AlumnosService } from '../../plus/servicios/alumnos.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  listaAlumnos: alumnos[] = [];

  displayedColumns: string[] = ['posicion', 'Nombre/apellido', 'Curso', 'Inscripción', 'Acciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _alumnosService: AlumnosService, private _snackBar: MatSnackBar) { } //Llamar al servicio

  ngOnInit(): void {
    this.cargarAlumnos(); // Se ejecuta primero
  }

  cargarAlumnos(){
    this.listaAlumnos = this._alumnosService.getAlumnos();
    this.dataSource = new MatTableDataSource(this.listaAlumnos);
  }

  eliminarAlumno(index:number){
    console.log(index);
    // Eliminar alumno
    this._alumnosService.eliminarAlumno(index);
    this.cargarAlumnos();

    // Alerta eliminar
    this._snackBar.open('Alumno eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    }); 

   
  }

}
