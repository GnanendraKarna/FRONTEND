import { Component } from '@angular/core';
import { PhysicianService } from '../physician.service';
import { Physician } from '../../model/physician';
import { AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-getphysicianbyappointmentid',
  templateUrl: './getphysicianbyappointmentid.component.html',
  styleUrl: './getphysicianbyappointmentid.component.css'
})

  export class GetphysicianbyappointmentidComponent {
    appointmentId: number|any;
    physician: Physician|any;
   
    constructor(private appointmentService: AppointmentService) { }
   
    ngOnInit(): void {
      // Initialize data or perform any necessary tasks on component initialization
    }
   
    getPhysicianByAppointmentId() {
      this.appointmentService.getPhysicianByAppointmentId(this.appointmentId)
        .subscribe(
          (data: Physician) => {
            this.physician = data;
          },
          error => {
            console.error('Error:', error);
          }
        );
    }
  }