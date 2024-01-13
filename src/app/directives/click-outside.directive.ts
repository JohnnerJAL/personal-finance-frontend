import { ContentChild, Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  exportAs: 'appClickOutside',
})
export class ClickOutsideDirective {

  constructor(private elementRef: ElementRef) { }

  @Output() directiveEvent = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event', '$event.target'])

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) return;

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) console.log('clicked outside directive');
    if (!clickedInside) this.directiveEvent.emit(false);
  }

}
