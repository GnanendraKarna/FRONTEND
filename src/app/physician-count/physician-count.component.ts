import { Component } from '@angular/core';
import { AffiliatedwithService } from '../affiliatedwith.service';

 
@Component({
  selector: 'app-physician-count',
  templateUrl: './physician-count.component.html',
  styleUrls: ['./physician-count.component.css'],
})
export class PhysicianCountComponent {
  departmentid: any;
  physicianCount: any;
 
  constructor(private physicianService: AffiliatedwithService) {}
 
  searchPhysicianCount() {
    this.physicianService.getPhysicianCount(this.departmentid).subscribe(
      (count: number) => {
        this.physicianCount = count;
      },
      (error) => {
        console.error('Error fetching physician count:', error);
        // Handle error as needed
      }
    );
  }
}