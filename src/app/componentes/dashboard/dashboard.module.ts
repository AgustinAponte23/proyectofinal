import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//? "Componentes"
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';

//? "Angular material" 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { PipesPipe } from '../plus/pipes/pipes.pipe';
import { AumentarDirective } from '../plus/directivas/aumentar.directive';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    ToolbarComponent,
    SidenavComponent,
    CrearAlumnoComponent,
    EditarAlumnoComponent,
    PipesPipe,
    AumentarDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
