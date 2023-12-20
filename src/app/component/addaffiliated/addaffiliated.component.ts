import { Component, OnInit } from '@angular/core';
import { AffiliatedwithService } from '../../affiliatedwith.service';
import { AffiliatedWith } from '../../model/affiliated';

@Component({
  selector: 'app-addaffiliated',
  templateUrl: './addaffiliated.component.html',
  styleUrl: './addaffiliated.component.css'
})
export class AddaffiliatedComponent implements OnInit {
  affiliation: AffiliatedWith = {
    physician: 0,
    department: 0,
    primaryaffiliation: true
  };

  constructor(private service: AffiliatedwithService) { }

  ngOnInit(): void {
    // Initialize data or perform any necessary tasks on component initialization
  }

  addAffiliation() {
    this.service.addAffiliation(this.affiliation).subscribe(
      response => {
        // Handle the response (e.g., show success message)
        console.log('Response:', response);
      },
      error => {
        // Handle the error (e.g., display an error message)
        console.error('Error:', error);
      }
    );
    alert("Affiliation added for the Physician");
  }

}
