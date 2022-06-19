import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  Router: any;
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.permiso()) {
      return true;
    }
    alert('No tienes acceso')
    return false;
  }
  permiso():boolean{
    return true; //Tiene acceso a detalles de los cursos porque esta logeado
  }
}
