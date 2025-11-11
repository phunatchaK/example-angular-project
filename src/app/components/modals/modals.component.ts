import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-modals',
  imports: [],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css',
})
export class ModalsComponent {
  @Input() message?: string;
  // @Output() close? = new EventEmitter<v>()
}
