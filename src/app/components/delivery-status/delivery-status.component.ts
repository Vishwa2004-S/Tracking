import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceData } from '../../models/tracking.model';

@Component({
  selector: 'app-delivery-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-status.component.html',
  styleUrls: ['./delivery-status.component.css']
})
export class DeliveryStatusComponent {
  @Input() invoiceData: InvoiceData | null = null;
}