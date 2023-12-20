import { Component } from '@angular/core';
import { PatientService } from '../../patient.service';
import { Patient } from '../../model/patients';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrl: './addpatient.component.css'
})
export class AddpatientComponent {
  patient: Patient = {
    ssn: 0,
    name: '',
    address: '',
    phone: '',
    insuranceid: 0,
    pcp: 0
  };

  constructor(private patientService: PatientService) { }

  savePatient(): void {
    this.patientService.savePatient(this.patient).subscribe(response => {
      console.log(response); // Handle the response as needed
      
    });
    alert('Details Added!!');
  }

}
