import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Nurse } from '../../model/nurse';
import { NurseService } from '../../nurse.service';

@Component({
  selector: 'app-addnurse',
  templateUrl: './addnurse.component.html',
  styleUrl: './addnurse.component.css'
})
export class AddnurseComponent {
  nurse: Nurse = {
    employeeid: 0,
    name: '',
    position: '',
    registered: false,
    ssn: 0
  };

  constructor(private nurseService: NurseService) {}

  saveNurse() {
    this.nurseService.saveNurse(this.nurse).subscribe(
      (response) => {
        console.log(response);
        alert("nurse details saved");
        
      },
      (error) => {
        console.error('Error saving nurse:', error);
        alert("not saved")
        
      }
    );
  }
}
