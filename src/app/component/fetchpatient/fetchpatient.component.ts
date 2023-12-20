import { Component } from '@angular/core';
import { PatientService } from '../../patient.service';
import { Patient } from '../../model/patients';

@Component({
  selector: 'app-fetchpatient',
  templateUrl: './fetchpatient.component.html',
  styleUrl: './fetchpatient.component.css'
})
export class FetchpatientComponent {
  patients: Patient[] = [];
  pcpToSearch: number | any;

  constructor(private patientService: PatientService) { }
  getPatientsByPcp(): void {
    if (this.pcpToSearch) {
      this.patientService.getPatientsByPcp(this.pcpToSearch).subscribe(
        patients => {
          this.patients = patients;
        },
        error => {
          console.error('Error fetching patients by PCP:', error);
          
        }
      );
    }

}
}
