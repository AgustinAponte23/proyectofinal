import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardUserGuard } from '../plus/guards/guard-user/guard-user.guard';
import { DetailsSecondComponent } from './details-second/details-second.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardSecondRoutingModule { }
