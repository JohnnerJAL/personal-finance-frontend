import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent {

  private modalIsOpen = false;

  closeModal(e: MouseEvent) {
    console.log(e.target);
    console.log('close');
    this.modalIsOpen = false;
  }

  closeModal2() {
    console.log('close2');
  }

  closeModal3(t: boolean) {
    console.log('STEP FINAL')
    console.log(t);
  }

}
