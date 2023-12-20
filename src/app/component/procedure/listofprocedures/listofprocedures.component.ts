import { Component } from '@angular/core';
import { Procedure } from '../../../model/procedure';
import { ProcedureService } from '../procedure.service';

@Component({
  selector: 'app-listofprocedures',
  templateUrl: './listofprocedures.component.html',
  styleUrl: './listofprocedures.component.css'
})
export class ListofproceduresComponent {
  procedures: Procedure[] = [];

  constructor(private procedureService: ProcedureService) {}

  ngOnInit() {
    this.loadProcedures();
  }

  loadProcedures() {
    this.procedureService.getAllProcedures().subscribe(
      (procedures) => {
        this.procedures = procedures;
      },
      (error) => {
        console.error('Error fetching procedures:', error);
        // Handle error as needed
      }
    );
  }

}
