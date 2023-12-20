import { Component } from '@angular/core';
import { PhysicianService } from '../../physician.service';

@Component({
  selector: 'app-updateposition',
  templateUrl: './updateposition.component.html',
  styleUrl: './updateposition.component.css'
})
export class UpdatepositionComponent {
  empId: number | any;
  updatedPhysician: any = { position: '' };

  constructor(private physicianService: PhysicianService) {}

  updatePosition() {
    this.physicianService.updatePosition(this.empId, this.updatedPhysician.position).subscribe(
      data => {
        console.log('Position updated successfully', data);
        this.updatedPhysician = { ...data };
      },
      error => {
        console.error('Error updating position', error);
        // Handle error
      }
    );
    alert("Physician Name updated succuessfully");
  }

}
