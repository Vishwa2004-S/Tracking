import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartonData } from '../../models/tracking.model';

@Component({
  selector: 'app-package-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent {
  @Input() cartonData: CartonData[] | null = null;
}