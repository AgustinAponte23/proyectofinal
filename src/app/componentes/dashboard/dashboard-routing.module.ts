import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from './datails/details.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';

const routes: Routes = [
  {
    path: '' , component: DashboardComponent,
  },
  {
    path: 'iniciar-sesion' , component: LoginComponent
  },

  {
    path: 'crear-alumno' , component: CrearAlumnoComponent
  },
  {
    path: ':index/editar-alumno' , component: EditarAlumnoComponent
  },
  {
    path: 'detalles-cursos' , component: DetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
