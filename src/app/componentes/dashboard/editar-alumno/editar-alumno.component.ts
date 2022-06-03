import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { alumnos } from '../../plus/interfaces/alumnos';
import { AlumnosService } from '../../plus/servicios/alumnos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})
export class EditarAlumnoComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  formulario: FormGroup;

  indice : number = 0;

  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver, private rout: ActivatedRoute, private _alumnosService: AlumnosService, private router:Router, private _snackBar: MatSnackBar) { 
    this.formulario= this.fb.group({
      posicion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', Validators.required],
      inscripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.rout.params.subscribe(params=>{
      this.indice = params['index'];
      this.formulario.patchValue(this._alumnosService.getAlumno(this.indice));
    })
  }

  editarAlumno(){
    let formValue = this.formulario.value; //Obtuve el valor del formulario
    let alumnito = this._alumnosService.getAlumno(this.indice);
    
    this._alumnosService.editarAlumno(formValue, this.indice); /*Tomar según el indice un alumno y actualizarlo con los datos modificados*/ 

    // Redirección
    this.router.navigate(['/dashboard']) // Dashboard administrador

    // Alerta
    this._snackBar.open('Alumno modificado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    }); 
  }


}
