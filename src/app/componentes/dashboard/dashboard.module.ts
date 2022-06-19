import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//? "Componentes"
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { NavegationComponent } from './navegation/navegation.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './datails/details.component';


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
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    DashboardComponent,
    NavegationComponent,
    InicioComponent,
    CrearAlumnoComponent,
    EditarAlumnoComponent,
    PipesPipe,
    AumentarDirective,
    FooterComponent,
    DetailsComponent,

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
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
