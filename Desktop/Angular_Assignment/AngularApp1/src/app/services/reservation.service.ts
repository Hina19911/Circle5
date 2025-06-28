import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Reservation } from '../model/reservation.model'; 
import { Observable } from 'rxjs'; 
 
@Injectable({ providedIn: 'root' }) 
export class ReservationService { 
  private apiUrl = 'http://localhost:3000/reservations'; 
  constructor(private http: HttpClient) {} 
 
  getReservations(): Observable<Reservation[]> { 
    return this.http.get<Reservation[]>(this.apiUrl); 
  } 
 
  addReservation(reservation: Reservation): Observable<Reservation> { 
    return this.http.post<Reservation>(this.apiUrl, reservation); 
  } 
} 
 
