import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeatService } from '../seat.service';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class SeatLayoutComponent implements OnInit {
  seats: any[] = [];
  bookedSeats: number[] = [];
  numberOfSeatsToBook: number = 0;
  rows: any[][] = [];

  constructor(private seatService: SeatService) {}

  ngOnInit(): void {
    this.getSeats();
  }

  getSeats(): void {
    this.seatService.getSeats().subscribe((data) => {
      this.seats = data.seats;
      this.organizeSeatsIntoRows();
    });
  }

  organizeSeatsIntoRows(): void {
    this.rows = [];
    for (let i = 0; i < this.seats.length; i += 7) {
      this.rows.push(this.seats.slice(i, i + 7));
    }
  }

  bookSeats(): void {
    if (this.numberOfSeatsToBook < 1 || this.numberOfSeatsToBook > 7) {
      alert('You can book between 1 and 7 seats at a time.');
      return;
    }

    this.seatService.bookSeats(this.numberOfSeatsToBook).subscribe(
      (data) => {
        this.bookedSeats = data.bookedSeats;
        this.getSeats();
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  getSeatClass(seat: any): string {
    return seat.booked ? 'booked' : 'available';
  }
}