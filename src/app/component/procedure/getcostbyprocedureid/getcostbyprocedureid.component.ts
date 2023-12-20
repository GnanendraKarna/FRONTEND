import { Component } from '@angular/core';
import { Procedure } from '../../../model/procedure';
import { ProcedureService } from '../procedure.service';

@Component({
  selector: 'app-getcostbyprocedureid',
  templateUrl: './getcostbyprocedureid.component.html',
  styleUrl: './getcostbyprocedureid.component.css'
})
export class GetcostbyprocedureidComponent {
  procedure: Procedure | undefined;
  searchId: number | undefined;

  constructor(private procedureService: ProcedureService) {}

  searchProcedureCost() {
    if (this.searchId !== undefined) {
      this.procedureService.getCostById(this.searchId).subscribe(
        (procedure) => {
          this.procedure = procedure;
        },
        (error) => {
          console.error('Error fetching procedure cost:', error);
          // Handle error as needed
        }
      );
    }
  }

}
