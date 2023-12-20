import { Component } from '@angular/core';
import { Physician } from '../../model/physician';
import { PhysicianService } from '../physician.service';

@Component({
  selector: 'app-addphysician',
  templateUrl: './addphysician.component.html',
  styleUrl: './addphysician.component.css'
})
export class AddphysicianComponent {
  physician: Physician = {
    employeeid: 0,
    name: '',
    position: '',
    ssn: 0
  };

  constructor(private physicianService: PhysicianService) {}

  savePhysician(){
    console.log('P');
    //debugger;
    this.physicianService.savePhysician(this.physician).subscribe(savedPhysician => {
      console.log('Physician saved successfully:', savedPhysician);
      alert("Physician Added Succesfully.");
      // Handle any additional logic after saving
    });
  }

}
