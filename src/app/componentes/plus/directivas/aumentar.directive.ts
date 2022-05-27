import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Aumentar]'
})
export class AumentarDirective {

  //this.elemento.nativeElement.style.fontSize
  

  constructor(private el: ElementRef ) {
    this.el.nativeElement.style.fontSize = "20px";
   }

}
