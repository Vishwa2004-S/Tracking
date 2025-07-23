import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvoiceResponse, CartonResponse } from '../models/tracking.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  private baseUrl = 'http://45.118.162.26:81/Maran_logistics/origin_php/origin_api/index.php';

  constructor(private http: HttpClient) {}

  getInvoiceTracking(invoiceNo: string): Observable<InvoiceResponse> {
    return this.http.get<InvoiceResponse>(`${this.baseUrl}/get_invoice_tracking?invoice_no=${invoiceNo}`);
  }

  getCartonTracking(invoiceNo: string, cartonNo: string): Observable<CartonResponse> {
    return this.http.get<CartonResponse>(`${this.baseUrl}/get_carton_tracking?invoice_no=${invoiceNo}&carton_no=${cartonNo}`);
  }
}