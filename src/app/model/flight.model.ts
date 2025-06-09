// src/app/models/flight.model.ts

export interface Flight {
  id: number;           // Uçuşun benzersiz kimliği
  departure: string;    // Kalkış yeri
  arrival: string;      // Varış yeri
  date: string;         // Uçuş tarihi, ISO formatta (örn. "2025-05-20T14:00:00")
  price: number;        // Bilet fiyatı (TL)
}
