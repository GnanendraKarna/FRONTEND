import { Component } from '@angular/core';
import { Patient } from '../../model/patients';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../patient.service';
import { AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-getpatientbyappointmentid',
  templateUrl: './getpatientbyappointmentid.component.html',
  styleUrl: './getpatientbyappointmentid.component.css'
})
export class GetpatientbyappointmentidComponent {
  patient: Patient | undefined;
  appointmentId: number|any;

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.appointmentId = +params['appointmentid'];
      this.getPatientByAppointmentId();
    });
  }

  getPatientByAppointmentId(): void {
    this.appointmentService.getPatientByAppointmentId(this.appointmentId).subscribe(
      patient => {
        this.patient = patient;
      },
      error => {
        console.error(error);
      }
    );
  }
}

