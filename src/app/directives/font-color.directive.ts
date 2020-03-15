import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFontColor]'
})
export class FontColorDirective {

  @Input('appFontColor') fontColor: string;

  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
    this.el = el;
  }

  private setFontColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontColor(this.fontColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontColor(null);
  }


}
