import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getSeats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/seats`);
  }

  bookSeats(numberOfSeats: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book`, { numberOfSeats });
  }
}