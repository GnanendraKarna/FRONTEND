import { Component } from '@angular/core';
import { ProcedureService } from '../procedure.service';
import { Procedure } from '../../../model/procedure';

@Component({
  selector: 'app-addprocedure',
  templateUrl: './addprocedure.component.html',
  styleUrl: './addprocedure.component.css'
})
export class AddprocedureComponent {
  procedure: Procedure = {
    code: 0,
    name: '',
    cost: 0,
    listofTrainedIn: []
  };

  constructor(private procedureService: ProcedureService) {}

  addTreatment() {
    this.procedureService.addProcedure(this.procedure).subscribe(
      () => {
        console.log('Record created successfully');
        // Handle success as needed
      },
      (error) => {
        console.error('Error creating record:', error);
        // Handle error as needed
      }
    );
    alert("Procedure added successfully");
  }

}
