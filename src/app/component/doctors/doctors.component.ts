import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{

  doctors!: any[];

  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    this._http.get<any[]>('http://localhost:8080/api/physician')
      .subscribe(doctors => {
        this.doctors = doctors;
      });
  }
}
