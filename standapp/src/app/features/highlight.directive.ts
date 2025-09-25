import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eref: ElementRef) {

    // console.log(this.eref.nativeElement.innerText);
  }

  @HostListener('mouseenter')
  public mouseEnter() {
    this.eref.nativeElement.style.backgroundColor = 'blue';
  }
  
  @HostListener('mouseleave')
  public mouseLeave() {
    this.eref.nativeElement.style.backgroundColor = '';
  }

}
