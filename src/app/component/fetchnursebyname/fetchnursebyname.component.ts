import { Component } from '@angular/core';
import { Nurse } from '../../model/nurse';
import { NurseService } from '../../nurse.service';

@Component({
  selector: 'app-fetchnursebyname',
  templateUrl: './fetchnursebyname.component.html',
  styleUrl: './fetchnursebyname.component.css'
})
export class FetchnursebynameComponent {
  name: string|any;
  nurse: any; 

  

  constructor(private nurseService: NurseService) {}

  searchNurseByName(): void {
    this.nurseService.getNurseByName(this.name)
      .subscribe(
        (data: Nurse) => {
          this.nurse = data;
          
        },
        error => {
          console.error('Error fetching nurse:', error);
        }
      );
  }

}
