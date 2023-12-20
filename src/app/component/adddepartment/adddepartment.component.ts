import { Component } from '@angular/core';
import { Department } from '../../model/department';
import { DepartmentService } from '../../department.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrl: './adddepartment.component.css'
})
export class AdddepartmentComponent {
  department: Department = { departmentid: 0, name: '', head: 0 };

  constructor(private departmentService: DepartmentService) { }

  addDepartment() {
    this.departmentService.addDepartment(this.department)
      .subscribe(response => {
        console.log(response);
    
      }, error => {
        console.error(error);
        
      });
  }

}
