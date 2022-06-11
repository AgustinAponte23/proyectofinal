import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { interval, Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent /*implements OnInit, OnDestroy*/ {


  /*subject$ = new Subject(); //Primer pipe async

  ngOnInit(): void {
    this.initInterval();
  }

  initInterval() {
    const interval$ = interval(1000);
    interval$.pipe(
      takeUntil(this.subject$)
    ).subscribe(s => {})
  }
  
  ngOnDestroy(): void {
   this.subject$.next(value);
   this.subject$.complete();
  }*/

  isHandset$: Observable<any> = this.breakpointObserver.observe(Breakpoints.Handset) //Segundo pipe async implementado
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}

  






/*function value(value: any) {
  throw new Error('Function not implemented.');
}*/

