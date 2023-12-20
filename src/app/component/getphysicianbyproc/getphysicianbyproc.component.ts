import { Component, OnInit } from '@angular/core';
import { Physician } from '../../model/physician';
import { ActivatedRoute } from '@angular/router';
import { TrainedInService } from '../../trained-in.service';

@Component({
  selector: 'app-getphysicianbyproc',
  templateUrl: './getphysicianbyproc.component.html',
  styleUrl: './getphysicianbyproc.component.css'
})
export class GetphysicianbyprocComponent implements OnInit {
  physicians: Physician[] = [];
  searchProcedureId: number|any;

  constructor(private route: ActivatedRoute, private service: TrainedInService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const procedureId = +params['procedureid'];
      this.getPhysician(procedureId);
    });
  }

  getPhysician(procedureId: number) {
    this.service.getPhysician(procedureId).subscribe(
      physicians => {
        this.physicians = physicians;
      },
      error => {
        console.error(error);
        // Handle the error, display a message, or log it
      }
    );
  }

  searchByProcedure() {
    if (this.searchProcedureId) {
      this.getPhysician(this.searchProcedureId);
    } else {
      // Handle case when the searchProcedureId is empty or not provided
      // For example, display an error message or reset the list
    }
  }
  }

  


