import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracking-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tracking-input.component.html',
  styleUrls: ['./tracking-input.component.css']
})
export class TrackingInputComponent {
  invoiceNumber: string = '';
  @Output() trackInvoice = new EventEmitter<string>();

  onSubmit() {
    if (this.invoiceNumber.trim()) {
      this.trackInvoice.emit(this.invoiceNumber.trim());
    }
  }
}