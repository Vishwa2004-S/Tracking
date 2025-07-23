import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrackingInputComponent } from './components/tracking-input/tracking-input.component';
import { ShipmentFactsComponent } from './components/shipment-facts/shipment-facts.component';
import { DeliveryStatusComponent } from './components/delivery-status/delivery-status.component';
import { PackageDetailsComponent } from './components/package-details/package-details.component';
import { TravelHistoryComponent } from './components/travel-history/travel-history.component';
import { TrackingService } from './services/tracking.service';
import { InvoiceData, CartonData } from './models/tracking.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TrackingInputComponent,
    ShipmentFactsComponent,
    DeliveryStatusComponent,
    PackageDetailsComponent,
    TravelHistoryComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  invoiceData: InvoiceData | null = null;
  cartonData: CartonData[] | null = null;
  loading = false;
  error: string | null = null;

  constructor(private trackingService: TrackingService) {}

  trackInvoice(invoiceNo: string) {
    this.loading = true;
    this.error = null;
    this.invoiceData = null;
    this.cartonData = null;

    this.trackingService.getInvoiceTracking(invoiceNo).subscribe({
      next: (invoiceResponse) => {
        if (invoiceResponse.status === 'success' && invoiceResponse.data.length > 0) {
          this.invoiceData = invoiceResponse.data[0];
          
          // Get carton tracking for the first carton (assuming at least one carton exists)
          const cartonNo = '1'; // Assuming we're tracking the first carton
          this.trackingService.getCartonTracking(invoiceNo, cartonNo).subscribe({
            next: (cartonResponse) => {
              if (cartonResponse.status === 'success' && cartonResponse.data.length > 0) {
                this.cartonData = cartonResponse.data;
              } else {
                this.error = 'No carton data found for this invoice.';
              }
              this.loading = false;
            },
            error: (err) => {
              this.error = 'Failed to load carton tracking details.';
              this.loading = false;
              console.error(err);
            }
          });
        } else {
          this.error = 'No invoice data found. Please check the invoice number.';
          this.loading = false;
        }
      },
      error: (err) => {
        this.error = 'Failed to load invoice tracking. Please try again later.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}