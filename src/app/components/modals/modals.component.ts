import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modals',
  imports: [],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css',
})
export class ModalsComponent {
  // รับค่าเป็น type string จาก parent component
  @Input() message?: string;

  // emit กลับ parent component
  @Output() close = new EventEmitter<void>();

  onClose() {
    // emit event
    this.close.emit();
  }
}
