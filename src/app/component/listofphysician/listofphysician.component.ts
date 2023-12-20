import { Component } from '@angular/core';
import { Physician } from '../../model/physician';
import { PhysicianService } from '../physician.service';

@Component({
  selector: 'app-listofphysician',
  templateUrl: './listofphysician.component.html',
  styleUrl: './listofphysician.component.css'
})
export class ListofphysicianComponent {
  position = '';
  physicians: Physician[] = [];

  constructor(private physicianService: PhysicianService) {}

  ngOnInit() {
    // You can load the default data or do any other initialization here
  }

  fetchPhysiciansByPosition() {
    this.physicianService.getPhysiciansByPosition(this.position).subscribe(
      (result) => {
        this.physicians = result;
      },
      (error) => {
        console.error('Error fetching physicians by position:', error);
      }
    );
  }

}
