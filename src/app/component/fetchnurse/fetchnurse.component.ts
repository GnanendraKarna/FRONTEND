import { Component, OnInit } from '@angular/core';
import { Nurse } from '../../model/nurse';
import { NurseService } from '../../nurse.service';


@Component({
  selector: 'app-fetchnurse',
  templateUrl: './fetchnurse.component.html',
  styleUrl: './fetchnurse.component.css'
})
export class FetchnurseComponent  {
  empid = 0;
  nurse: Nurse | undefined;

  constructor(private nurseService: NurseService) {}

  findNurseById() {
    this.nurseService.getNurseById(this.empid).subscribe(
      (result) => {
        this.nurse = result;
        
      },
      (error) => {
        console.error('Error fetching nurse by ID:', error);
        // Handle error as needed
      }
    );
  }
}
