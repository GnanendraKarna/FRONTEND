import { Component } from '@angular/core';
import { Physician } from '../../model/physician';
import { PhysicianService } from '../physician.service';

@Component({
  selector: 'app-physicianbyid',
  templateUrl: './physicianbyid.component.html',
  styleUrl: './physicianbyid.component.css'
})
export class PhysicianbyidComponent {
  empid:any;
  physician: Physician|any;

  constructor(private physicianService: PhysicianService) {}

  getPhysician() {
    this.physicianService.getPhysicianById(this.empid).subscribe(
      (result: Physician) => {
        this.physician = result;
      },
      (error) => {
        console.error('Error fetching physician:', error);
      }
    );

}
}

