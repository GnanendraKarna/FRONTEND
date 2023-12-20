import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NurseService } from '../../../nurse.service';

@Component({
  selector: 'app-ssnupdate',
  templateUrl: './ssnupdate.component.html',
  styleUrl: './ssnupdate.component.css'
})
export class SsnupdateComponent {
  empId: number | any;
  updatedNurse: any; // Variable to store updated nurse details

  constructor(private route: ActivatedRoute, private nurseService: NurseService) {}

  ngOnInit() {
    const empIdParam = this.route.snapshot.paramMap.get('empId');
    this.empId = empIdParam ? +empIdParam : undefined;
    this.searchNurse();
  }

  searchNurse() {
    this.nurseService.getNurseById(this.empId).subscribe(
      data => {
        console.log('Nurse found', data);
        this.updatedNurse = { ...data }; // Create a copy to avoid modifying the original object
      },
      error => {
        console.error('Error searching for nurse', error);
        // Handle error
      }
    );
  }

  updateSsn() {
    this.nurseService.updateSsn(this.empId, this.updatedNurse.ssn).subscribe(
      data => {
        console.log('SSN updated successfully', data);
        this.updatedNurse = { ...data }; // Update the local object with the response
        
      },
      error => {
        console.error('Error updating SSN', error);
        // Handle error
      }
    );
  }

}
