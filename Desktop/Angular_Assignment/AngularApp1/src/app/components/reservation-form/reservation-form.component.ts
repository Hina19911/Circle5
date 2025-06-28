import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { Area } from '../../model/area.model';
import { Reservation } from '../../model/reservation.model';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.html',
  styleUrls: ['./reservation-form.scss']
})
export class ReservationFormComponent implements OnInit {
  reservationForm!: FormGroup;
  areas: Area[] = [
    { id: 1, name: 'Forest Mills' },
    { id: 2, name: 'Maple Ridge' },
    { id: 3, name: 'Cedar Grove' }
  ];

  timeSlots: string[] = ['09:00', '12:00', '15:00', '18:00'];

  constructor(private fb: FormBuilder, private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      areaId: [null, Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation).subscribe(() => {
        alert('Reservation added successfully!');
        this.reservationForm.reset();
      });
    }
  }
}