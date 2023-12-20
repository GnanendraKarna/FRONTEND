import { Component } from '@angular/core';
import { TrainedIn } from '../../model/procedure';
import { TrainedInService } from '../../trained-in.service';

@Component({
  selector: 'app-addcertificate',
  templateUrl: './addcertificate.component.html',
  styleUrl: './addcertificate.component.css'
})
export class AddcertificateComponent {
  certificate: TrainedIn = {
    physician: 0,
    treatment: 0,
    certificationdate: new Date(),
    certificationexpires: new Date()
  };

  constructor(private service: TrainedInService) { }

  ngOnInit(): void {
    // Initialize data or perform any necessary tasks on component initialization
  }

  addCertificate() {
    this.service.addCertificate(this.certificate).subscribe(
      response => {
        // Handle the response (e.g., show success message)
        console.log('Response:', response);
        
      },
      error => {
        // Handle the error (e.g., display an error message)
        console.error('Error:', error);
      }
    );
    alert("Date of the certificate updated succesfully");
  }

}
