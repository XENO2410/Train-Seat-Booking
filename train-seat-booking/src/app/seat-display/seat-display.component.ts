import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatService } from '../seat.service';

@Component({
  selector: 'app-seat-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-display.component.html',
  styleUrls: ['./seat-display.component.css']
})
export class SeatDisplayComponent implements OnInit {
  seats: any[] = [];
  errorMessage: string = '';

  constructor(private seatService: SeatService) {}

  ngOnInit(): void {
    this.loadSeats();
  }

  loadSeats(): void {
    this.seatService.getSeats().subscribe(
      (data) => {
        this.seats = data.seats;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}