import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent {

  @Output() closingEvent = new EventEmitter<boolean>();

  @ViewChild('modal_container') container!: ElementRef;

  closeModal() {
    this.closingEvent.emit(false);
  }

  clickOnBackground(event: MouseEvent) {
    !this.container.nativeElement.contains(event.target) && this.closeModal();
  }

}
