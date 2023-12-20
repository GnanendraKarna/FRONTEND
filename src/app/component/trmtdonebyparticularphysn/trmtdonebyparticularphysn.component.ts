import { Component } from '@angular/core';
import { TrainedInService } from '../../trained-in.service';
import { Procedure } from '../../model/procedure';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trmtdonebyparticularphysn',
  templateUrl: './trmtdonebyparticularphysn.component.html',
  styleUrl: './trmtdonebyparticularphysn.component.css'
})
export class TrmtdonebyparticularphysnComponent {
  procedures: Procedure[] = [];
  searchPhysicianId: number|any;

  constructor(private route: ActivatedRoute, private service: TrainedInService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const physicianId = +params['physicianid'];
      this.getTreatmentForPhysician(physicianId);
    });
  }

  getTreatmentForPhysician(physicianId: number) {
    this.service.getTreatmentForPhysician(physicianId).subscribe(
      procedures => {
        this.procedures = procedures;
      },
      error => {
        console.error(error);
        // Handle the error, display a message, or log it
      }
    );
  }

  searchByPhysician() {
    if (this.searchPhysicianId) {
      this.getTreatmentForPhysician(this.searchPhysicianId);
    } else {
      // Handle case when the searchPhysicianId is empty or not provided
      // For example, display an error message or reset the list
    }
  }
}
