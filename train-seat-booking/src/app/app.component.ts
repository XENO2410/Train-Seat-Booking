import { Component } from '@angular/core';
import { SeatLayoutComponent } from './seat-layout/seat-layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, SeatLayoutComponent]
})
export class AppComponent {
  title = 'train-seat-booking';
}