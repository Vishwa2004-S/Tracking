import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceData } from '../../models/tracking.model';

@Component({
  selector: 'app-shipment-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipment-facts.component.html',
  styleUrls: ['./shipment-facts.component.css']
})
export class ShipmentFactsComponent {
  @Input() invoiceData: InvoiceData | null = null;
}