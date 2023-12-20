import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrl: './addappointment.component.css'
})
export class AddappointmentComponent {
  appointment: any = {}; // Use your Appointment model here
  errorMessage: string = '';

  constructor(private appointmentService: AppointmentService) {}

  addAppointment(appointmentForm: NgForm) {
    this.appointmentService.addAppointment(this.appointment).subscribe(
      () => {
        console.log('Appointment added successfully');
        // Add any additional logic or redirection after successful addition
        appointmentForm.resetForm();
      },
      (error) => {
        console.error('Error adding appointment:', error);
        this.errorMessage = 'Error adding appointment. Please try again.'; // Set error message
      }
    );
    alert("Appointment Added");
  }

}
