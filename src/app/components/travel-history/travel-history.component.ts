import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartonData } from '../../models/tracking.model';

@Component({
  selector: 'app-travel-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-history.component.html',
  styleUrls: ['./travel-history.component.css'],
})
export class TravelHistoryComponent {
  @Input() cartonData: CartonData[] | null = null;

  getStatusEmoji(status: string): string {
    const statusMap: { [key: string]: string } = {
      'DELIVERED': '📦✅',
      'Vehicle for delivery': '🚚',
      'HAWB Booked At Origin': '📝',
      'In Transit': '✈️',
      'Out for Delivery': '🛵',
      'Processing': '⏳',
      default: '📍'
    };
    return statusMap[status] || statusMap['default'];
  }
}