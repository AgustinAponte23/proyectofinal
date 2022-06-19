import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { alumnos } from '../../plus/interfaces/alumnos';
import { AlumnosService } from '../../plus/servicios/alumnos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  listaAlumnos: alumnos[] = [];

  displayedColumns: string[] = ['posicion', 'Nombre/apellido', 'Curso', 'Inscripción', 'Acciones'];
  dataSource!: MatTableDataSource<any>;


  constructor(private _alumnosService: AlumnosService, private _snackBar: MatSnackBar) { //Llamar al servicio}
    
    /*somedata$: Observable<any>;

    Obten[] = [ 
      { id: 1, desc: 'One', data: 100 }, 
      { id: 2, desc: 'Two', data: 200 }, 
      { id: 3, desc: 'Three', data: 300 } 
    ]; 
    someData$: Observable<SomeClass[]>; this.someData$ = of(this.someData).subscribe((res) => { this.someData = res.map((r) => { r.data = Math.floor(r.data * 1.1); return r; }); });*/
  } 

  ngOnInit(): void {
    this.cargarAlumnos(); // Se ejecuta primero
  }

  // Agregar alumno
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
