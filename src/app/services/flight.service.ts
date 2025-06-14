import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiUrl = 'http://localhost:5121/api/Flights';  // Backend'deki uçuş endpoint

  constructor(private http: HttpClient) { }

  getFlights(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFlightById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  bookFlight(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book`, data);
  }
}
