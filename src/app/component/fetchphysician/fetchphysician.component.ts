import { Component } from '@angular/core';
import { Physician } from '../../model/physician';
import { PhysicianService } from '../physician.service';

@Component({
  selector: 'app-fetchphysician',
  templateUrl: './fetchphysician.component.html',
  styleUrl: './fetchphysician.component.css'
})
export class FetchphysicianComponent {
  physicianName = '';
  physician: Physician | undefined;

  constructor(private physicianService: PhysicianService) {}

  fetchPhysicianByName() {
    this.physicianService.getPhysicianByName(this.physicianName).subscribe(
      (result) => {
        this.physician = result;
      },
      (error) => {
        console.error('Error fetching physician by name:', error);
      }
    );
  }

}
