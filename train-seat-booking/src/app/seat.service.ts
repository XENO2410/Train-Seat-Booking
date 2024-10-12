import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSeats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/seats`);
  }

  bookSeats(numberOfSeats: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book`, { numberOfSeats });
  }
}