import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeatService } from '../seat.service';

@Component({
  selector: 'app-seat-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent {
  bookedSeats: number[] = [];
  errorMessage: string = '';
  numberOfSeatsToBook: number = 0;

  constructor(private seatService: SeatService) {}

  bookSeats(): void {
    if (this.numberOfSeatsToBook <= 0 || this.numberOfSeatsToBook > 7) {
      this.errorMessage = 'Please enter a valid number of seats to book (1-7).';
      return;
    }

    this.seatService.bookSeats(this.numberOfSeatsToBook).subscribe(
      (data) => {
        this.bookedSeats = data.bookedSeats;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}