import { Component } from '@angular/core';
import { AffiliatedwithService } from '../../affiliatedwith.service';

@Component({
  selector: 'app-getprimaryaffiliation',
  templateUrl: './getprimaryaffiliation.component.html',
  styleUrl: './getprimaryaffiliation.component.css'
})
export class GetprimaryaffiliationComponent {
  physicianId: number|any;
  primaryAffiliation: boolean|any;

  constructor(private primaryAffiliationService: AffiliatedwithService) { }

  ngOnInit(): void {
  }

  getPrimaryAffiliation() {
    this.primaryAffiliationService.getPrimaryAffiliationByPhysician(this.physicianId).subscribe(
      result => {
        console.log('Primary Affiliation:', result);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}
