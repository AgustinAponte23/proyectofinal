import { NgModule } from '@angular/core';
import { RouterModule, Routes,} from '@angular/router';
import { CreateComponent } from './componentes/create/create.component';
import { DashboardSecondComponent } from './componentes/dashboard-second/dashboard-second.component';
import { LoginComponent } from './componentes/login/login.component';

const routs: Routes =[
    {
        path: '' , redirectTo:'/iniciar-sesion', pathMatch:'full'
    },
    {
        path: 'crear-cuenta' , component: CreateComponent
    },
    {
        path: 'iniciar-sesion' , component: LoginComponent 
    },
    {
        path: 'dashboard' ,loadChildren: () => import('./componentes/dashboard/dashboard.module').then(x => x.DashboardModule),
    },
    /*{
        path: 'detalles-cursos' ,loadChildren: () => import('./componentes/details/details.module').then(d => d.DetailsModule)
    },*/
    {
        path: 'dashboard-second' , component: DashboardSecondComponent
    },
];

@NgModule({
    imports : [RouterModule.forRoot(routs)],
    exports : [RouterModule]
})
export class AppRoutingModule {}