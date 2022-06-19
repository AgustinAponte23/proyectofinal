// Importaciones
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../plus/servicios/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  formulario: FormGroup = new FormGroup({
    
  });

  data: any = {};


  constructor(private formBuilder:FormBuilder, private _snackBar: MatSnackBar, private router:Router, private service: DataService) { 
    
  }

   
  
  // Validaciones
  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.data = data;
    })
    this.formulario = this.formBuilder.group({
      nombre: ['' , Validators.required],
      contraseña: ['' , [Validators.required , Validators.minLength(5)]],
    });
  }
  
  // Enviar formulario
  submit(){

    const usuario = this.formulario.value.nombre; // Guardar usuario
    const contraseña = this.formulario.value.contraseña; // Guardar contraseña

   if (usuario == 'Administrador' && contraseña == 'Admin123') {
    this.router.navigate(['/dashboard']) // Dashboard administrador
  }else if (usuario == 'Usuario' && contraseña == 'User123'){
    this.router.navigate(['/dashboard-second']) // Dashboard usuario
  }else{
    this.error(); // Datos invalidos mostrar "error"
  }
  
}

error (){ 
  this._snackBar.open('Usuario o contraseña incorrecta', 'Cerrar', {
    duration: 7000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  }); // Alerta de error con SnackBar
} 
 
}
