import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
  label = '';

  @Input()
  title = '';

  @Input()
  name = '';

  @Input()
  icon = '';

  @Input()
  placeholder = '';

  @Input() required: boolean | string = false;

  @Input()
  type="text"

  @Input()
  value: number | string | undefined;

  @Output()
  valueChange = new EventEmitter<string>();

  emitValue(newValue: string) {
    this.valueChange.emit(newValue);
  }

}
