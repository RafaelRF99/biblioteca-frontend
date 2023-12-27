import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFont]',
})
export class FontDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.fontFamily = '"Preahvihear", sans-serif';
  }
}
