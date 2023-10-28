import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      if (targetElement.getAttribute('id') === 'modal-background') {
        targetElement.style.display = 'none';
      }
    }
  }
}
