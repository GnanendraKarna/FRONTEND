import { Component } from '@angular/core';
import { PatientService } from '../../patient.service';
import { Patient } from '../../model/patients';

@Component({
  selector: 'app-listofpatient',
  templateUrl: './listofpatient.component.html',
  styleUrl: './listofpatient.component.css'
})
export class ListofpatientComponent {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients(): void {
    this.patientService.getAllPatients().subscribe(
      patients => {
        this.patients = patients;
      },
      error => {
        console.error('Error fetching patients:', error);
      }
    );
  }


}
