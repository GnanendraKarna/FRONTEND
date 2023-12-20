import { Component } from '@angular/core';
import { Department } from '../../model/department';
import { DepartmentService } from '../../department.service';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrl: './departmentlist.component.css'
})
export class DepartmentlistComponent {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getAllDepartments()
      .subscribe(data => {
        this.departments = data;
      }, error => {
        console.error(error);
        // Handle error
      });
  }

}
