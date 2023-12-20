import { Component } from '@angular/core';
import { Appointment } from '../../model/appointement';
import { AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrl: './all-appointments.component.css'
})
export class AllAppointmentsComponent {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }

}
