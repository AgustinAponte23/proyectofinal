import { Component, OnInit } from '@angular/core';
import { alumnos } from '../../plus/interfaces/alumnos';
import { AlumnosService } from '../../plus/servicios/alumnos.service';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private _alumnosService: AlumnosService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarAlumnos(); // Se ejecuta primero
  }

  cargarAlumnos(){
    this.listaAlumnos = this._alumnosService.getAlumnos();
    this.dataSource = new MatTableDataSource(this.listaAlumnos);
  }

  permiso(){
    // Alerta eliminar
    this._snackBar.open('Necesitas ser administrador para realizar una acción', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    }); 
  }

}
