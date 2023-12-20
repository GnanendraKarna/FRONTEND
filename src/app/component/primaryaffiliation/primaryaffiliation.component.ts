import { Component } from '@angular/core';
import { AffiliatedWith } from '../../model/affiliated';
import { AffiliatedwithService } from '../../affiliatedwith.service';

@Component({
  selector: 'app-primaryaffiliation',
  templateUrl: './primaryaffiliation.component.html',
  styleUrl: './primaryaffiliation.component.css'
})
export class PrimaryaffiliationComponent {
  physicianId: number|any;
  primaryAffiliation: boolean|any;

  constructor(private primaryAffiliationService: AffiliatedwithService) { }
  updatePrimaryAffiliation() {
    this.primaryAffiliationService.updatePrimaryAffiliation(this.physicianId, this.primaryAffiliation).subscribe(
      result => {
        // Handle the result (e.g., update UI)
        console.log('Updated Primary Affiliation:', result);
      },
      error => {
        // Handle the error (e.g., display an error message)
        console.error('Error:', error);
      }
    );
  }

}
