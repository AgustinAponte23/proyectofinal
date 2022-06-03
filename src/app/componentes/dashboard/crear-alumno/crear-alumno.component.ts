import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { alumnos } from '../../plus/interfaces/alumnos';
import { AlumnosService } from '../../plus/servicios/alumnos.service';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.scss']
})
export class CrearAlumnoComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver, private _alumnosService: AlumnosService, private _snackBar: MatSnackBar, private router:Router ) { 
    this.formulario= this.fb.group({
      posicion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', Validators.required],
      inscripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarAlumno(){

    // Alumnos
    const user: alumnos = {
      posicion: this.formulario.value.posicion,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      curso: this.formulario.value.curso,
      inscripcion: this.formulario.value.inscripcion
    }
    
    this._alumnosService.agregarAlumno(user);

    // Redirección
    this.router.navigate(['/dashboard']) // Dashboard administrador
    
    // Alerta
    this._snackBar.open('Alumno agregado correctamente', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    }); 
  }

}
