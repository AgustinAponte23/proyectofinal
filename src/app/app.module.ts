import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//? "Componentes"
import { CreateComponent } from './componentes/create/create.component';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardSecondComponent } from './componentes/dashboard-second/dashboard-second.component';
import { InicioComponent } from './componentes/dashboard-second/inicio/inicio.component';
import { SidenavComponent } from './componentes/dashboard-second/sidenav/sidenav.component';
import { ToolbarComponent } from './componentes/dashboard-second/toolbar/toolbar.component';

// ? "Angular material"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    DashboardSecondComponent,
    InicioComponent,
    SidenavComponent,
    ToolbarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    LayoutModule,
    MatListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
