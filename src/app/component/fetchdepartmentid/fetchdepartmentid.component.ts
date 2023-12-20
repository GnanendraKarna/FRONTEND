import { Component } from '@angular/core';
import { Department } from '../../model/department';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../department.service';

@Component({
  selector: 'app-fetchdepartmentid',
  templateUrl: './fetchdepartmentid.component.html',
  styleUrl: './fetchdepartmentid.component.css'
})
export class FetchdepartmentidComponent {
  department: any; // Replace 'any' with the actual type of your department
  searchId: any;

  constructor(private departmentService: DepartmentService) {}

  searchDepartment() {
    // Call your department service to get details by ID
    this.departmentService.getDepartmentById(this.searchId).subscribe(
      (result: any) => {
        this.department = result;
      },
      (error: any) => {
        console.error('Error fetching department details:', error);
      }
    );
  }
}
