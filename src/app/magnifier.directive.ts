import { Directive, HostBinding, HostListener } from '@angular/core';

// this directive is used to modify the width of an image element
@Directive({
  selector: '[appMagnifier]'
})
export class MagnifierDirective {
  @HostBinding('width') width = 200;
  @HostListener('mouseenter',['$event'])
  onHover(){ // function to increase the width of the image
    this.width = 300;
  }
}
