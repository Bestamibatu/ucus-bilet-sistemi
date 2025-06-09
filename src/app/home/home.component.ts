// src/app/pages/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { Flight } from 'src/app/model/flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flights: Flight[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.loadFlights();
  }

  private loadFlights(): void {
    this.isLoading = true;
    this.flightService.getFlights().subscribe({
      next: (data: Flight[]) => {
        this.flights = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Uçuş yükleme hatası:', err);
        this.errorMessage = 'Uçuş verileri alınamadı.';
        this.isLoading = false;
      }
    });
  }
}
