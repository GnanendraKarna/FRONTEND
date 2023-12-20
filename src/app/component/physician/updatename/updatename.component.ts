import { Component } from '@angular/core';
import { PhysicianService } from '../../physician.service';

@Component({
  selector: 'app-updatename',
  templateUrl: './updatename.component.html',
  styleUrl: './updatename.component.css'
})
export class UpdatenameComponent {
  employeeid: number | any;
  updatedPhysician: any={name: ''};

  constructor(private physicianService: PhysicianService) {}

  updateName() {
    this.physicianService.updateName(this.employeeid, this.updatedPhysician.name).subscribe(
      (data)=>{
      this.updatedPhysician={...data};
    },
    error=>{
      console.error('Error updating name',error);
    }
    );
    alert("Physician Name updated succuessfully");
  }
  

}
