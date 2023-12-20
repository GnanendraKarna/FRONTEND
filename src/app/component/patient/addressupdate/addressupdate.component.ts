import { Component } from '@angular/core';
import { PatientService } from '../../../patient.service';

@Component({
  selector: 'app-addressupdate',
  templateUrl: './addressupdate.component.html',
  styleUrl: './addressupdate.component.css'
})
export class AddressupdateComponent {
  ssn: number | any;
  updatedValue: any = { address: '' };

  constructor(private patientService: PatientService) {}

  updateAddress() {
    this.patientService.updateAddress(this.ssn, this.updatedValue.address).subscribe(
      data => {
        console.log('Address updated successfully', data);
        this.updatedValue = { ...data };
      },
      error => {
        console.error('Error updating address', error);
        // Handle error
      }
    );
    alert("Address updated successfully");
  }

}
