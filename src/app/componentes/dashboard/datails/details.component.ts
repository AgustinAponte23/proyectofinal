import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset) //Segundo pipe async implementado
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
