import { Component } from '@angular/core';
import { TrainedIn } from '../../model/procedure';
import { TrainedInService } from '../../trained-in.service';

@Component({
  selector: 'app-getprocbycertification',
  templateUrl: './getprocbycertification.component.html',
  styleUrl: './getprocbycertification.component.css'
})
export class GetprocbycertificationComponent {
  certificates: TrainedIn[] = [];

  constructor(private service: TrainedInService) { }

  ngOnInit(): void {
    this.getProcedureByCertification();
  }

  getProcedureByCertification() {
    this.service.getProcedureByCertification().subscribe(
      certificates => {
        this.certificates = certificates;
      },
      error => {
        console.error(error);
        // Handle the error, display a message, or log it
      }
    );
  }

}
