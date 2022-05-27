import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    
  });

  constructor(private formBuilder:FormBuilder, private _snackBar: MatSnackBarModule, private router:Router) { 

  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['' , Validators.required],
      contraseña: ['' , [Validators.required , Validators.minLength(5)]],
    });
  }

  onSubmit(){
     
  }

  
  
}



