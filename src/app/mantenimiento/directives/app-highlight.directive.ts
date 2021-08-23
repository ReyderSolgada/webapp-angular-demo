import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {
  @Input() appHighlight = 1;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(1);
  }

  private highlight(status: number) {
    if (status === 0) {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else {
      this.el.nativeElement.style.backgroundColor = '';
    }
  }
}
