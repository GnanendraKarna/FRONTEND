import { Component } from '@angular/core';
import { Nurse } from '../../model/nurse';
import { NurseService } from '../../nurse.service';

@Component({
  selector: 'app-allnurses',
  templateUrl: './allnurses.component.html',
  styleUrl: './allnurses.component.css'
})
export class AllnursesComponent {
  nurses: Nurse[] = [];

  constructor(private nurseService: NurseService) {}

  ngOnInit() {
    this.fetchAllNurses();
  }

  fetchAllNurses() {
    this.nurseService.getAllNurses().subscribe(
      (result) => {
        this.nurses = result;
      },
      (error) => {
        console.error('Error fetching nurses:', error);
        // Handle error as needed
      }
    );
  }
}


