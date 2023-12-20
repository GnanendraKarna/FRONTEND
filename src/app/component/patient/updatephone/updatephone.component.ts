import { Component } from '@angular/core';
import { PatientService } from '../../../patient.service';

@Component({
  selector: 'app-updatephone',
  templateUrl: './updatephone.component.html',
  styleUrl: './updatephone.component.css'
})
export class UpdatephoneComponent {
  ssn: number=0;
  updatedValue: any = { phone: '' };

  constructor(private patientService: PatientService) {}

  updatePhone() {
    this.patientService.updatePhone(this.ssn, this.updatedValue.phone).subscribe(
      data => {
       // console.log('Phone updated successfully', data);
        
        this.updatedValue = { ...data };
      },
      error => {
        console.error('Error updating phone', error);
        // Handle error
      }
    );
    alert("mobile updated succuessfully");
  }
}
