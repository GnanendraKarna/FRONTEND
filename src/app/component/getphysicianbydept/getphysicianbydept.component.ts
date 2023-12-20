import { Component } from '@angular/core';
import { Physician } from '../../model/physician';
import { ActivatedRoute } from '@angular/router';
import { AffiliatedwithService } from '../../affiliatedwith.service';

@Component({
  selector: 'app-getphysicianbydept',
  templateUrl: './getphysicianbydept.component.html',
  styleUrl: './getphysicianbydept.component.css'
})
export class GetphysicianbydeptComponent {
  physicians: Physician[] = [];
  searchDeptId: number|any;

  constructor(private route: ActivatedRoute, private service: AffiliatedwithService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const deptId = +params['deptid']; // Extract department ID from the route parameters
      this.getPhysiciansByDepartment(deptId);
    });
  }

  getPhysiciansByDepartment(deptId: number) {
    this.service.getPhysiciansByDepartment(deptId).subscribe(
      physicians => {
        this.physicians = physicians;
      },
      error => {
        console.error(error);
        // Handle the error, display a message, or log it
      }
    );
  }

  searchByDepartment() {
    if (this.searchDeptId) {
      this.getPhysiciansByDepartment(this.searchDeptId);
    } else {
      console.error(Error);
    }
  }
}
